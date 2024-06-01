import React from "react";
import PlaceCard from "../../component/PlaceCard";
import PlaceModal from "../../component/PlaceModal";
import { IoMdAdd } from "react-icons/io";
import usePlaces, { Place } from "../../hooks/usePlaces";
import { HStack, Heading, Spinner, Text, VStack } from "@chakra-ui/react";
import SearchInput from "../../component/SearchInput";
import { FONTS } from "../../fonts";

const Places = () => {
  const { data, isLoading } = usePlaces();
  console.log(data?.data);
  return (
    <>
      <VStack>
        <HStack width="80vw">
          <SearchInput />
          <PlaceModal title="add" icon={<IoMdAdd />} />
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
