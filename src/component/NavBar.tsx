import { Avatar, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logot.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import { COLORS } from "../colors";
import { IoNotifications } from "react-icons/io5";
import getImageUrl from "../services/image-url";
import { Link } from "react-router-dom";
import { useContext } from "react";
import PathLocationContext from "../state-managment/PathLocationContext";
import useFetchData from "../hooks/useFetchData";
import { FetchResponse } from "../services/api-client";
import { User } from "../Interfaces/User";

const NavBar = ({path}) => {
  const { data } = useFetchData<FetchResponse<User>>('/admin-profile');

  const { setPathLocation } = useContext(PathLocationContext);

  const handleClick = () => {
    // Update sessionLocation context only if the path is different
    setPathLocation(path);
    
    sessionStorage.setItem('pathLocation',path)
  };
  
  return (
    // horizontal stack
    <HStack
      position="fixed"
      w="100%"
      zIndex={1}
      backgroundColor={COLORS.darkblue}
      justifyContent="space-between"
      padding="3px"
      boxShadow="base"
      shadow={"0 0 10px rgba(0, 0, 0, 1)"}
     
    >
      <HStack>
        <Image src={logo} boxSize="40px" borderRadius={10} />
        <Text fontFamily="Pacifico" fontSize={27} color={COLORS.white}>
          toursim app
        </Text>
      </HStack>
      <HStack gap={5}>
        <IoNotifications
          color={COLORS.white}
          size={25}
          onClick={() => console.log("notif")}
          cursor="pointer"
        />
        <ColorModeSwitch />
        <Avatar
          size="sm"
          src={data?.data.image ? getImageUrl(data?.data.image): ''}
          boxSize={45}
          border="1px solid white"
          mr={3}
           as={Link}
          to={path}
          onClick={handleClick}
          cursor={"pointer"}
        />
      </HStack>
    </HStack>
    
  );
};

export default NavBar;
