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
import { Comic } from "../../../components_Comics/Comic";
import { HeaderComicsCustomButton } from "../../../components_Comics/HeaderCustomButton";
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
export const ComicsShopScreen: NavigationStackScreenComponent = ({
  ...props
}) => {
  const renderItem = (itemData: any): any => (
    <View style={styles.item}>
      <Comic
        comic={itemData.item}
        onPress={(type) => {
          type !== "buy"
            ? props.navigation.navigate("ComicsDetail", {
                comic: itemData.item,
              })
            : props.navigation.navigate("Carrello", {
                comic: itemData.item,
              });
        }}
      />
    </View>
  );
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  console.log("height", height);
  console.log("width", width);

  console.log("props", props.children);
  return (
    <View style={{ flex: 1, paddingTop: 20 }}>
      {/* <SafeAreaView> */}
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
        keyExtractor={(item, index) => item.id as any}
        renderItem={renderItem}
        contentContainerStyle={styles.container}
      />
      {/* </SafeAreaView> */}
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
const sizeH = 60;
const sizeW = 170;
const styles = StyleSheet.create({
  container: {
    // margin: 10,
    //marginTop: 60,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    paddingVertical: 10,
    paddingHorizontal: 10,
    // backgroundColor: "red",
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    width: "50%",
    height: "50%",
    marginBottom: "20%",
    // PixelRatio.roundToNearestPixel(sizeW),
    // height: PixelRatio.roundToNearestPixel(sizeH),
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    display: "flex",
    justifyContent: "center",
    marginVertical: 10,
    textTransform: "uppercase",
  },
  // titlemain: {
  //   marginBottom: 80,
  // },
});
