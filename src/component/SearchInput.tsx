import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = (/*{onSearch}: Props*/) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      style={{ width: "100%", margin: " 6px 2px" }}
      onSubmit={(event) => {
        event.preventDefault(); //to prevent form from being posted to the server
        // if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search..."
          variant="filled"
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
