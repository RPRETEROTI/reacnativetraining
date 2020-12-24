import React, { useCallback, useEffect } from "react";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { StyleSheet, View, Text, Image } from "react-native";
import { ScrollView, TouchableHighlight } from "react-native-gesture-handler";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { StackHeaderOptions } from "react-navigation-stack/lib/typescript/src/vendor/types";
import { useDispatch } from "react-redux";
import { HeaderComicsCustomButton } from "../../../components_Comics/HeaderCustomButton";
import { togglePreferites } from "../../../store/actions/shop";
import { store } from "../../../store/store";

export const ComicsDetailScreen: NavigationStackScreenComponent = ({
  ...props
}) => {
  const { navigation } = props;
  console.log("nav", navigation);
  const comic = navigation.getParam("comic");
  const isFavouriteComic = navigation.getParam("isFavourite");
  const hasClicked = navigation.getParam("isClicked");
  console.log("hasClicked", hasClicked);

  console.log("isf", isFavouriteComic);
  // const [toggleFav, setToggleFav] = React.useState(isFavouriteComic);

  // console.log("toggleFav", toggleFav);
  const dispatch = useDispatch();

  const toggleFavourite = React.useCallback(() => {
    dispatch(togglePreferites(comic));
  }, [isFavouriteComic]);

  useEffect(() => {
    console.log("banane");
    hasClicked
      ? navigation.setParams({
          toggleFavourite: toggleFavourite(),
        })
      : "";
  }, [toggleFavourite]);

  console.log("x", comic);
  console.log("store", store.getState());
  return (
    <View style={styles.start}>
      <View style={styles.containerimg}>
        <Image style={styles.img} source={{ uri: comic.coverImg }} />
      </View>
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.descript}>{comic.description}</Text>
        </View>
        <View style={styles.maincontent}>
          <View style={styles.contentPrice}>
            <Text style={styles.price}>Prezzo:{comic.price}</Text>
          </View>
          <TouchableHighlight
            style={styles.btn}
            onPress={() => {
              props.navigation.navigate("Carrello", {
                comicToBuy: comic,
              });
            }}
            // onPress={() => {
            //   dispatch(togglePreferites(comic));
            // }}
          >
            <View>
              <Text style={styles.text}>Acquista</Text>
            </View>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </View>
  );
};

ComicsDetailScreen.navigationOptions = (navData): StackHeaderOptions => {
  const comic = navData.navigation.getParam("comic");
  const isFavourite = navData.navigation.getParam("isFavourite");
  // const toggleFavourite = navData.navigation.getParam("toggleFavourite");
  console.log("if", isFavourite);

  return {
    headerTitle: comic.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderComicsCustomButton}>
        <Item
          title="Preferiti"
          iconName={isFavourite ? "md-star" : "md-star-outline"}
          onPress={() => {
            navData.navigation.setParams({
              isFavourite: !isFavourite,
              isClicked: true,
            });
            navData.navigation.getParam("toggleFavourite");
          }}
        />
      </HeaderButtons>
    ),
  };
};
const styles = StyleSheet.create({
  start: {
    // margin: "30px",
    flex: 1,
    // width: "90%",
    //height: "100%",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    borderColor: "red",
    borderStyle: "solid",
    borderWidth: 2,
  },
  maincontent: {
    display: "flex",
    flexDirection: "row",
    //width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
    marginBottom: 10,
  },
  content: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  contentPrice: {
    display: "flex",
    flex: 1,
  },

  containerimg: {
    display: "flex",
    width: "100%",
    height: 400,
  },
  img: {
    display: "flex",
    width: "100%",
    height: "100%",
  },
  text: {
    color: "red",
    justifyContent: "center",
    fontWeight: "bold",
  },
  descript: {
    padding: 15,
    marginVertical: 10,
  },
  btn: {
    borderRadius: 40,
    backgroundColor: "black",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    flex: 2,
    padding: 15,
    marginVertical: 8,
    // paddingBottom: 9,
    //width: 50,
  },
  price: {
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    fontSize: 20,
    padding: 10,
  },
});
