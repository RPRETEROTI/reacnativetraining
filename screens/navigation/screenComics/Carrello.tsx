import React from "react";
import { StyleSheet, View, Text } from "react-native";

export const CarrelloScreen = (props: any) => {
  return (
    <View style={styles.start}>
      <Text>Carrello</Text>
    </View>
  );
};

CarrelloScreen.navigationOptions = {
  headerTitle: "Carrello",
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
