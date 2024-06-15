import {
  Card,
  HStack,
  Heading,
  Spacer,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import SearchInput from "../../component/SearchInput";
import { FONTS } from "../../fonts";
import HotelCard from "../../component/HotelCard";
import Header from "../../component/Header";
import useFetchData from "../../hooks/useFetchData";
import { FetchResponse } from '../../services/api-client';
import { Hotel } from "../../Interfaces/Hotel";

const Hotels = () => {
  const { data, isLoading } = useFetchData<FetchResponse<Hotel[]>>('/admin/get_all_Hotel');
  
  return (
    <VStack>
      <HStack width="80vw">
        <SearchInput />
      </HStack>
      <Heading fontFamily={FONTS.heading}>Hotels</Heading>

      <Header list={["IMAGE","NAME","TOTAL ROOMS",'LOCATION','OWNER','PROCCESES']}/>
    
      {isLoading && <Spinner />}
      {data?.data.map((hotel) => (
        <div key={hotel.id}>
          <HotelCard hotel={hotel}></HotelCard>
        </div>
      ))}
    </VStack>
  );
};

export default Hotels;
