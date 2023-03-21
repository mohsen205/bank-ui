import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constant";

const Button = ({
  onPress,
  title,
  color = "#363339",
  titleColor = "white",
  children,
  style,
}) => {
  return (
    <View style={[styles.buttonOuterContainer, style]}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          pressed && styles.pressed,
          styles.buttonContainer,
          { backgroundColor: color },
        ]}
      >
        <View style={styles.innerContainner}>
          {children ? (
            children
          ) : (
            <Text style={[styles.title, FONTS.bodyL, { color: titleColor }]}>
              {title}
            </Text>
          )}
        </View>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    width: "100%",
    paddingHorizontal: SIZES.padding,
  },
  buttonContainer: {
    width: "100%",
    borderRadius: 25,
  },
  innerContainner: {
    paddingVertical: SIZES.radius,
  },
  pressed: {
    opacity: 0.75,
  },
  title: {
    textAlign: "center",
  },
});
