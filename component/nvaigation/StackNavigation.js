import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Login from "../../screen/auth/Login";
import TabNavigation from "./TabNavigation";
import Logo from "../Logo";
import { COLORS } from "../../constant/";
import IconButton from "../buttons/IconButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

const options = {
  headerTitle: () => <Logo />,
  headerTitleAlign: "center",
  headerStyle: {
    backgroundColor: COLORS.gray400,
  },
  headerTintColor: {
    color: "white",
  },
  sceneContainerStyle: {
    backgroundColor: COLORS.gray400,
  },
  headerRight: ({ tintColor, size = 24 }) => {
    return (
      <IconButton>
        <MaterialCommunityIcons
          name="dots-vertical"
          size={size}
          color={tintColor.color}
        />
      </IconButton>
    );
  },
  headerShadowVisible: false,
};

const StackNavigation = () => {
  return (
    <>
      <Stack.Navigator screenOptions={options}>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen
          name="home"
          component={TabNavigation}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export default StackNavigation;
