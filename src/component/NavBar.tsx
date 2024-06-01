import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logot.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import { COLORS } from '../colors';
import { IoNotifications  } from "react-icons/io5";

const NavBar = () => {
  return (
    // horizontal stack
    <HStack backgroundColor={COLORS.darkblue}  justifyContent="space-between" padding="3px" boxShadow='base' p='3'  >
      <HStack>
        <Image src={logo} boxSize="40px" borderRadius={10} />
        <Text fontFamily='Pacifico' fontSize={27} color={COLORS.white}>toursim app</Text>
      </HStack>
      <HStack gap={5}>
      <IoNotifications color={COLORS.white} size={25} onClick={() => console.log("notif")} cursor="pointer" />
      <ColorModeSwitch />
      </HStack>
    </HStack>
  );
};

export default NavBar;
