import React from "react";
import { View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { SIZES } from "../constant";

const Code = () => {
  return (
    <View style={styles.codeContainer}>
      <FontAwesome name="circle" size={10} color="rgba(255,255,255,0.5)" />
      <FontAwesome name="circle" size={10} color="rgba(255,255,255,0.5)" />
      <FontAwesome name="circle" size={10} color="rgba(255,255,255,0.5)" />
      <FontAwesome name="circle" size={10} color="rgba(255,255,255,0.5)" />
      <FontAwesome name="circle" size={10} color="rgba(255,255,255,0.5)" />
    </View>
  );
};

export default Code;

const styles = StyleSheet.create({
  codeContainer: {
    flexDirection: "row",
    gap: 5,
    marginVertical: SIZES.radius,
  },
});
