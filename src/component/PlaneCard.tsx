import { Button, Card, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Plane } from "../hooks/usePlanes";
import image from "../images/plane.jpg";
interface Props {
  plane: Plane;
}

const PlaneCard = ({ plane }: Props) => {
  return (
    <Card
      textAlign="left"
      w="50vw"
      h="120px"
      borderRadius={10}
      overflow="hidden"
      _hover={{
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Add your desired hover effect
        transform: "scale(1.01)", // Optional: Scale up the card on hover
        transition: "box-shadow 0.7s ease, transform 0.7s ease", // Smooth transition
      }}
    >
      <HStack h="100%">
        <Image borderRadius={7} src={image} w="30%" h="100%" />{" "}
        <VStack>
          <Text color="gray.400" as="b">Name</Text>
          <Text>{plane.name} </Text>
        </VStack>
        <VStack>
          <Text color="gray.400" as="b">Number of seats</Text>
          <Text>{plane.number_of_seats}</Text>
        </VStack>
        <VStack>
          <Text color="gray.400" as="b">Ticket price</Text>
          <Text>{plane.ticket_price}</Text>
        </VStack>
        <Button> view shcdule </Button>
      </HStack>
    </Card>
  );
};

export default PlaneCard;
