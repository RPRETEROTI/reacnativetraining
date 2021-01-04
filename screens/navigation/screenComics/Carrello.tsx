import { StackHeaderOptions } from "@react-navigation/stack/lib/typescript/src/types";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { NavigationStackScreenComponent } from "react-navigation-stack/lib/typescript/src/types";

export const CarrelloScreen: NavigationStackScreenComponent = ({
  ...props
}) => {
  return (
    <View style={styles.start}>
      <Text>Carrello</Text>
    </View>
  );
};

export const carrelloScreenOptions = (navData: any): StackHeaderOptions => {
  return { headerTitle: "Carrello" };
};
const styles = StyleSheet.create({
  start: {
    // margin: "30px",
    flex: 1,
    // width: "90%",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
});
