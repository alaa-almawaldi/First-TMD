import {
  Avatar,
  Box,
  Button,
  Center,
  Container,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";
import { FaLocationDot } from "react-icons/fa6";
import { SetStateAction, useState } from "react";
import image from "../images/profile1.jpg";

const UserProfile = () => {
  const [phoneNumber, setPhoneNumber] = useState("0955"); // Initial value

  const handleUpdateClick = () => {
    // Replace the phone number with placeholders (e.g., 'Enter phone number')
    //setPhoneNumber('Enter phone number');
  };

  const handleInputChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setPhoneNumber(event.target.value);
  };

  return (
    <Container
      maxW="md"
      p={4}
      borderWidth="1px"
      borderRadius="lg"
      textAlign="left"
    >
      <Container
        bgGradient={["linear(to-b, purple.100,blue.400, blue.900)"]}
        h="150px"
        borderRadius={10}
      ></Container>
      <Container mb="6px" mt="-100px">
        <Avatar size="2xl" src={image} />
        <Heading fontSize="4xl">Alaa Almawaldi</Heading>
        <Text color="gray.600" as="b">
          react developer
        </Text>
      </Container>

      <Text color="gray.300" p="0 6px">
        Email address
      </Text>
      <InputGroup mb="20px">
        <InputLeftElement pointerEvents="none">
          <EmailIcon color="gray.300" />
        </InputLeftElement>
        <Input variant="flushed" type="email" value="alaa@gmail.com" />
      </InputGroup>

      <Text color="gray.300" p="0 6px">
        Location address
      </Text>
      <InputGroup mb="20px">
        <InputLeftElement pointerEvents="none">
          <FaLocationDot color="gray.300" />
        </InputLeftElement>
        <Input variant="flushed" type="text" value="Damascus" />
      </InputGroup>

      <Text color="gray.300" p="0 6px">
        Phone Number
      </Text>
      <InputGroup mb="20px">
        <InputLeftElement pointerEvents="none">
          <PhoneIcon color="gray.300" /*boxSize={5}*/ />
        </InputLeftElement>
        <Input
          variant="flushed"
          type="tel"
          value={phoneNumber}
          onChange={handleInputChange}
        />
      </InputGroup>
      <Container textAlign="right">
        <Button onClick={handleUpdateClick}>Update</Button>
      </Container>
    </Container>
  );
};

export default UserProfile;
