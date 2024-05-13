import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logot.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import { COLORS } from '../colors';

const NavBar = () => {
  return (
    // horizontal stack
    <HStack backgroundColor={COLORS.darkblue}  justifyContent="space-between" padding="3px" boxShadow='base' p='3'  >
      <HStack>
        <Image src={logo} boxSize="40px" borderRadius={10} />
        <Text fontFamily='Pacifico' fontSize={27}>toursim app</Text>
      </HStack>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
