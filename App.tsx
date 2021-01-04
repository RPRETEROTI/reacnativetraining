import React from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { AppNavigationContainer } from "./screens/navigation/AppNavigationContainer";
import { store } from "./store/store";

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigationContainer />
    </Provider>
    // <Provider store={store}>
    //   <ComicsMainNavigator />
    // </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: "30px",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
