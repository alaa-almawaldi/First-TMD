import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Flex,
  HStack,
  Select,
  Heading,
  Text,
  Container,
  Show,
  keyframes,
} from "@chakra-ui/react";
import styles from "./LoginForm.module.css";
import LoginForm from "./LoginForm/LoginForm";
import RegisterForm from "./LoginForm/RegisterForm";
import { COLORS } from "../colors";
import { FONTS } from "../fonts";
import NavBar from "./NavBar";

const pulse = keyframes`
  from { transform: scale(1); }
  to { transform: scale(1.08); }
`;

const WelcomeForm = () => {
  const [login, setLogin] = useState(false);

  return (
    <>
      <div style={{ padding: "2% 10%" }}>
        <Heading
          cursor="pointer"
          mt="20px"
          mb="-60px"
          color={COLORS.darkblue}
          fontFamily={FONTS.third}
          size="20px"
          ml="20px"
        >
          <HStack>
            <Text
              _hover={{
                animation: `${pulse} 0.3s ease-in-out forwards`,
              }}
              borderRadius={0}
              onClick={() => setLogin(true)}
            >
              Sign In
            </Text>
            <Text>|</Text>
            <Text
              _hover={{
                animation: `${pulse} 0.3s ease-in-out forwards`,
              }}
              borderRadius={0}
              onClick={() => setLogin(false)}
            >
              Sign Up
            </Text>
          </HStack>
        </Heading>

        {login && <LoginForm />}
        {!login && <RegisterForm />}
      </div>
    </>
  );
};

export default WelcomeForm;
