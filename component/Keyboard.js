import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import DeleteButton from "./buttons/DeleteButton";
import NumberButton from "./buttons/NumberButton";

const Keybaord = () => {
  const [keyValue, setKeyValue] = useState([]);

  const user = useSelector((state) => state.user);
  console.log(user);
  const dispatch = useDispatch();

  const handleKeyboardEvent = (value) => {
    if (!isNaN(value)) {
      setKeyValue((prevoiusValue) => [...prevoiusValue, value]);
    } else {
      let newValues = keyValue.pop();
      setKeyValue(newValues);
    }
    if (keyValue.length === 4) {
      console.log("Logged in");
    }
  };

  return (
    <View style={styles.keyboardContainer}>
      <View style={styles.threeKeys}>
        <NumberButton onPress={handleKeyboardEvent}>1</NumberButton>
        <NumberButton onPress={handleKeyboardEvent}>2</NumberButton>
        <NumberButton onPress={handleKeyboardEvent}>3</NumberButton>
      </View>
      <View style={styles.threeKeys}>
        <NumberButton onPress={handleKeyboardEvent}>4</NumberButton>
        <NumberButton onPress={handleKeyboardEvent}>5</NumberButton>
        <NumberButton onPress={handleKeyboardEvent}>6</NumberButton>
      </View>
      <View style={styles.threeKeys}>
        <NumberButton onPress={handleKeyboardEvent}>7</NumberButton>
        <NumberButton onPress={handleKeyboardEvent}>8</NumberButton>
        <NumberButton onPress={handleKeyboardEvent}>9</NumberButton>
      </View>
      <View style={styles.threeKeys}>
        <View style={{ flex: 1 }}></View>
        <NumberButton onPress={handleKeyboardEvent}>0</NumberButton>
        <View style={styles.deleteButtonContainer}>
          <DeleteButton onPress={handleKeyboardEvent} />
        </View>
      </View>
    </View>
  );
};

export default Keybaord;

const styles = StyleSheet.create({
  keyboardContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    marginTop: 65,
  },
  threeKeys: {
    flexDirection: "row",
    gap: 28,
  },
  deleteButtonContainer: {
    flex: 1,
  },
});
