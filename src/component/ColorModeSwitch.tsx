import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import { COLORS } from "../colors";

const ColorModeSwitch = () => {
  //        function   , property      custom hook to work in color mode
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text mb={0} color={COLORS.white}>Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
