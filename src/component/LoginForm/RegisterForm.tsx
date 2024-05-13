import { FormControl, FormLabel, Input, Button, Text, Select } from "@chakra-ui/react";
import styles from "./LoginForm.module.css";
import { COLORS } from "../../colors";

const RegisterForm = () => {
  return (
    <FormControl className={styles.formControl} style={{}}>
      <Text className={styles.login} color={COLORS.darkblue}>Register</Text>
      
      <Input variant="flushed" type="email" mb="4" placeholder="Email address" />

      <Input variant="flushed" type="password" mb="4" placeholder="Password" />

      <Input variant="flushed" type="password" mb="4" placeholder="confirm Password" />

      <Select placeholder="Select your role">
        <option value="trip">Trip Admin</option>
        <option value="airport">Airport Admin</option>
        <option value="hotel">Hotel Admin</option>
      </Select>

      <Button size="md" mt="6">
        register
      </Button>
    </FormControl>
  );
};

export default RegisterForm;
