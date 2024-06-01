import React, { useEffect, useState } from "react";
import {
  Flex,
  Text,
  IconButton,
  Divider,
  Avatar,
  Heading,
} from "@chakra-ui/react";
import {
  FiMenu,
  FiHome,
  FiCalendar,
  FiUser,
  FiDollarSign,
  FiBriefcase,
  FiSettings,
  FiUsers,
} from "react-icons/fi";
import { IoPawOutline } from "react-icons/io5";
import SideBarItem from "./SideBarItem";
import { useLocation } from "react-router-dom";

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

  return (
    <Flex
      // pos="fixed"
      pos="sticky"
      left=""
      h="130vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      borderRadius={navSize == "small" ? "15px" : "30px"}
      w={navSize == "small" ? "75px" : "200px"}
      flexDir="column"
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
        <Flex mt={4} align="center">
          {/* <Avatar size="sm" src="avatar-1.jpg" /> */}
          <Flex
            flexDir="column"
            ml={4}
            display={navSize == "small" ? "none" : "flex"}
          >
            <Heading as="h3" size="sm">
              Sylwia Weller
            </Heading>
            <Text color="gray">Admin</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SideBar;
