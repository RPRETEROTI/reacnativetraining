import React from "react";
import { Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ComicsMainNavigator } from "./navigationComics/ComicsNavigator";
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerItems,
} from "react-navigation-drawer";

export const DrawerContainer: React.FC<DrawerContentComponentProps> = ({
  ...props
}) => {
  return (
    <SafeAreaView style={{ paddingTop: 10, flex: 1 }}>
      <DrawerItems {...props} />
      <Button
        title="Logout"
        color="red"
        onPress={() => console.log("logout")}
      />
    </SafeAreaView>
  );
};
