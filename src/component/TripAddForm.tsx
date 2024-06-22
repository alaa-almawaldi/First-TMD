import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  Textarea,
  useSteps,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import TripAddStep from "./TripAddStep";
import { FONTS } from "../fonts";
import useFetchData from "../hooks/useFetchData";
import { FetchResponse } from "../services/api-client";
import { Country, Place } from "../Interfaces/Place";
import useSendData from "../hooks/useSendData";
import { Hotel } from "../Interfaces/Hotel";
import { User } from "../Interfaces/User";
import { PlaneTrip } from "../Interfaces/Airport";
import { Activities, Trip } from "../Interfaces/Trip";

const TripAddForm = () => {
  const [formData, setFormData] = useState({
    trip_name: "",

    source_trip_id: "", //fix
    destination_trip_id: "0",

    start_date: "", //
    end_date: "", //

    plane_trip: "",
    plane_trip_away: "",
    hotel_id: "",

    ratio: "",
    number_of_people: "",
    trip_capacity: "",
    trip_note: "",

    places: [],
    activities: [],

    //others
    flight_date: "",
  });

  const [planeTrip, setPlaneTrip] = useState({
    country_source_id: "",
    country_destination_id: "",
    flight_date: "",
    type: "1",
  });

  const [selectedPlaces, setSelectedPlaces] = useState([]); //for places
  const [selectedActs, setSelectedActs] = useState([]);

  const { data: user } = useFetchData<FetchResponse<User>>("/admin-profile");

  const { data: countries } = useFetchData<FetchResponse<Country[]>>(
    "/admin/get_all_country"
  );

  console.log(" ---- ", formData?.destination_trip_id);

  const { data: hotels } = useFetchData<FetchResponse<Hotel[]>>(
    `/admin/get_Hotel_By_Country/${formData?.destination_trip_id}`
  );

  const { data: places } = useFetchData<FetchResponse<Country>>(
    `/admin/places-depending-on-country/${formData?.destination_trip_id}`
  );

  const { data: planeTrips, mutate } = useSendData<FetchResponse<PlaneTrip[]>>(
    "/admin/search-for-plane-trip"
  );

  const { data: staticTrip, mutate: mutateStaticTrip } = useSendData<
    FetchResponse<Trip[]>
  >("/admin/Add_booking_Admin");

  const allPlanes = (planeTrips?.data as unknown as PlaneTrip[])?.map(
    (data) => data.plane
  );

  const { data: activities } = useFetchData<FetchResponse<Activities[]>>(
    "/admin/get-all-activity"
  );

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    console.log("submit Form", formData);
  };

  const handeSelectPlaces = (selectedOptions) => {
    setSelectedPlaces(selectedOptions);
    setFormData((prevData) => ({
      ...prevData,
      places: selectedOptions.map((pl) => pl.id),
    }));
    console.log("submit Form", formData);
  };
  const handeSelectActs = (selectedOptions) => {
    setSelectedActs(selectedOptions);
    setFormData((prevData) => ({
      ...prevData,
      activities: selectedOptions.map((act) => act.id),
    }));
    console.log("submit Form", formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutateStaticTrip(formData);
    console.log("submit", formData);
  };

  useEffect(() => {
    if (user?.data.position.id)
      setPlaneTrip({
        ...planeTrip,
        country_destination_id: formData.destination_trip_id,
        country_source_id: user?.data.position.id,
        flight_date: formData.flight_date,
      });
    console.log("id", formData.destination_trip_id);
    console.log("planeTrip", planeTrip);
    if (
      user?.data.position.id &&
      planeTrip.country_destination_id &&
      planeTrip.flight_date
    )
      mutate(planeTrip);
  }, [user?.data.position, formData.flight_date, formData.destination_trip_id]);

  const placesOptions = places?.data?.area_places.flatMap((area) =>
    area.places.map((place) => ({
      id: place.id.toString(),
      label: `${place.name} - ${place.place_price + "$"}`,
      value: place.name,
    }))
  );

  const actOptions = activities?.data.map((act) => ({
    id: act.id.toString(),
    label: act.name,
    value: act.name,
  }));

  const steps = [
    {
      title: "First",
      description: "Lets Start! ✷⁠‿⁠✷",
      formControls: [
        {
          label: "Trip Name",
          type: "text",
          name: "trip_name",
          required: true,
          onchange: handleInputChange,
        },
      ],
    },
    {
      title: "Second",
      description: "where would you like to create trip ?",
      formControls: [
        {
          label: "Destination Area",
          type: "select",
          name: "destination_trip_id",
          required: true,
          data: countries?.data,
          onchange: handleInputChange,
        },
      ],
    },
    {
      title: "Third",
      description: "choose a date to help select plane ◔⁠‿⁠◔⁠",
      formControls: [
        {
          label: "Flight Date",
          type: "date",
          name: "flight_date",
          onchange: handleInputChange,
        },
        {
          label: "Go Plane",
          type: "select-plane-trip",
          name: "plane_trip",
          required: true,
          data: planeTrips?.data,
          onchange: handleInputChange,
        },
        {
          label: "Back_Plane",
          type: "select-plane-trip",
          name: "plane_trip_away",
          required: true,
          data: planeTrips?.data,
          onchange: handleInputChange,
        },
      ],
    },
    {
      title: "Fourth",
      description: "Now hotel you like..",
      formControls: [
        {
          label: "Hotel",
          type: "select",
          name: "hotel_id",
          required: true,
          data: hotels?.data,
          onchange: handleInputChange,
        },
        {
          label: "Hotel_capacity_type",
          type: "range-number",
          max: 6,
          min: 2,
          step: 2,
          name: "trip_capacity",
          required: true,
          // data:,
          onchange: handleInputChange,
        },
      ],
    },
    {
      title: "Fifth",
      description: "Draw the itinerary with your imagination  ⁠ꈍ⁠ᴗ⁠ꈍ",
      formControls: [
        {
          label: "Places",
          type: "multi-select",
          name: "place",
          required: true,
          data: placesOptions,
          value: selectedPlaces,
          onchange: handeSelectPlaces,
        },
      ],
    },
    {
      title: "Sixth",
      description: "wait we not finish! ⁠◍⁠•⁠ᴗ⁠•⁠◍",
      formControls: [
        {
          label: "Activities",
          type: "multi-select",
          name: "activity",
          required: true,
          data: actOptions,
          value: selectedActs,
          onchange: handeSelectActs,
        },
      ],
    },
    {
      title: "Seventh",
      description: "Finaly some important details.",
      formControls: [
        {
          label: "Ratio",
          type: "range-number",
          max: 100,
          min: 0,
          name: "ratio",
          required: true,
          onchange: handleInputChange,
        },
        {
          label: "Number of people",
          type: "range-number",
          max: 50,
          min: 10,
          name: "number_of_people",
          required: true,
          onchange: handleInputChange,
        },
        {
          label: "Trip Note",
          type: "textarea",
          name: "trip_note",
          required: false,
          onchange: handleInputChange,
        },
      ],
    },
  ];
  return (
    <Box ml={10}>
      <Heading fontFamily={FONTS.heading}>
        Follow these steps to create Trip:
      </Heading>
      <TripAddStep steps={steps} handleSubmit={handleSubmit} />
      {/* <Button type="submit"> Submit</Button> */}
    </Box>
  );
};

export default TripAddForm;
