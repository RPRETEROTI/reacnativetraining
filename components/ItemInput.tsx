import React from "react";
import { Button, TextInput, View } from "react-native";
import { StatusBar } from "expo-status-bar";

export const ItemInput = (props: any) => {
  const [initialValue, setInitialValue] = React.useState("");
  const inputHandler = (x: any) => {
    setInitialValue(x);
  };

  return (
    <View>
      <Button
        title="Add view"
        onPress={() => props.onAddItem(initialValue)}
        //setViews((views: any) => views.push(initialValue));
      />
      <StatusBar style="auto" />
      <TextInput
        style={{ height: 50, width: 100, color: "red" }}
        placeholder="Crea view"
        onChangeText={(text: any) => {
          inputHandler(text);
        }}
      ></TextInput>
    </View>
  );
};
