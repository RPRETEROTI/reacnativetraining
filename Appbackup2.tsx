import React from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  SafeAreaView,
} from "react-native";
import { Item } from "./components/Item";
import { ItemInput } from "./components/ItemInput";
import { StartScreen } from "./screens/StartScreen";

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
    <SafeAreaView style={styles.container}>
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
      <StartScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: "30px",
    flex: 1,
    //backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
});
