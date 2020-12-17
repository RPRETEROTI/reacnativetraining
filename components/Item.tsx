import React from "react";
import { Touchable, Text, View, TouchableOpacity } from "react-native";

export const Item = (props: any) => {
  return (
    <TouchableOpacity onPress={() => props.onDeleteItem(props.id)}>
      <View
        style={{
          width: 100,
          height: 100,
          borderColor: "red",
          borderWidth: 2,
          borderStyle: "solid",
          margin: 10,
          backgroundColor: "green",
        }}
      >
        <Text style={{ color: "black" }}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};
