import { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Button,
  CheckboxGroup,
  Stack,
  Checkbox,
  Grid,
} from "@chakra-ui/react";
import category from "../data/category";

const PlaceForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    location: "",
    category: [],
    image: null as File | null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCheckBoxChange = (selectedValues) => {
    setFormData((prevData) => ({
      ...prevData,
      category: selectedValues,
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Handle image upload logic here
    const selectedImage = e.target.files?.[0];
    if (!selectedImage) return;
    setFormData((prevData) => ({ ...prevData, image: selectedImage }));
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server)
    console.log("Form data submitted:", formData);
  };

  return (
    <Box maxW="400px" mx="auto">
      <form onSubmit={() => handleSubmit}>
        <FormControl mb={4}>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Description</FormLabel>
          <Textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Location</FormLabel>
          <Select
            name="location"
            value={formData.location}
            onChange={handleInputChange}
          >
            <option value="location1">Location 1</option>
            <option value="location2">Location 2</option>
            {/* Add more location options */}
          </Select>
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Categories</FormLabel>
          <CheckboxGroup
            colorScheme="blue"
            value={formData.category}
            onChange={handleCheckBoxChange}
          >
            <Grid
              templateColumns="repeat(3, 1fr)"
              templateRows="repeat(2, 1fr)"
              gap={2}
            >
              {category.map((category) => (
                <Checkbox value={category.name}>{category.name}</Checkbox>
              ))}
            </Grid>
          </CheckboxGroup>
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Upload Image</FormLabel>
          <Input
            type="file"
            accept="image/*"
            name="image"
            onChange={handleImageUpload}
          />
        </FormControl>
        <Button type="submit" colorScheme="blue">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default PlaceForm;
