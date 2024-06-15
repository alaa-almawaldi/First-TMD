import {
  Avatar,
  Box,
  Button,
  Center,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";
import { MdAddAPhoto } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { SetStateAction, useEffect, useState } from "react";
import image from "../images/profile1.jpg";
import { COLORS } from "../colors";
import axios from "axios";
import getImageUrl from "../services/image-url";
import { FetchResponse } from "../services/api-client";
import useFetchData from "../hooks/useFetchData";
import { User } from "../Interfaces/User";
import { Country } from "../Interfaces/Place";

const UserProfile = () => {
  const { data } = useFetchData<FetchResponse<User>>("/admin-profile");
  const { data: locations } = useFetchData<FetchResponse<Country[]>>(
    "/admin/get_all_country"
  );
  const [user, setUser] = useState({ ...data?.data });
  const [error, setError] = useState("");

  const token = localStorage.getItem("authToken");

  useEffect(() => {
    if (data?.data) {
      setUser(data.data);
    }
    setError("");
  }, [data]);

  const [file, setFile] = useState("");

  const handleImageUpload = (e) => {
    const file = e.target?.files[0];
    setFile(e.target?.files[0]);

    const formData = new FormData();
    formData.append("image", file);

    console.log(formData);
    axios
      .post("http://127.0.0.1:8000/api/change-profile-photo", formData, {
        headers: {
          Authorization: `Bearer ${token}`, // Include token in Authorization header
        },
      })
      .then((response) => {
        console.log(response.data);
        alert("update successfull");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSelectChange = (event) => {
    const id = event.target.value;
    setUser({ ...user, position: { ...user.position, id: id } });
  };

  const handleUpdateData = () => {
    const prevUser = { ...user };
    console.log({
      name: user.name,
      position: user.position?.id,
      phone_number: user.phone_number,
    });
    axios
      .post(
        "http://127.0.0.1:8000/api/update-profile",
        {
          name: user.name,
          position: user.position?.id,
          phone_number: user.phone_number,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include token in Authorization header
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        alert("update successfull");
      })
      .catch((error) => {
        // console.log(error);
        setError(error.response.data.message);
        setUser({ ...prevUser });
      });
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
        bgGradient={["linear(to-b, gray.100,blue.400, blue.900)"]}
        h="150px"
        borderRadius={10}
      ></Container>
      <Container mb="6px" mt="-100px">
        <Avatar
          border="2px solid white"
          size="2xl"
          src={data?.data.image ? getImageUrl(data?.data.image) : ""}
        />
        <Box ml="120px" mt="-20px">
          <FormControl mb={4}>
            <FormLabel>
              <MdAddAPhoto
                size={27}
                cursor="pointer"
                onClick={handleImageUpload}
              />
            </FormLabel>
            <Input
              type="file"
              accept="image/*"
              name="image"
              hidden
              onChange={handleImageUpload}
            />
          </FormControl>
        </Box>
        <Heading fontSize="4xl">{data?.data.name}</Heading>
        <Text color="gray.600" as="b">
          {data?.data.role[0].toString()}
        </Text>
      </Container>
      <FormControl>
        <Text color={COLORS.darkblue} p="0 6px">
          Email address
        </Text>
        <InputGroup mb="20px">
          <InputLeftElement pointerEvents="none">
            <EmailIcon color={COLORS.darkblue} />
          </InputLeftElement>
          <Input variant="flushed" type="email" value={data?.data.email} />
        </InputGroup>

        <Text color={COLORS.darkblue} p="0 6px">
          Location address
        </Text>
        <InputGroup mb="20px">
          <InputLeftElement pointerEvents="none">
            <FaLocationDot color={COLORS.darkblue} />
          </InputLeftElement>
          <Select
            name="position"
            variant="flushed"
            ml={10}
            placeholder={user.position?.name}
            onChange={handleSelectChange}
          >
            {locations?.data.map((loc) => (
              <option key={loc.id} value={loc.id}>{loc.name}</option>
            ))}
          </Select>
        </InputGroup>

        <Text color={COLORS.darkblue} p="0 6px">
          Phone Number
        </Text>
        <InputGroup mb="20px">
          <InputLeftElement pointerEvents="none">
            <PhoneIcon color={COLORS.darkblue} /*boxSize={5}*/ />
          </InputLeftElement>
          <Input
            name="phone_number"
            variant="flushed"
            type="tel"
            value={user.phone_number}
            onChange={handleInputChange}
          />
        </InputGroup>
        {error && <FormHelperText color="red">{error}</FormHelperText>}
        <Container textAlign="right">
          <Button
            onClick={handleUpdateData}
            backgroundColor={COLORS.lightblue}
            color="white"
          >
            Update
          </Button>
        </Container>
      </FormControl>
    </Container>
  );
};

export default UserProfile;
