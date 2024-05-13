import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { COLORS } from "../colors";
import styled from '@emotion/styled'

const CustomTableContainer = styled.div`
  table {
    width: 100%;
  }

  th,
  td {
    padding: 8px;
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
    }

    th {
      font-weight: bold;
    }
  }
`;
const users = [
  {
    image: "https://example.com/user1.jpg",
    name: "John Doe",
    email: "john.doe@example.com",
    phoneNumber: "+1 123-456-7890",
    location: "Seattle, WA",
    role: "Developer",
  },
  {
    image: "https://example.com/user2.jpg",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phoneNumber: "+1 987-654-3210",
    location: "New York, NY",
    role: "Designer",
  },
  {
    image: "https://example.com/user1.jpg",
    name: "John Doe",
    email: "john.doe@example.com",
    phoneNumber: "+1 123-456-7890",
    location: "Seattle, WA",
    role: "Developer",
  },
  {
    image: "https://example.com/user2.jpg",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phoneNumber: "+1 987-654-3210",
    location: "New York, NY",
    role: "Designer",
  },
  {
    image: "https://example.com/user1.jpg",
    name: "John Doe",
    email: "john.doe@example.com",
    phoneNumber: "+1 123-456-7890",
    location: "Seattle, WA",
    role: "Developer",
  },
  {
    image: "https://example.com/user2.jpg",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phoneNumber: "+1 987-654-3210",
    location: "New York, NY",
    role: "Designer",
  },
  {
    image: "https://example.com/user1.jpg",
    name: "John Doe",
    email: "john.doe@example.com",
    phoneNumber: "+1 123-456-7890",
    location: "Seattle, WA",
    role: "Developer",
  },
  {
    image: "https://example.com/user2.jpg",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phoneNumber: "+1 987-654-3210",
    location: "New York, NY",
    role: "Designer",
  },
  {
    image: "https://example.com/user1.jpg",
    name: "John Doe",
    email: "john.doe@example.com",
    phoneNumber: "+1 123-456-7890",
    location: "Seattle, WA",
    role: "Developer",
  },
  {
    image: "https://example.com/user2.jpg",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phoneNumber: "+1 987-654-3210",
    location: "New York, NY",
    role: "Designer",
  },
  {
    image: "https://example.com/user2.jpg",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phoneNumber: "+1 987-654-3210",
    location: "New York, NY",
    role: "Designer",
  },
  {
    image: "https://example.com/user2.jpg",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phoneNumber: "+1 987-654-3210",
    location: "New York, NY",
    role: "Designer",
  },
  {
    image: "https://example.com/user2.jpg",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phoneNumber: "+1 987-654-3210",
    location: "New York, NY",
    role: "Designer",
  },
  {
    image: "https://example.com/user2.jpg",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phoneNumber: "+1 987-654-3210",
    location: "New York, NY",
    role: "Designer",
  },
  {
    image: "https://example.com/user2.jpg",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phoneNumber: "+1 987-654-3210",
    location: "New York, NY",
    role: "Designer",
  },

];

const UserTable = () => {
  return (
    <CustomTableContainer>
      <Table variant="striped" colorScheme="gray">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>image</Th>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Phone number</Th>
            <Th>Location</Th>
            <Th>role</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map(user => 
            <Tr >
            <Td>..</Td>
            <Td>{user.name}</Td>
            <Td >{user.email}</Td>
            <Td>{user.phoneNumber}</Td>
            <Td>{user.location}</Td>
            <Td >{user.role}</Td>
          </Tr>
          )}
        </Tbody>
      </Table>
    </CustomTableContainer>
  );
};

export default UserTable;



