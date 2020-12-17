import React from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  SafeAreaView,
} from "react-native";
import { Item } from "./components/Item";
import { ItemInput } from "./components/ItemInput";
import { COMICS } from "./screens/models/Comics";
import { MealsNavigator } from "./screens/navigation/MealsNavigator";
import { ComicsMainNavigator } from "./screens/navigation/navigationComics/ComicsNavigator";
import { ComicsShopScreen } from "./screens/navigation/screenComics/ComicsShop";
import { StartScreen } from "./screens/StartScreen";
export default function App() {
  return <ComicsMainNavigator />;
  // <MealsNavigator />;
}

const styles = StyleSheet.create({
  container: {
    margin: "30px",
    flex: 1,
    //backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
});
