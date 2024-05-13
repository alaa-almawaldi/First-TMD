import { FormControl, FormLabel, Input, Button, Text } from "@chakra-ui/react";
import styles from "./LoginForm.module.css";
import { COLORS } from '../../colors';

const LoginForm = () => {
  return (
    <FormControl className={styles.formControl}>
      <Text className={styles.login} color={COLORS.darkblue}>Login</Text>
      <Input variant="flushed" type="email" mb="4" placeholder="Email address" />
      {/* <FormHelperText>We'll never share your email.</FormHelperText> */}

      <Input variant="flushed" type="password" mb="4" placeholder="Password" />

      <Button size="md" mt="6" >
        login
      </Button>
    </FormControl>
  );
};

export default LoginForm;
