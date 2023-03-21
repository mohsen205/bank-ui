import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Main from "../../screen/home/Main";
import MyCard from "../../screen/home/MyCard";
import Passcode from "../../screen/auth/Passcode";
import IconButton from "../buttons/IconButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Logo from "../Logo";
import { COLORS, SIZES } from "../../constant/";
import { useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

const BottomTab = createBottomTabNavigator();

const options = {
  tabBarShowLabel: false,
  headerStyle: {
    backgroundColor: COLORS.gray400,
    borderTopColor: "red",
  },
  headerTintColor: {
    color: "white",
  },
  headerShadowVisible: false,
  tabBarStyle: {
    backgroundColor: COLORS.gray400,
    borderTopWidth: 0,
    elevation: 0,
  },
  tabBarActiveTintColor: COLORS.accent,
  tabBarInactiveTintColor: "white",
  tabBarIconStyle: {
    fontSize: 24,
  },
};

const passcodeOption = {
  headerTitle: () => <Logo />,
  headerTitleAlign: "center",
  headerRight: () => {
    return (
      <IconButton style={{ marginLeft: SIZES.base }}>
        <MaterialCommunityIcons name="dots-vertical" size={24} color="white" />
      </IconButton>
    );
  },
  tabBarButton: () => null,
  tabBarVisible: false,
};

const homeMainOptions = {
  headerTitle: () => <Logo />,
  headerTitleAlign: "center",
  headerLeft: () => {
    return (
      <IconButton style={{ marginRight: SIZES.base }}>
        <MaterialCommunityIcons name="dots-vertical" size={24} color="white" />
      </IconButton>
    );
  },
  // tabBarVisible: false,
  tabBarIcon: ({ color, size }) => {
    return <Ionicons name="ios-home-outline" size={size} color={color} />;
  },
};

const TabNavigation = () => {
  const auth = useSelector((state) => state.auth);
  return (
    <>
      <BottomTab.Navigator screenOptions={options}>
        {auth.isLogged === false && (
          <BottomTab.Screen
            name="auth-passcode"
            component={Passcode}
            options={passcodeOption}
          />
        )}
        <BottomTab.Screen
          name="home-main"
          component={Main}
          options={homeMainOptions}
        />
        <BottomTab.Screen
          name="home-shop"
          component={Main}
          options={{
            tabBarIcon: ({ color, size }) => {
              return (
                <Ionicons name="ios-basket-outline" size={size} color={color} />
              );
            },
          }}
        />
        <BottomTab.Screen
          name="home-my-card"
          component={MyCard}
          options={{
            tabBarIcon: ({ color, size }) => {
              return (
                <Ionicons name="ios-card-outline" size={size} color={color} />
              );
            },
          }}
        />
        <BottomTab.Screen
          name="home-chat"
          component={MyCard}
          options={{
            tabBarIcon: ({ color, size }) => {
              return (
                <Ionicons
                  name="ios-chatbubble-ellipses-outline"
                  size={size}
                  color={color}
                />
              );
            },
          }}
        />
        <BottomTab.Screen
          name="home-history"
          component={Main}
          options={{
            tabBarIcon: ({ color, size }) => {
              return (
                <Ionicons name="ios-time-outline" size={size} color={color} />
              );
            },
          }}
        />
      </BottomTab.Navigator>
    </>
  );
};

export default TabNavigation;
