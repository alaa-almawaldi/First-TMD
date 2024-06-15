import {
  Button,
  Card,
  HStack,
  Image,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import image from "../images/airport.jpg";
import { Airport } from "../Interfaces/Airport";

interface Props {
  airport: Airport;
}

const AirportCard = ({ airport }: Props) => {
  return (
    <Card
      textAlign="left"
      w="70vw"
      h="100px"
      borderRadius={10}
      overflow="hidden"
      p={1}
      _hover={{
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Add your desired hover effect
        transform: "scale(1.01)", // Optional: Scale up the card on hover
        transition: "box-shadow 0.7s ease, transform 0.7s ease", // Smooth transition
      }}
    >
      <HStack h="100%">
        <Image borderRadius={7} src={image} w="17%" h="100%" /> <Spacer />
        <Text>{airport.name} </Text>
        <Spacer />
        <Text>
          {airport.country.name} - {airport.area.name}{" "}
        </Text>
        <Spacer />
        <Text>{airport.user.name} </Text>
        <Spacer />
        {airport.visible ? (
          <Button>Make Invisible</Button>
        ) : (
          <Button>Make visible</Button>
        )}
        <Button>Delete</Button>
        
      </HStack>
    </Card>
  );
};

export default AirportCard;
