import React from "react";
import { Button, Card, HStack, Image, Spacer, Text, VStack } from "@chakra-ui/react";
import getImageUrl from "../services/image-url";
import { IoStarOutline, IoStarSharp } from "react-icons/io5";
import { IoMdStar, IoMdStarOutline } from "react-icons/io";
import { Hotel } from "../Interfaces/Hotel";


interface Props {
  hotel: Hotel;
}

const HotelCard = ({ hotel }: Props) => {
  let rating = hotel.stars;
  return (
    <Card
      textAlign="left"
      w="70vw"
      h="100px"
      borderRadius={10}
      overflow="hidden"
      p={1}
      _hover={{
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Add your desired hover effect
        transform: "scale(1.01)", // Optional: Scale up the card on hover
        transition: "box-shadow 0.7s ease, transform 0.7s ease", // Smooth transition
      }}
    >
      <HStack h="100%">
        <Image
          borderRadius={7}
          src={getImageUrl(hotel.image)}
          w="17%"
          h="100%"
        />{" "}
        <VStack>
          <Text mb={0}>{hotel.name} </Text>

          <HStack gap={0.001}>
            {[...Array(5)].map((_, idx) =>
              idx < rating ? (
                <IoMdStar key={idx} color={"#ffd500"} size={20} />
              ) : (
                <IoMdStarOutline color="gray" key={idx} size={20} />
              )
            )}
          </HStack>
        </VStack>
        <Spacer />
        <Text>{hotel.number_rooms} </Text>
        <Spacer />
        <Text>
          {hotel.country.name} - {hotel.area.name}{" "}
        </Text>
        <Spacer />
        <Text>{hotel.user.name} </Text>
        <Spacer />
        {
          hotel.visible ? <Button>Make Invisible</Button> :<Button>Make visible</Button>
        }
      
        <Button>Delete</Button>
      </HStack>
    </Card>
  );
};

export default HotelCard;
