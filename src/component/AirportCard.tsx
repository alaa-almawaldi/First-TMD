import React from 'react'
import { Airport } from '../hooks/useAirports'
import { Card, HStack, Image, Text, VStack } from '@chakra-ui/react';
import image from "../images/airport.jpg";

interface Props{
    airport: Airport;
}

const AirportCard = ({ airport }: Props) => {
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
          <Text>{airport.name} </Text>
        </VStack>
        <VStack>
          <Text color="gray.400" as="b">Location</Text>
          <Text>{airport.country.name} - {airport.area.name} </Text>
        </VStack>
        <VStack>
          <Text color="gray.400" as="b">owner</Text>
          <Text>{airport.user.name} </Text>
        </VStack>
      </HStack>
    </Card>
  )
}

export default AirportCard