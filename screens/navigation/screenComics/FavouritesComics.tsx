import React from "react";
import { StyleSheet, View, Text } from "react-native";

export const FavoutitesScreen = (props: any) => {
  return (
    <View style={styles.start}>
      <Text>Favourites Comics"</Text>
    </View>
  );
};

FavoutitesScreen.navigationOptions = {
  headerTitle: "Favourites Comics",
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
