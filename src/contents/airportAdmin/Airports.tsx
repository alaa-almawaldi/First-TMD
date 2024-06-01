import React from "react";
import usePlanes from "../../hooks/usePlanes";
import PlaneCard from "../../component/PlaneCard";
import { Text, VStack } from "@chakra-ui/react";
import PlaneSchedule from "../../component/PlaneSchedule";

const Airports = () => {
  const { data } = usePlanes();
  console.log(data?.data);

  return (
    <>
      <VStack>
        {data?.data.map((plane) => (
          <div key={plane.id}>
            <PlaneCard plane={plane}></PlaneCard>
          </div>
        ))}
      </VStack>
      <PlaneSchedule/>
    </>
  );
};

export default Airports;
