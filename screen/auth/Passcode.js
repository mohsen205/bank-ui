import React from "react";
import { Text, View, StyleSheet, ScrollView, Pressable } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constant";
import Keyboard from "../../component/Keyboard";
import Button from "../../component/buttons/Button";

const Passcode = () => {
  return (
    <View style={styles.passcodeContainer}>
      <Text style={[styles.title, FONTS.bodyL]}> Enter Passcode</Text>
      <Keyboard />
      <Button
        title="Can not login?"
        color={COLORS.gray400}
        titleColor={COLORS.accent}
        style={styles.button}
      />
    </View>
  );
};

export default Passcode;

const styles = StyleSheet.create({
  passcodeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.gray400,
  },
  title: {
    color: "white",
  },
  button: {
    marginVertical: SIZES.padding,
  },
});
