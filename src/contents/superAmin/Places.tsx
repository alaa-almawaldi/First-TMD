import React from "react";
import PlaceCard from "../../component/PlaceCard";
import PlaceModal from "../../component/PlaceModal";
import { IoMdAdd } from "react-icons/io";
import { HStack, Heading, Spinner, Text, VStack } from "@chakra-ui/react";
import SearchInput from "../../component/SearchInput";
import { FONTS } from "../../fonts";
import useFetchData from "../../hooks/useFetchData";
import { FetchResponse } from "../../services/api-client";
import { Place } from "../../Interfaces/Place";

const Places = () => {
  const { data, isLoading } = useFetchData<FetchResponse<Place[]>>('/admin/places');
  console.log(data?.data);
  return (
    <>
      <VStack>
        <HStack width="80vw">
          <SearchInput />
          <PlaceModal title="Add" icon={<IoMdAdd />} />
        </HStack>
        <Heading fontFamily={FONTS.heading}>Places</Heading>

        {isLoading && <Spinner  />}
        {data?.data.map((place) => (
          <div key={place.id}>
            <PlaceCard place={place}></PlaceCard>
          </div>
        ))}
      </VStack>
    </>
  );
};

export default Places;
