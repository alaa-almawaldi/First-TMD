import {
  Avatar,
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
import { User } from "../Interfaces/User";
import getImageUrl from '../services/image-url';

const CustomTableContainer = styled.div`
  table {
    width: 100%;
    // text-align: center;
  }
  th {
    text-align: center;
  },
  tr {
    border-radius: 15px;
  },
  td {
    text-align: center;
    padding: 5px 0px ;
    border-bottom: 1px solid #ddd;
  }

  @media only screen and (max-width: 768px) {
    th,
    td {
      display: block;
      width: 100%;
    }

    // nth-child
    th::nth-of-type(1),
    td:nth-of-type(1) {
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
          {users.map((user,index) => (
            <Tr  borderRadius={20} key={index}>
              <Td><Avatar src={getImageUrl(user.image)} boxShadow="md" ></Avatar></Td>
              <Td>{user.name}</Td>
              <Td>{user.email}</Td>
              <Td>{user.phone_number}</Td>
              <Td>position</Td>
              <Td>
                {user.roles.map((role,index) => (
                  <Box
                    key={index}
                    w="65%"
                    borderRadius="20px"
                    p={1}
                    ml="2vw"
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
