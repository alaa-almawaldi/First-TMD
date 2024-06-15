import { useEffect, useState } from "react";
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
  Flex,
  HStack,
  Image,
} from "@chakra-ui/react";
import category from "../data/category";
import useFetchData from "../hooks/useFetchData";
import { FetchResponse } from "../services/api-client";
import useSendData from "../hooks/useSendData";
import { Country, Place } from "../Interfaces/Place";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const PlaceForm = ({ isOpen, onClose }: Props) => {
  const { data: countries } = useFetchData<FetchResponse<Country[]>>(
    "/admin/get_all_country"
  );
  const { data, mutate: mutatePlace } =
    useSendData<FetchResponse<Place>>("/admin/add-place");
  const [countryId, setCountryId] = useState<string>("");
  const { data: areas, mutate } = useSendData<FetchResponse<Country[]>>(
    "/admin/get_all_area"
  );
  useEffect(() => {
    if (countryId) mutate({ country_id: countryId });
  }, [countryId]);

  console.log("Areas", areas?.data?.[0].areas);

  const [formData, setFormData] = useState({
    name: "",
    text: "",
    area_id: "",
    category_ids: ["0"],
    place_price: 0,
    image: null as File[] | null,
  });

  const handleSelectChange = (event) => {
    const area_id = event.target.value as string;
    setFormData((prevData) => ({ ...prevData, area_id }));
    console.log(formData);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCheckBoxChange = (selectedValues) => {
    const categoryIds = selectedValues.map((sel) => {
      const matchingCategory = category.find((cat) => cat.name === sel);
      return matchingCategory ? matchingCategory.id.toString() : null;
    });
    console.log(categoryIds);
    setFormData((prevData) => ({
      ...prevData,
      category_ids: categoryIds,
    }));
    console.log(formData);
  };

  const [images, setImages] = useState<File[]>([]);
  // fix
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newImages = event.target.files as FileList;

    setImages((prevImages) => [...prevImages, ...Array.from(newImages)]);

    // Create a new FormData object (optional, depending on server handling)
    const formData = new FormData();
    for (const image of newImages) {
      formData.append("image", image); // Append image files
    }
    // Update formData state directly with images array (may not be necessary)
    setFormData((prevData) => ({
      ...prevData,
      image: newImages.length > 0 ? Array.from(newImages) : null, // Update with the array of File objects
    }));
  };

  const handleSubmit = (e) => {
    onClose();
    e.preventDefault();
    console.log("Form data submitted:", formData);
    mutatePlace(formData);
    console.log(data?.message);
    alert(data?.message);
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
            name="text"
            value={formData.text}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <HStack>
            <FormLabel>Country</FormLabel>
            <Select onChange={(event) => setCountryId(event.target.value)}>
              {countries?.data.map((country) => (
                <option key={country.id} value={country.id}>
                  {country.name}
                </option>
              ))}
            </Select>

            <FormLabel>Area</FormLabel>
            <Select onChange={handleSelectChange}>
              {" "}
              {areas?.data?.[0].areas.map((area) => (
                <option key={area.id} value={area.id}>
                  {area.name}
                </option>
              ))}
            </Select>
          </HStack>
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Categories</FormLabel>
          <CheckboxGroup
            colorScheme="blue"
            // value={formData.category}
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
          <FormLabel>Price</FormLabel>
          <Input
            type="number"
            name="place_price"
            value={formData.place_price}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Upload Image</FormLabel>
          <Input
            multiple
            type="file"
            accept="image/*"
            name="image"
            onChange={handleImageUpload}
          />
        </FormControl>
        {/* {formData.image?.map(img => <Image src={img.name}></Image>)} */}

        <Flex justifyContent={"center"}>
          <Button type="submit" colorScheme="blue" onClick={handleSubmit}>
            Submit
          </Button>
        </Flex>
      </form>
    </Box>
  );
};

export default PlaceForm;
