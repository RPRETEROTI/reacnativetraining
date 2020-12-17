import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { AddingButton } from "./components/AddingButton";
import { Item } from "./components/Item";
import { ItemInput } from "./components/ItemInput";

export default function App() {
  const [views, setViews] = React.useState<Array<any>>([]);
  console.log("views", views);

  const addHandler = (initialValue: any) => {
    setViews((views) => [
      ...views,
      { key: Math.random().toString(), value: initialValue },
    ]);
  };
  const deleteHandler = (index: any) => {
    setViews((views) => views.filter((v) => v.key != index));
  };
  return (
    <View style={styles.container}>
      <View>
        <ItemInput onAddItem={addHandler} />
      </View>
      {views && views.length > 0 && (
        <FlatList
          data={views}
          renderItem={(itemData) => (
            <Item
              id={itemData.item.key}
              title={itemData.item.value}
              onDeleteItem={deleteHandler}
            ></Item>
          )}
          keyExtractor={(itemData, index) => itemData.key}
        ></FlatList>
      )}
    </View>
    // {/* {views &&
    //   views.length > 0 &&
    //   views.map((v: any, index: number) => (
    //     <View
    //       key={index}
    //       style={{
    //         width: "auto",
    //         height: "auto",
    //         borderColor: "red",
    //         borderWidth: 2,
    //         borderStyle: "solid",
    //         margin: "10px",
    //       }}
    //     >
    //       <Text style={{ color: "black" }}>{v}</Text>
    //     </View>
    //   ))} */}
  );
}

const styles = StyleSheet.create({
  container: {
    margin: "30px",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
