import React from "react";
import PlaneCard from "../../component/PlaneCard";
import { Text, VStack } from "@chakra-ui/react";
import PlaneSchedule from "../../component/PlaneSchedule";
import useFetchData from "../../hooks/useFetchData";
import { FetchResponse } from "../../services/api-client";
import { Plane } from "../../Interfaces/Airport";

const Airports = () => {
  const { data } = useFetchData<FetchResponse<Plane[]>>('admin/get-my-planes');//fix - confirm

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
