import {
  Box,
  Button,
  Card,
  CardBody,
  Container,
  HStack,
  Heading,
  Image,
  Show,
  Text,
  Tooltip,
  VStack,
  color,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { CgUnavailable } from "react-icons/cg";
import image from "../images/wall4.jpg";
import { COLORS } from "../colors";
import PlaceModal from "./PlaceModal";
import getImageUrl from "../services/image-url";
import { ImagePlace, Place } from "../Interfaces/Place";

interface Props {
  place: Place;
}

const PlaceCard = ({ place }: Props) => {
  const [visible, setVisible] = useState(place.visible);

  console.log("image", (place.images as ImagePlace[])[0]?.image);
  return (
    <Card
      textAlign="left"
      w="70vw"
      h="220px"
      borderRadius={10}
      overflow="hidden"
      _hover={{
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Add your desired hover effect
        transform: "scale(1.01)", // Optional: Scale up the card on hover
        transition: "box-shadow 0.7s ease, transform 0.7s ease", // Smooth transition
      }}
    >
      <HStack h="100%">
        <Image
          borderRadius={7}
          src={getImageUrl((place.images as ImagePlace[])[0]?.image)}
          w="30%"
          h="100%"
        />
        <CardBody h="100%" p={2}>
          <HStack h="98%" justifyContent={"space-between"}>
            <Box>
              <Heading marginBottom={-1} fontSize="2xl">
                {place.name}
              </Heading>
              <Text color="gray.600">
                {place.area.name} - {place.area.country.name}
              </Text>
              <Show breakpoint="(min-width: 650px)">
                <Text>{place.text}</Text>
                <HStack>
                  {place.categories.map((cat) => (
                    <p>{cat.name}</p>
                  ))}
                </HStack>
              </Show>
            </Box>
            <VStack h="98%" direction="column" justify="space-between">
              <PlaceModal title="Update" />

              {visible && (
                <Tooltip label="visible" placement="top">
                  <button>
                    <FaCheckCircle
                      size="30px"
                      onClick={() => setVisible(false)}
                      color={COLORS.lightblue}
                    />
                  </button>
                </Tooltip>
              )}
              {!visible && (
                <Tooltip label="unvisible" placement="top">
                  <button>
                    <CgUnavailable
                      size="33px"
                      onClick={() => setVisible(true)}
                      color="red"
                    />
                  </button>
                </Tooltip>
              )}
            </VStack>
          </HStack>
        </CardBody>
      </HStack>
    </Card>
  );
};

export default PlaceCard;
