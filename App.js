import React from "react";
import {
  useFonts,
  Montserrat_900Black,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_500Medium,
} from "@expo-google-fonts/montserrat";

import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./component/nvaigation/StackNavigation";
import { Provider } from "react-redux";
import store from "./context/app/store";

const App = () => {
  let [fontsLoaded] = useFonts({
    Montserrat_900Black,
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;
