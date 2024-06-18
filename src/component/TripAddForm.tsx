import {
  Box,
  Button,
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
import { Country } from "../Interfaces/Place";
import useSendData from "../hooks/useSendData";

const TripAddForm = () => {
  const { data: countries } = useFetchData<FetchResponse<Country[]>>(
    "/admin/get_all_country"
  );

  const [countryId, setCountryId] = useState<string>("");

  const { data: areas, mutate } = useSendData<FetchResponse<Country[]>>(
    "/admin/get_all_area"
  );

  console.log(countryId);
  useEffect(() => {
    if (countryId) mutate({ country_id: countryId });
  }, [countryId]);

  const [formData, setFormData] = useState({
    trip_name: "",

    source_trip_id: "", //fix
    destination_trip_id: "",

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
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    console.log(formData);
  };

  const steps = [
    {
      title: "First",
      description: "....",
      formControls: [
        {
          label: "Trip Name",
          type: "text",
          name: "trip_name",
          onchange: { handleInputChange },
        },
      ],
    },
    {
      title: "Second",
      description: "",
      formControls: [
        {
          label: "Country ",
          type: "select",
          name: "country_id",
          data: countries?.data,
          onchange: { handleInputChange },
        },
        {
          label: "Destination Area",
          type: "select",
          name: "destination_trip_id",
          data: areas?.data,
          onchange: { handleInputChange },
        },
      ],
    },
    {
      title: "Third",
      description: "....",
      formControls: [
        {
          label: "Go Plane",
          type: "select",
          name: "plane_trip",
          onchange: { handleInputChange },
        },
        {
          label: "Back_Plane",
          type: "select",
          name: "plane_trip_away",
          onchange: { handleInputChange },
        },
      ],
    },
    {
      title: "Fourth",
      description: "....",
      formControls: [
        {
          label: "Hotel",
          type: "select",
          name: "hotel_id",
          onchange: { handleInputChange },
        },
        {
          label: "Hotel_capacity_type",
          type: "text",
          name: "trip_capacity",
          onchange: { handleInputChange },
        },
      ],
    },
    {
      title: "Fifth",
      description: "....",
      formControls: [
        {
          label: "Ratio",
          type: "text",
          name: "ratio",
          onchange: { handleInputChange },
        },
        {
          label: "Trip capacity",
          type: "text",
          name: "number_of_people",
          onchange: { handleInputChange },
        },
        {
          label: "Trip Note",
          type: "textarea",
          name: "trip_note",
          onchange: { handleInputChange },
        },
      ],
    },
  ];
  return (
    <>
      <Heading fontFamily={FONTS.heading}>
        Follow these steps to create Trip:
      </Heading>
      <TripAddStep steps={steps} />
      <Button type="submit"> Submit</Button>
    </>
  );
};

export default TripAddForm;
