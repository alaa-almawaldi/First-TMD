import React from "react";
import useAirports from "../../hooks/useAirports";
import { HStack, Heading, VStack } from "@chakra-ui/react";
import AirportCard from "../../component/AirportCard";
import SearchInput from "../../component/SearchInput";
import { FONTS } from "../../fonts";

const Airports = () => {
  const { data } = useAirports();

  return (
    <VStack>
      <HStack width="80vw">
        <SearchInput />
      </HStack>
      <Heading fontFamily={FONTS.heading}>Airports</Heading>

      {data?.data.map((airport) => (
        <div key={airport.id}>
          <AirportCard airport={airport}></AirportCard>
        </div>
      ))}
    </VStack>
  );
};

export default Airports;
