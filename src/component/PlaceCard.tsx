import {
  Box,
  Card,
  CardBody,
  Container,
  HStack,
  Heading,
  Image,
  Text,
  Tooltip,
  color,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { CgUnavailable } from "react-icons/cg";
import image from "../images/wall4.jpg";

const PlaceCard = () => {
  const [visible, setVisible] = useState(true);

  return (
    <Card
      textAlign="left"
      w="300px"
      h="300px"
      borderRadius={10}
      overflow="hidden"
      _hover={{
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Add your desired hover effect
        transform: "scale(1.05)", // Optional: Scale up the card on hover
        transition: "box-shadow 0.7s ease, transform 0.7s ease", // Smooth transition
      }}
    >
      <Image src={image} w="100%" />
      <CardBody>
        <HStack justifyContent={"space-between"}>
          <Box>
            <Heading fontSize="2xl">name</Heading>
            <Text color="gray.600">area</Text>
          </Box>

          {visible && (
            <Tooltip label="visible" placement="top">
              <button>
                <FaCheckCircle size="30px" onClick={() => setVisible(false) } color="green" />
              </button>
            </Tooltip>
          )}
          {!visible && (
            <Tooltip label="unvisible" placement="top">
              <button>
                <CgUnavailable size="33px" onClick={() => setVisible(true)} color="red" />
              </button>
            </Tooltip>
          )}
        </HStack>
      </CardBody>
    </Card>
  );
};

export default PlaceCard;
