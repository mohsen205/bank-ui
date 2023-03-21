import React from "react";
import { View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { SIZES } from "../constant";

const Code = ({ value }) => {
  return (
    <View style={styles.codeContainer}>
      <FontAwesome
        name="circle"
        size={10}
        color={
          value.length >= 1 ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.5)"
        }
      />
      <FontAwesome
        name="circle"
        size={10}
        color={
          value.length >= 2 ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.5)"
        }
      />
      <FontAwesome
        name="circle"
        size={10}
        color={
          value.length >= 3 ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.5)"
        }
      />
      <FontAwesome
        name="circle"
        size={10}
        color={
          value.length >= 4 ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.5)"
        }
      />
      <FontAwesome
        name="circle"
        size={10}
        color={
          value.length >= 5 ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.5)"
        }
      />
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
