import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import DeleteButton from "./buttons/DeleteButton";
import NumberButton from "./buttons/NumberButton";
import { login } from "../context/features/authSlice";
import { toNumber } from "../utils/toNumber";
import Code from "./Code";

const Keybaord = () => {
  const [keyValue, setKeyValue] = useState([]);

  const dispatch = useDispatch();

  const handleKeyboardEvent = (value) => {
    if (!isNaN(value)) {
      if (keyValue.length <= 5) {
        setKeyValue([value, ...keyValue]);
      }
    } else {
      const newKeyValue = [...keyValue];
      newKeyValue.splice(0, 1);
      setKeyValue(newKeyValue);
    }
  };

  useEffect(() => {
    if (keyValue.length === 5) {
      const passcode = toNumber(keyValue);
      dispatch(login(passcode));
    }
  }, [keyValue]);

  return (
    <>
      <Code value={keyValue} />
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
    </>
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
