import {
  Box,
  Container,
  Flex,
  HStack,
  Heading,
  Skeleton,
  Spinner,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { Trip, TripDetails } from "../../Interfaces/Trip";
import Header from "../../component/Header";
import SearchInput from "../../component/SearchInput";
import TripCard from "../../component/TripCard";
import { FONTS } from "../../fonts";
import useFetchData from "../../hooks/useFetchData";
import { FetchResponse } from "../../services/api-client";
import TripDetailsContainer from "../../component/TripDetailsContainer";

const Trips = () => {
  const { data: trip, isLoading } = useFetchData<FetchResponse<Trip[]>>(
    "/admin/all-static-trip"
  );

  const [tripId, setTripId] = useState("");
  const { data: tripDetails ,isLoading:isLoadDet } = useFetchData<FetchResponse<TripDetails>>(
    `/admin/show-static-trip/${tripId}`
  );

  return (
    <HStack ml={5}>
      <VStack mr={5}>
        <SearchInput />

        <Box width="50vw">
          <Heading fontFamily={FONTS.heading}>My Trips</Heading>

          <Header list={["NAME", "START DATE", "END DATE", "   "]} />
          {isLoading && (
            <Stack>
              <Skeleton height="70px" />
              <Skeleton height="70px" />
              <Skeleton height="70px" />
            </Stack>
          )}
          {trip?.data.map((trip) => (
            <div key={trip.id}>
              <TripCard trip={trip} setID={setTripId} />
            </div>
          ))}
        </Box>
      </VStack>
      <TripDetailsContainer tripDetails={tripDetails?.data} isLoading={isLoadDet} />
    </HStack>
  );
};

export default Trips;
