import React from "react";
import {
  Touchable,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export const ItemNav = (props: any) => {
  console.log("onpropsa", props);
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        props.onHandleLink;
      }}
    >
      <View>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    display: "flex",
    margin: 20,
    width: 120,
    backgroundColor: "#fff",
    padding: 10,
  },
});
