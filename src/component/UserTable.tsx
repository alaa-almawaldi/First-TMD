import {
  Box,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { COLORS } from "../colors";
import styled from "@emotion/styled";
import { User } from "../hooks/useUser";

const CustomTableContainer = styled.div`
  table {
    width: 100%;
    
  }
  th {
    textAlign:"center";
  },
  tr {
    border-radius: 15px;
  },
  td {
    textAlign:"center";
    padding: 5px 0px ;
    border-bottom: 1px solid #ddd;
  }

  @media only screen and (max-width: 768px) {
    th,
    td {
      display: block;
      width: 100%;
    }

    th:nth-child(1),
    td:nth-child(1) {
      display: none;
    }

    tr {
      margin-bottom: 16px;
      border-radius: 20px;
    }

    th {
      font-weight: bold;
    }
  }
`;

interface Props {
  users: User[];
}

const UserTable = ({ users }: Props) => {
  return (
    <CustomTableContainer >
      <Table variant="striped" colorScheme="gray" >
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead >
          <Tr >
            <Th>image</Th>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Phone number</Th>
            <Th>Location</Th>
            <Th>role</Th>
          </Tr>
        </Thead>
        <Tbody >
          {users.map((user) => (
            <Tr  borderRadius={20}>
              <Td>..</Td>
              <Td>{user.name}</Td>
              <Td>{user.email}</Td>
              <Td>{user.phone_number}</Td>
              <Td>position</Td>
              <Td>
                {user.roles.map((role) => (
                  <Box
                  w="65%"
                    borderRadius="20px"
                    p={1}
                    bg={COLORS.lightblue}// This sets the background color to a light blue shade.
                  >
                    <Text mb={0} color={COLORS.white} fontSize="15px" textAlign="center" >
                      {role.name}
                    </Text>
                  </Box>
                ))}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </CustomTableContainer>
  );
};

export default UserTable;
