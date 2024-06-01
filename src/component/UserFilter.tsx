import {
  Button,
  HStack,
  Select,
  Show,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { COLORS } from "../colors";
import { FaSortAlphaDown } from "react-icons/fa";
import { MdRecentActors } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import { FONTS } from "../fonts";
import roles from "../data/filterRoles";
import useFilterStore from "../state-managment/FilterState";

const UserFilter = () => {
  const { by_name, most_recent, role_id, setFilters } = useFilterStore();

  const selectedRole = roles.find((role) => role.id === role_id);

  const modal1 = useDisclosure();
  const modal2 = useDisclosure();
  const modal3 = useDisclosure();

  const handleOrderChange = () => {
    modal1.onToggle();
    setFilters({ by_name: by_name === null ? "asc" : null });
  };

  const handleRecentChange = () => {
    modal2.onToggle();
    setFilters({ most_recent: most_recent === 0 ? 1 : 0 });
  };

  const handleRoleChange = (event) => {
    const { value } = event.target;
    const selectedRole = roles.find((role) => role.name === value);
    setFilters({ role_id: selectedRole?.id });
  };

  return (
    <HStack m={5}>
      <Text fontFamily={FONTS.heading} mb={0}>
        Filter by :
      </Text>
      <Button
        backgroundColor={modal1.isOpen ? "blue.300" : ""} // Set background color
        onClick={handleOrderChange}
        borderRadius={20}
      >
        <FaSortAlphaDown />
        <Show breakpoint="(min-width: 430px)">
          {" "}
          <Text m={2}>A to Z</Text>
        </Show>
      </Button>

      <Button
        backgroundColor={modal2.isOpen ? "blue.300" : ""}
        onClick={handleRecentChange}
        borderRadius={20}
      >
        <MdRecentActors />
        <Show breakpoint="(min-width: 430px)">
          <Text m={2}>Recently registered</Text>
        </Show>
      </Button>

      <Button
        backgroundColor={modal3.isOpen ? "blue.300" : ""}
        onClick={modal3.onToggle}
        borderRadius={20}
      >
        <MdManageAccounts />
        <Select
          m={2}
          variant="unstyled"
          placeholder={selectedRole?.name}
          onChange={handleRoleChange}
        >
          {roles.map((item) => (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          ))}
        </Select>
        <Show breakpoint="(min-width: 430px)"></Show>
      </Button>
    </HStack>
  );
};

export default UserFilter;
