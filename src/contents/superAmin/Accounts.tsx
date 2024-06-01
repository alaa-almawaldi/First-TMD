import React, { useEffect } from "react";
import UserTable from "../../component/UserTable";
import { HStack, Heading, Spinner, Text, keyframes } from "@chakra-ui/react";
import UserFilter from "../../component/UserFilter";
import { FONTS } from "../../fonts";
import SearchInput from "../../component/SearchInput";
import useUsers from "../../hooks/useUsersFilter";
import useFilterStore from "../../state-managment/FilterState";

const pulse = keyframes`
  from { transform: scale(1); }
  to { transform: scale(1.08); }
`;

const Accounts = () => {
  const { by_name, most_recent, role_id, setFilters } = useFilterStore();
  // setFilters({role_id: "2"});
  // Destructure mutate from the useUsers hook
  const { mutate, data, isLoading, error } = useUsers({
    ...(by_name !== null && { by_name }),
    most_recent,
    ...(role_id !== "0" && { role_id }),
  });

  console.log(error);
  // Call mutate to trigger the mutation
  useEffect(() => {
    mutate({
      ...(by_name !== null && { by_name }),
      most_recent,
      ...(role_id !== "0" && { role_id }),
    });
  }, [by_name, most_recent, role_id, mutate]);

  return (
    <>
      <HStack align-item="flex-start">
        <Heading
          fontFamily={FONTS.heading}
          _hover={{
            animation: `${pulse} 0.3s ease-in-out forwards`,
          }}
        >
          Admins
        </Heading>
        <Heading>|</Heading>
        <Heading
          fontFamily={FONTS.heading}
          _hover={{
            animation: `${pulse} 0.3s ease-in-out forwards`,
          }}
      
        >
          Users
        </Heading>
      </HStack>
      <SearchInput />
      <UserFilter />

      {isLoading && <Spinner />}
      {data?.data && <UserTable users={data.data} />}
    </>
  );
};

export default Accounts;
