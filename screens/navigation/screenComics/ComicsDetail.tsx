import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { NavigationStackScreenComponent } from "react-navigation-stack";

export const ComicsDetailScreen: NavigationStackScreenComponent = ({
  ...props
}) => {
  const { navigation } = props;
  const comic = navigation.getParam("comic");
  console.log("x", comic);
  return (
    <View style={styles.start}>
      <View style={styles.content}>
        <Image
          width={100}
          style={styles.img}
          source={{ uri: comic.coverImg }}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.descript}>{comic.description}</Text>
      </View>
      <View style={styles.content}>
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
        //   console.log("ciao");
        // }}
      >
        <View>
          <Text style={styles.text}>Acquista</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

ComicsDetailScreen.navigationOptions = {
  headerTitle: "Comic Detail",
};
const styles = StyleSheet.create({
  start: {
    // margin: "30px",
    flex: 1,
    // width: "90%",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
  },
  content: {
    display: "flex",
    //flex: 1,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "red",
  },
  img: {
    display: "flex",
    width: 500,
    height: 100,
  },
  text: {
    color: "red",
    justifyContent: "center",
    fontWeight: "bold",
  },
  descript: {
    padding: 15,
  },
  btn: {
    borderRadius: 40,
    backgroundColor: "black",
    justifyContent: "center",
    display: "flex",
    padding: 15,
    marginVertical: 3,
    // paddingBottom: 9,
    //width: 50,
  },
  price: {
    fontWeight: "bold",
  },
});
