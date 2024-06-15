import {
  HStack,
  IconButton,
  Switch,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { COLORS } from "../colors";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { IconBase } from "react-icons";

const ColorModeSwitch = () => {
  //        function   , property      custom hook to work in color mode
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <IconButton
        icon={
          colorMode == "dark" ? (
            <MdDarkMode color="white" size={25} />
          ) : (
            <MdLightMode color="white" size={25} />
          )
        }
        variant="unstyled" // Remove default styles
        bg="transparent" // Remove default background color
        colorScheme="green"
        onClick={toggleColorMode}
        aria-label="Toggle Color Mode"
      />
    </HStack>
  );
};

export default ColorModeSwitch;
