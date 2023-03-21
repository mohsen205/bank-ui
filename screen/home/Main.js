import React from "react";
import { ScrollView, Text, View, StyleSheet, FlatList } from "react-native";
import CardMedium from "../../component/cards/CardMedium";
import Balance from "../../component/ui/Balance";
import { COLORS, SIZES } from "../../constant";

import CardData from "../../data/cardData";

const Main = () => {
  return (
    <ScrollView style={styles.rootScreen}>
      <View style={styles.mainScreen}>
        <Balance />
        <FlatList
          data={CardData}
          style={styles.flatList}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CardMedium {...item} />}
        />
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
  flatList: {
    marginVertical: SIZES.padding,
  },
});
