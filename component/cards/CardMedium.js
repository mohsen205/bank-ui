import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, StyleSheet, Pressable, Text, Image } from "react-native";
import { FONTS, SIZES } from "../../constant";

const CardMedium = ({
  amount,
  startColor,
  endColor,
  description,
  creditCardNumber,
}) => {
  return (
    <Pressable
      style={({ pressed }) => [pressed && styles.pressed, styles.cardContainer]}
    >
      <LinearGradient
        colors={[startColor, endColor]}
        style={styles.innerCardContainer}
      >
        <View style={styles.container}>
          <Image
            source={require("../../assets/images/logo-visa.png")}
            resizeMode="cover"
          />
          <View>
            <Text style={[styles.description, FONTS.bodyM]}>{description}</Text>
            <Text style={[styles.amount, FONTS.bodyXL]}>$ {amount}</Text>
          </View>
          <Text style={[styles.creditCardNumber, FONTS.bodyM]}>
            **{" "}
            {creditCardNumber.slice(
              creditCardNumber.length - 4,
              creditCardNumber.length
            )}
          </Text>
        </View>
      </LinearGradient>
    </Pressable>
  );
};

export default CardMedium;

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 20,
    marginLeft: SIZES.font,
  },
  innerCardContainer: {
    height: 150,
    width: 150,
    borderRadius: 35,
    padding: 20,
  },
  container: {
    height: "100%",
    justifyContent: "space-between",
  },
  description: {
    textTransform: "capitalize",
  },
  amount: {
    fontWeight: "bold",
  },
  creditCardNumber: {},
  pressed: {
    opacity: 0.75,
  },
});
