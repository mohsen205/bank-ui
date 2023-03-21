import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const size = {
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,
  height: height,
  width: width,
};

export default size;
