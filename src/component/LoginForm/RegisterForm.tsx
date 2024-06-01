import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Select,
  FormHelperText,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import styles from "./LoginForm.module.css";
import { COLORS } from "../../colors";
import roles from "../../data/roles";
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const RegisterForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    rePassword: "",
    role: {
      id: "",
      name: "",
    },
  });
  const [error, setError] = useState({
    message: null,
    errors: {
      name: null,
      email: null,
      password: null,
      role_id: null,
    },
  });

  const animationProps = {
    initial: { opacity: 0, transform: "translateX(-100%)" }, // Initial state: offscreen left
    animate: { opacity: 1, transform: "translateX(0)" }, // Animate state: slide in from left
    transition: { duration: 0.9, ease: "easeInOut" }, // Customize animation parameters
  };
  useEffect(() => {
    if (isOpen) {
      const timeoutId = setTimeout(() => setIsOpen(false), 3000); // Timeout after 3 seconds
      return () => clearTimeout(timeoutId); // Cleanup on unmount
    }
    
  }, [isOpen]);

  

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    console.log("a");
    axios
      .post("http://127.0.0.1:8000/api/add-admin", {
        name: form.name,
        email: form.email,
        password: form.password,
        password_confirmation: form.rePassword,
        role_id: form.role.id,
      })
      .then((response) => {
        console.log(response);
        setIsOpen(true);
      })
      .catch((error) => {
        const errors = error.response.data;
        setError({
          ...errors,
        });
      });
  };

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log("form:", form);
  };

  const handleChange2 = (event) => {
    const { name, value } = event.target; // Destructure name and value from event

    // Find the selected role object based on name
    const selectedRole = roles.find((role) => role.name === value);

    // Update role with id (if available) and name
    setForm({
      ...form,
      role: {
        id: selectedRole?.id || "", // Set id if it exists in selectedRole, otherwise empty string
        name: value,
      },
    });
    console.log("form role:", form);
  };

  return (
    <>
      <form onSubmit={handleSubmit} >
        <FormControl className={styles.formControl}>
          <Text className={styles.login} color={COLORS.darkblue}>
            Sign Up
          </Text>

          <Input
            id="1"
            name="name"
            type="text"
            variant="flushed"
            mb="4"
            placeholder="Name "
            value={form.name}
            onChange={handleChange} // Update name state
          />
          {error && (
            <FormHelperText color="red">{error.errors.name}</FormHelperText>
          )}

          <Input
            id="2"
            name="email"
            type="email"
            variant="flushed"
            mb="4"
            placeholder="Email address"
            value={form.email}
            onChange={handleChange} // Update email state
          />
          {error && (
            <FormHelperText color="red">{error.errors.email}</FormHelperText>
          )}

          <Input
            id="3"
            name="password"
            type="password"
            variant="flushed"
            mb="4"
            placeholder="Password"
            value={form.password}
            onChange={handleChange} // Update password state
          />

          <Input
            id="4"
            name="rePassword"
            type="password"
            variant="flushed"
            mb="4"
            placeholder="Password"
            value={form.rePassword}
            onChange={handleChange} // Update password state
          />
          {error && (
            <FormHelperText color="red">{error.errors.password}</FormHelperText>
          )}

          <Select placeholder="Select your role" onChange={handleChange2}>
            {roles.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
          </Select>
          {error && (
            <FormHelperText color="red">{error.errors.role_id}</FormHelperText>
          )}

          <Button size="md" mt="6" type="submit">
            Sign Up
          </Button>
        </FormControl>
      </form>
      {isOpen && (
        <motion.div {...animationProps} className={`alert alert-${status}`}>
          <Alert status="success" variant="subtle" borderRadius={20}>
            <AlertIcon />
            Your request will be reviewed..Check your gmail!
          </Alert>
        </motion.div>
      )}
    </>
  );
};

export default RegisterForm;
