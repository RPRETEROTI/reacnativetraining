import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  GestureResponderEvent,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NavigationEvents } from "react-navigation";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { HeaderCustomButton } from "../components/HeaderCustomButton";
import { ItemNav } from "../components/ItemNav";
import { CategoryMealsScreen } from "./CategoryMealsScreen";
import { MealsDetailScreen } from "./MealsDetailScreen";
import { Category } from "./models/Category";
import { MealsNavigator } from "./navigation/MealsNavigator";
type Props = {
  onPress: (event: GestureResponderEvent) => void;
  navigation: any;
};
export const CategoriesScreen = (props: Props) => {
  console.log(props, "props");
  const { navigation } = props;
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
  const route = () => {
    navigation.navigate("CategoryMeals");
    console.log("ce sei?");
  };

  const renderItem = (itemData: any): any => (
    <TouchableOpacity
      style={styles.item}
      onPress={(event: any) => {
        console.log(event, "x");
        navigation.navigate("CategoryMeals", {
          categoryId: itemData.item.id,
        });
      }}
    >
      <View>
        <Text>{itemData.item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderItemWithoutTouchable = (itemData: any) => (
    <View style={styles.item}>
      <Button
        title={itemData.item.title}
        onPress={() => {
          navigation.navigate("CategoryMeals", {
            categoryId: itemData.item.id,
          });
        }}
      ></Button>
    </View>
  );
  return (
    // <View style={styles.start}>
    //   <Text>CategoriesScreen</Text>
    //   <Button
    //     title=" categorymeal access"
    //     onPress={() => {
    //       // props.navigation.navigate("CategoryMeals", () => CategoryMealsScreen);
    //       props.navigation.push("CategoryMeals");
    //     }}
    //   ></Button>
    // </View>
    <>
      <FlatList
        data={CATEGORIES}
        numColumns={2}
        keyExtractor={(item, index) => item.id}
        // renderItem={(itemData) => (
        //   <ItemNav onHandleLink={route} title={itemData.item.title} />
        // )}
        renderItem={renderItem}
        // renderItem={renderItemWithoutTouchable}
        contentContainerStyle={styles.container}
      />
    </>
  );
};
CategoriesScreen.navigationOptions = (navData: any) => {
  return {
    headerTitle: "Meal Categories",
    headerStyle: {
      backgroundColor: "violet",
    },
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderCustomButton}>
        <Item
          iconName="ios-menu"
          title="favo"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerTintColor: "white",
  };
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
