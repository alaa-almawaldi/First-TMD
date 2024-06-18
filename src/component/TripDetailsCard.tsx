import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Spacer,
  Text,
  VStack,
  keyframes,
} from "@chakra-ui/react";
import { TripDetails } from "../Interfaces/Trip";
import image from "../assets/plane.png";
import { FONTS } from "../fonts";
import { COLORS } from "../colors";
import { MdLocalAirport } from "react-icons/md";
import { PiAirplaneTiltLight } from "react-icons/pi";
import { LiaHotelSolid } from "react-icons/lia";
import getImageUrl from "../services/image-url";

const backInDown = keyframes` 
    from {
      transform: translateY(-100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  `;

interface Props {
  tripDetails: TripDetails;
}

const TripDetailsCard = ({ tripDetails }: Props) => {
  console.log("here trip details");
  console.log(tripDetails);
  return (
    <VStack h="100%">
      <CardBody h="100%" overflow="hidden">{/*  animation={`${backInDown} 1s ease-in-out`} > */}
        <VStack h="98%" justifyContent={"space-between"}>
          <Text as="b">{tripDetails?.static_trip.trip_name}</Text>

          <Image src={image} />

          <HStack gap="4rem">
            <Text as="b">
              {tripDetails?.source_trip?.name}
              {"Source"}
              <br />
              {tripDetails.static_trip.start_date}
            </Text>
            <Text as="b">
              {tripDetails?.destination_trip.name}
              <br />
              {tripDetails.static_trip.end_date}
            </Text>
          </HStack>

          <HStack>
            <PiAirplaneTiltLight />
            <Text m={0}>
              {" Go Plane: "}
              {tripDetails?.going_trip.going_plane.name}
            </Text>
          </HStack>
          <HStack>
            <PiAirplaneTiltLight style={{ transform: "scaleX(-1)" }} />
            <Text m={0}>
              {" Back Plane: "}
              {tripDetails?.return_trip.return_plane.name}
            </Text>
          </HStack>

          <HStack>
            <LiaHotelSolid />
            <Text m={0}>
              {"Hotel: "}
              {tripDetails.hotel.name}
            </Text>
          </HStack>
          <Text m={0} as="b">
            Visited Places{" "}
          </Text>
          <HStack>
            {tripDetails.places.map((place) => (
              <VStack>
                <Image
                  boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
                  borderRadius={10}
                  boxSize="50px"
                  src={getImageUrl(place.images[0]?.image)}
                />
                <Text>{place.name}</Text>
              </VStack>
            ))}
          </HStack>
          <HStack>
            <Text as="b" m={0}>
              Activites:
            </Text>
            {tripDetails.activities.map((act) => (
              <Text m={0}>{act.name} </Text>
            ))}
          </HStack>
          <Text m={0}>
            <b>Price:</b> {tripDetails.static_trip.price}
          </Text>
          <Text m={0}>
            <b>Notes:</b> {tripDetails.static_trip.trip_note}
          </Text>
        </VStack>
      </CardBody>
    </VStack>
  );
};

export default TripDetailsCard;
