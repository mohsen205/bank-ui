import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import { COLORS } from "../../constant";

const Main = () => {
  return (
    <ScrollView style={styles.rootScreen}>
      <View style={styles.rootScreen}>
        <Text>Main</Text>
      </View>
    </ScrollView>
  );
};

export default Main;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  mainScreen: {
    flex: 1,
    backgroundColor: COLORS.gray400,
    justifyContent: "center",
    alignItems: "center",
  },
});
