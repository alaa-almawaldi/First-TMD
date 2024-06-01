import React, { useContext, useEffect } from "react";
import {
  Flex,
  Text,
  Icon,
  Link,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
import { IconBase } from "react-icons";
import {
  Link as ReactRouterLink,
  NavLink as RouterLink,
  Navigate,
  useLocation,
} from "react-router-dom";
import PathLocationContext from "../state-managment/PathLocationContext";
import { COLORS } from "../colors";
interface Props {
  icon: React.ElementType;
  title: string;
  path: string;
  active?: boolean;
  navSize: string;
}

const SideBarItem = ({ icon, title, path, active, navSize }: Props) => {
  
  const { setPathLocation } = useContext(PathLocationContext);

  const handleClick = () => {
    // Update sessionLocation context only if the path is different
    setPathLocation(path);
    
    sessionStorage.setItem('pathLocation',path)
  };
  
  return (
    <Flex
      mt={3}
      flexDir="column"
      w="100%"
      alignItems={navSize == "small" ? "center" : "flex-start"}
    >
      <Menu placement="left">
        <Link
          as={RouterLink}
          to={path}
          end // only active
          onClick={handleClick}
          replace={false}
          _activeLink={{ fontWeight: "bold" }}
          backgroundColor={active ? "#AEC8CA" : undefined}
          p={3}
          borderRadius={8}
          _hover={{ textDecor: "none", backgroundColor: COLORS.lightblue }}
          w={navSize === "large" ? "100%" : undefined}
        >
          <MenuButton w="100%" >
            <Flex pb="-10px" >
              <Icon
                as={icon}
                fontSize="xl"
                color={active ? "#82AAAD" : "gray.500"}
              />
              <Text ml={5} display={navSize == "small" ? "none" : "flex"}>
                {title}
              </Text>
            </Flex>
          </MenuButton>
        </Link>
      </Menu>
    </Flex>
  );
};

export default SideBarItem;
