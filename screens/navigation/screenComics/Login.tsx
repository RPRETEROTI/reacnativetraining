import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Dimensions,
  PixelRatio,
} from "react-native";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  NavigationComponent,
  NavigationParams,
  NavigationRoute,
} from "react-navigation";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import {
  NavigationStackProp,
  NavigationStackScreenComponent,
  NavigationStackScreenProps,
  NavigationStackOptions,
} from "react-navigation-stack";

import {
  StackHeaderOptions,
  StackNavigationOptions,
  StackNavigationProp,
} from "react-navigation-stack/lib/typescript/src/vendor/types";
import { useDispatch, useSelector } from "react-redux";
import { Comic } from "../../../components_Comics/Comic";
import { HeaderComicsCustomButton } from "../../../components_Comics/HeaderCustomButton";
import { RootState, store } from "../../../store/store";
import { COMICS, ComicsType } from "../../models/Comics";

//ask passing data from parent intop navigator typescritp
// export interface ComicsProps extends NavigationStackScreenProps {
//   comics?: ComicsType;
//   onPress?: () => void;
// }

// export type ComicsShop = ComicsProps &
//   NavigationComponent<
//     StackNavigationOptions,
//     StackNavigationProp<NavigationRoute<NavigationParams>, NavigationParams>
//   >;
//   export type ComicsShop2 = ComicsProps &
//   NavigationStackScreenProps;
export const StartScreen: NavigationStackScreenComponent = ({ ...props }) => {
  const comicstate = store.getState();
  const favourites = useSelector((state: RootState) => {
    return state.shop.preferiti;
  });
  const toggleFavourite = (idComic: number): boolean => {
    return !!favourites.find((fv: any) => fv.id === idComic);
  };
  console.log("fav", favourites);
  console.log("toggleFavourite", toggleFavourite);

  console.log("comicstate", comicstate);
  const renderItem = (itemData: any): any => (
    <Comic
      comic={itemData.item}
      onPress={(type) => {
        type !== "buy"
          ? props.navigation.navigate("ComicsDetail", {
              comic: itemData.item,
              isFavourite: toggleFavourite(itemData.item.id),
              isClicked: false,
            })
          : props.navigation.navigate("Carrello", {
              comic: itemData.item,
            });
      }}
    />
  );
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  console.log("height", height);
  console.log("width", width);

  console.log("props", props.children);
  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.title}>I fumetti della settimana</Text>
      </View>

      <FlatList
        data={COMICS}
        numColumns={2}
        keyExtractor={(item) => item.id as any}
        renderItem={renderItem}
      />
    </View>
  );
};
ComicsShopScreen.navigationOptions = (navData): StackHeaderOptions => {
  return {
    headerTitle: "Comics Categories",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderComicsCustomButton}>
        <Item
          title="Carrello"
          iconName="md-cart"
          onPress={() => {
            navData.navigation.navigate("Carrello");
          }}
        />
      </HeaderButtons>
    ),
  };
};
const sizeH = 560;
const sizeW = 370;
const unit = 50;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    display: "flex",
    paddingVertical: 10,
    paddingHorizontal: 10,
    // width: PixelRatio.roundToNearestPixel(sizeW),
    //height: PixelRatio.roundToNearestPixel(sizeH),
    // borderColor: "grey",
    // borderStyle: "solid",
    // borderWidth: 3,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    display: "flex",
    justifyContent: "center",
    marginVertical: 10,
    textTransform: "uppercase",
  },
});
