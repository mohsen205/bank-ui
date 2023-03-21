import React from "react";
import { View, StyleSheet } from "react-native";
import { COLORS } from "../../constant";
import Logo from "../../component/Logo";
import LinearButton from "../../component/buttons/LinearButton";
import Button from "../../component/buttons/Button";

const Login = ({ navigation }) => {
  const handlePassCode = () => {
    navigation.navigate("home");
  };

  return (
    <View style={styles.loginContainer}>
      <Logo style={styles.logoStyle} />
      <LinearButton title="Log in" onPress={handlePassCode} />
      <Button title="Become a client of the bank" />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.gray400,
  },
  logoStyle: {
    width: 105,
    height: 32,
  },
});
