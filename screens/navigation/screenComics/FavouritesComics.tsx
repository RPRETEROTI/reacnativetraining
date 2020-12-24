import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { NavigationStackScreenComponent } from "react-navigation-stack";

export const FavoutitesScreen: NavigationStackScreenComponent = ({
  ...props
}) => {
  const { navigation } = props;
  const comic = navigation.getParam("fvrcomic");
  console.log("x", comic);
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
