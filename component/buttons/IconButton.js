import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

const IconButton = ({ children, onPress, style }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        pressed && styles.pressed,
        styles.buttonContainer,
        style,
      ]}
    >
      <View styles={styles.innerContainner}>{children}</View>
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#3E3E3E",
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
  },
  innerContainner: {},
  pressed: {
    opacity: 0.75,
  },
});
