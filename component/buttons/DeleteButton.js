import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const DeleteButton = ({ onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => [pressed && styles.pressed, styles.deleteButton]}
      onPress={() => onPress("delete")}
    >
      <Feather name="delete" size={24} color="white" />
    </Pressable>
  );
};

export default DeleteButton;

const styles = StyleSheet.create({
  deleteButton: {
    justifyContent: "center",
    alignItems: "center",
    height: 75,
    width: 75,
  },
  pressed: {
    opacity: 0.75,
  },
});
