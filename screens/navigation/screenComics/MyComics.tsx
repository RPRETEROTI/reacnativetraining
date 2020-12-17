import React from "react";
import { StyleSheet, View, Text } from "react-native";

export const MyComicsScreen = (props: any) => {
  return (
    <View style={styles.start}>
      <Text>MyComics</Text>
    </View>
  );
};

MyComicsScreen.navigationOptions = {
  headerTitle: "MyComics",
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
