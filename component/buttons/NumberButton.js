import React from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";
import { FONTS } from "../../constant";

const NumberButton = ({ children, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.keyContainer, pressed && styles.pressed]}
      onPress={() => onPress(children)}
    >
      <Text style={[styles.number]}>{children}</Text>
    </Pressable>
  );
};

export default NumberButton;

const styles = StyleSheet.create({
  keyContainer: {
    height: 75,
    width: 75,
    backgroundColor: "keyContainer",
    borderRadius: 37.5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#363339",
  },
  number: {
    color: "white",
    fontSize: 36,
  },
  pressed: {
    opacity: 0.75,
  },
});
