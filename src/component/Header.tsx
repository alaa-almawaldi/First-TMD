import { Card, HStack, Spacer, Text } from "@chakra-ui/react";
import React from "react";

const Header = ({ list  }) => {
  return (
    <Card
      // w="70vw"
      h="30px"
      borderRadius={7}
      overflow="hidden"
      border={"solid 1px gray"}
    >
      <HStack h="100%" justifyContent="space-evenly">
        {list.map((li, index) => (
          <Text key={index} color="gray.400" as="b">
            {li}
          </Text>
        ))}
      </HStack>
    </Card>
  );
};

export default Header;
