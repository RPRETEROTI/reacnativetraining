import React from "react";
import { StyleSheet, View } from "react-native";

export const Card = (props: any) => {
  return <View style={[styles.start, props.style]}>{props.children}</View>;
};

const styles = StyleSheet.create({
  start: {
    margin: 30,
    flex: 1,
    width: 70,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
});
