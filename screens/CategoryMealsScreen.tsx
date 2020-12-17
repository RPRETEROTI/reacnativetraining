import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { CATEGORIES } from "./models/Category";

export const CategoryMealsScreen = (props: any) => {
  const catId = props.navigation.getParam("categoryId");
  console.log(catId, "catId");
  const mealTitleCat = CATEGORIES.find((c) => c.id === catId);
  console.log("mealTitleCat", mealTitleCat);
  return (
    <View style={styles.start}>
      <Text>{mealTitleCat?.title}</Text>
      <Button
        title="categorymeal access"
        onPress={() => {
          props.navigation.navigate("MealDetail", { categoryId: catId });
        }}
      ></Button>
    </View>
  );
};

// CategoryMealsScreen.navigationOptions = (navigationData: any) => {
//   const catId = navigationData.navigation.getParam("categoryId");
//   const mealTitleCat = CATEGORIES.find((c) => {
//     c.id === catId;
//   });
//   return {
//     headertitle: mealTitleCat?.title,
//   };
// };

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
