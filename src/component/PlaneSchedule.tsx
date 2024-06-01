import { Box, Text, VStack } from "@chakra-ui/react";
import { DateRangeIcon } from "@mui/x-date-pickers";
import { DateRangePicker } from 'react-date-range';
import React, { useState } from "react";
import { DateRange } from 'react-date-range';
import { COLORS } from "../colors";

const PlaneSchedule = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);
  return (
    <>
    
      <DateRange 
      
      rangeColors={[COLORS.darkblue]}
  editableDateInputs={true}
  onChange={item => setState([item.selection])}
  moveRangeOnFirstSelection={false}
  ranges={state}
/>
    </>
  );
};

export default PlaneSchedule;
