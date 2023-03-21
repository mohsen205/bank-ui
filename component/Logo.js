import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const Logo = ({ style }) => {
  return (
    <View style={[styles.logoContainer, style]}>
      <Image
        source={require("../assets/images/logo.png")}
        resizeMode="cover"
        style={styles.logo}
      />
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  logoContainer: {
    height: 21,
    width: 72,
  },
  logo: {
    height: "100%",
    width: "100%",
  },
});
