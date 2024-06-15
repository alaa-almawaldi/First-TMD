import {
  Button,
  Divider,
  Flex,
  IconButton,
  Text
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { CiLogout } from "react-icons/ci";
import {
  FiMenu
} from "react-icons/fi";
import SideBarItem from "./SideBarItem";

export interface Item {
  title: string;
  path: string;
  icon: React.ElementType;
}

interface Props {
  sidebarData: Item[];
}

const SideBar = ({ sidebarData }: Props) => {
  const [navSize, changeNavSize] = useState("large");

  const handleLogOut = () => {
    axios
      .get("http://127.0.0.1:8000/api/admin-logout", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        alert("logout successfull");
        localStorage.removeItem("authToken");
        sessionStorage.removeItem("userRole");
        sessionStorage.removeItem("pathLocation");
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error);
        alert("Something wrong!try later");
      });
  };

  return (
    <Flex
    // pos={"fixed"}
      mt={16}
      h="100vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      borderRadius={navSize == "small" ? "15px" : "30px"}
      w={navSize == "small" ? "75px" : "210px"}
      flexDirection="column"
      justifyContent="space-between"
    >
      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize == "small" ? "center" : "flex-start"}
        as="nav"
      >
        <IconButton
          aria-label="manage section"
          background="none"
          mt={5}
          _hover={{ background: "none" }}
          icon={<FiMenu />}
          onClick={() => {
            if (navSize == "small") changeNavSize("large");
            else changeNavSize("small");
          }}
        />
        {/* map */}
        {sidebarData.map((item, index) => {
          return (
            <SideBarItem
              navSize={navSize}
              icon={item.icon}
              title={item.title}
              path={item.path}
              key={index}
            />
          );
        })}
      </Flex>

      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize == "small" ? "center" : "flex-start"}
        mb={4}
      >
        <Divider display={navSize == "small" ? "none" : "flex"} />

        <Flex pl="10px">
          <Button backgroundColor={"#FFFFFF"} onClick={handleLogOut}>
            <CiLogout size={20} />
            <Text ml={4} mb={0} display={navSize == "small" ? "none" : "flex"}>
              Log Out
            </Text>
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SideBar;
