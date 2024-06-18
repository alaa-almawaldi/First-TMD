import {
  Button,
  Card,
  HStack,
  Image,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Trip } from "../Interfaces/Trip";
import { COLORS } from "../colors";

interface Props {
  trip: Trip;
  setID: (id) => void;
}

const TripCard = ({ trip,setID }: Props) => {

  const handleClick = () =>{
    setID(trip.id)
  }

  return (
    <Card
      textAlign="left"
      h="70px"
      borderRadius={10}
      overflow="hidden"
      p={1}
      m={1}
      _hover={{
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Add your desired hover effect
        transform: "scale(1.01)", // Optional: Scale up the card on hover
        transition: "box-shadow 0.7s ease, transform 0.7s ease", // Smooth transition
      }}
    >
      <HStack h="100%">
      <Spacer />
        <Text>{trip.trip_name} </Text>
        <Spacer />
        <Text>{trip.start_date}</Text>
        <Spacer />
        <Text>{trip.end_date} </Text>
        <Spacer />

        <Button onClick={handleClick} color={"white"} backgroundColor={COLORS.lightblue} borderRadius={20}>view details</Button>
      </HStack>
    </Card>
  );
};

export default TripCard;
