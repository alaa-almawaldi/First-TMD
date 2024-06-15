import { HStack, Heading, VStack } from "@chakra-ui/react";
import AirportCard from "../../component/AirportCard";
import SearchInput from "../../component/SearchInput";
import { FONTS } from "../../fonts";
import useFetchData from "../../hooks/useFetchData";
import { FetchResponse } from "../../services/api-client";
import { Airport } from "../../Interfaces/Airport";
import Header from "../../component/Header";

const Airports = () => {
  const { data } = useFetchData<FetchResponse<Airport[]>>('/admin/all-airport');

  return (
    <VStack>
      <HStack width="80vw">
        <SearchInput />
      </HStack>
      <Heading fontFamily={FONTS.heading}>Airports</Heading>

      <Header list={["IMAGE","NAME",'LOCATION','OWNER','PROCCESES']}/>
      
      {data?.data.map((airport) => (
        <div key={airport.id}>
          <AirportCard airport={airport}></AirportCard>
        </div>
      ))}
    </VStack>
  );
};

export default Airports;
