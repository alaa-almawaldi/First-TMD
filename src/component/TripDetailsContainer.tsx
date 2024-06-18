import React from "react";
import { TripDetails } from "../Interfaces/Trip";
import { Card, Heading, Spinner, Text } from "@chakra-ui/react";
import { FONTS } from "../fonts";
import TripDetailsCard from "./TripDetailsCard";
import { COLORS } from "../colors";

interface Props {
  tripDetails?: TripDetails;
  isLoading: Boolean;
}

const TripDetailsContainer = ({ tripDetails, isLoading }: Props) => {
  return (
    <Card
      width={"25vw"}
      h={"85vh"}
      textAlign={"center"}
      borderRadius={20}
      boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
      p={2}
    >
      <Heading fontFamily={FONTS.heading}>Trip Details</Heading>
      {isLoading && <Spinner />}
      {!tripDetails ? (
        <Text color={"gray.400"}>No Trip Selected Yet!</Text>
      ) : (
        <TripDetailsCard tripDetails={tripDetails} />
      )}
    </Card>
  );
};

export default TripDetailsContainer;
