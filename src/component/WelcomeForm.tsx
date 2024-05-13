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
} from "@chakra-ui/react";
import styles from "./LoginForm.module.css";
import LoginForm from "./LoginForm/LoginForm";
import RegisterForm from "./LoginForm/RegisterForm";

const WelcomeForm = () => {
  const [login, setLogin] = useState(false);

  return (
    <div style={{padding:"2% 10%"}} >
      <Heading mt="20px" mb="-60px">
        <Button borderRadius={0} onClick={() => setLogin(true)}>
          LogIn
        </Button>
        <Button borderRadius={0} onClick={() => setLogin(false)}>
          Sign Up
        </Button>
      </Heading>

      {login && <LoginForm />}
      {!login && <RegisterForm />}
    </div>
  );
};

export default WelcomeForm;
