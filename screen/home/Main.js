import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import Balance from "../../component/ui/Balance";
import { COLORS } from "../../constant";

const Main = () => {
  return (
    <ScrollView style={styles.rootScreen}>
      <View style={styles.mainScreen}>
        <Balance />
      </View>
    </ScrollView>
  );
};

export default Main;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: COLORS.gray400,
  },
  mainScreen: {},
});
