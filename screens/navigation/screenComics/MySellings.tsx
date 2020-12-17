import React from "react";
import { StyleSheet, View, Text } from "react-native";

export const MySellingsScreen = (props: any) => {
  return (
    <View style={styles.start}>
      <Text>FavouritesMeals</Text>
    </View>
  );
};

MySellingsScreen.navigationOptions = {
  headerTitle: "Favourites Categories",
  headerStyle: {
    backgroundColor: "orange",
  },
  headerTintColor: "white",
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
