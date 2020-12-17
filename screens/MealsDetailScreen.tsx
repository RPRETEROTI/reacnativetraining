import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { HeaderCustomButton } from "../components/HeaderCustomButton";

export const MealsDetailScreen = (props: any) => {
  return (
    <View style={styles.start}>
      <Text>MealsDetailScreen</Text>
      <Button
        title="vai alla prima pagina"
        onPress={() => {
          props.navigation.popToTop();
        }}
      ></Button>
    </View>
  );
};

MealsDetailScreen.navigationOptions = {
  headerTitle: "MealsDetailScreen",
  headerStyle: {
    backgroundColor: "violet",
  },
  headerTintColor: "white",
  headerRight: (
    <HeaderButtons HeaderButtonComponent={HeaderCustomButton}>
      <Item iconName="ios-star" title="favo" />
    </HeaderButtons>
  ),
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
