import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Pressable, Text, StyleSheet, View } from "react-native";
import { FONTS, SIZES } from "../../constant";

const LinearButton = ({ style, title, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.buttonContainer,
        pressed && styles.pressed,
        style,
      ]}
    >
      <LinearGradient
        colors={["#FCFFDF", "#F1FE87"]}
        style={styles.buttonInnerContainer}
      >
        <Text style={[styles.title, FONTS.bodyL]}>{title}</Text>
      </LinearGradient>
    </Pressable>
  );
};

export default LinearButton;

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    marginVertical: SIZES.padding,
  },
  buttonInnerContainer: {
    paddingVertical: SIZES.radius,
    borderRadius: 25,
    marginHorizontal: SIZES.padding,
  },
  title: {
    textAlign: "center",
  },
  pressed: {
    opacity: 0.7,
  },
});
