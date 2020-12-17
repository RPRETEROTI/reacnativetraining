import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Category } from "./models/Category";

export const CategoriesScreen = (props: any) => {
  console.log(props, "props");
  const CATEGORIES = [
    new Category("c1", "Italian", "#f5428d"),
    new Category("c2", "Quick & Easy", "#f54242"),
    new Category("c3", "Hamburgers", "#f5a442"),
    new Category("c4", "German", "#f5d142"),
    new Category("c5", "Light & Lovely", "#368dff"),
    new Category("c6", "Exotic", "#41d95d"),
    new Category("c7", "Breakfast", "#9eecff"),
    new Category("c8", "Asian", "#b9ffb0"),
    new Category("c9", "French", "#ffc7ff"),
    new Category("c10", "Summer", "#47fced"),
  ];
  const renderItem = (itemData: any): any => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        props.navigation.navigate("CategoryMeals");
      }}
    >
      <View>
        <Text>{itemData.item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={CATEGORIES}
      numColumns={2}
      keyExtractor={(item, index) => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
    />
  );
};
CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories",
  headerStyle: {
    backgroundColor: "violet",
  },
  headerTintColor: "white",
};
const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    paddingVertical: 10,
    backgroundColor: "red",
  },
  item: {
    display: "flex",
    margin: 20,
    width: 120,
    backgroundColor: "#fff",
    padding: 10,
  },
});
