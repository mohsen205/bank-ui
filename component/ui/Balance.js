import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { faker } from "@faker-js/faker";
import IconButton from "../../component/buttons/IconButton";
import { FONTS, SIZES } from "../../constant";

const Balance = () => {
  return (
    <View style={styles.balanceContainer}>
      <View>
        <Text style={[styles.balanceText, FONTS.bodyM]}>Your balance</Text>
        <Text
          style={[styles.balanceText, FONTS.bodyXL, { fontWeight: "bold" }]}
        >
          $ {faker.datatype.number({ precision: 0.01 })}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <IconButton>
          <Ionicons name="search" size={20} color="white" />
        </IconButton>
      </View>
    </View>
  );
};

export default Balance;

const styles = StyleSheet.create({
  balanceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: SIZES.radius,
    marginVertical: SIZES.font,
  },
  balanceText: {
    color: "white",
  },
  buttonContainer: {
    justifyContent: "center",
  },
});
