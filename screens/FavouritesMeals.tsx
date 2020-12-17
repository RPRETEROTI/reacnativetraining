import React from "react";
import { StyleSheet, View, Text } from "react-native";

export const FavouritesMeals = (props: any) => {
  return (
    <View style={styles.start}>
      <Text>FavouritesMeals</Text>
    </View>
  );
};

FavouritesMeals.navigationOptions = {
  headerTitle: "Favourites Categories",
  headerStyle: {
    backgroundColor: "orange",
  },
  headerTintColor: "white",
};
const styles = StyleSheet.create({
  start: {
    margin: 30,
    flex: 1,
    width: 90,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
});
