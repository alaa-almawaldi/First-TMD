import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  useQuery,
  FormHelperText,
} from "@chakra-ui/react";
import styles from "./LoginForm.module.css";
import { COLORS } from "../../colors";
import { useContext, useState } from "react";
import axios from "axios";
import App from "../../App";
import UserRoleContext from "../../state-managment/UserRoleContext";

const LoginForm = () => {
  // const { setRole } = useUserRole();
  const { setUserRole } = useContext(UserRoleContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    message: null,
    email: null,
    password: null,
  });

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    axios
      .post("http://127.0.0.1:8000/api/admin-login", {
        email: email,
        password: password,
      })
      .then((response) => {
        // console.log(response);
        // console.log(response.data.message);
        const token = response.data.token;
        const role = response.data.role;
        localStorage.setItem("authToken", token);
        sessionStorage.setItem("userRole", role);
        console.log(sessionStorage.getItem("userRole"));
        setUserRole(role);
      })
      .catch((error) => {
        console.log(error);
        const errors = error.response.data;
        setError({
          email: errors.errors?.email?.[0],
          password: errors.errors?.password?.[0],
          message: errors.message,
        });
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl className={styles.formControl} >
        <Text className={styles.login} color={COLORS.darkblue}>
          Sign In
        </Text>
        <Input
          id="1"
          variant="flushed"
          type="email"
          mb="4"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update email state
        />
        {error && <FormHelperText color="red">{error.email}</FormHelperText>}

        <Input
          id="2"
          variant="flushed"
          type="password"
          mb="4"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update password state
        />
        {error && <FormHelperText color="red">{error.password}</FormHelperText>}

        {!(error.password || error.email) && error && (
          <FormHelperText color="red">{error.message}</FormHelperText>
        )}
        <Button size="md" mt="6" type="submit">
          Sign In
        </Button>
      </FormControl>
    </form>
  );
};

export default LoginForm;
