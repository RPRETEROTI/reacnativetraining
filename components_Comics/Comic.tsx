import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight,
  // TouchableOpacity,
  PixelRatio,
} from "react-native";
import {
  // TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { ComicType } from "../screens/models/Comics";

interface Comic {
  comic: ComicType;
  onPress: (type: string) => void;
}
export const Comic: React.FC<Comic> = ({ comic, ...props }) => {
  return (
    <View style={styles.start} {...props}>
      <View style={styles.containerImg}>
        <Image style={styles.img} source={{ uri: comic.coverImg }} />
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ display: "flex", justifyContent: "center" }}>
          <Text style={styles.title}>{comic.title}</Text>
        </View>

        <Text style={styles.price}>
          <Text style={styles.name}>Prezzo:</Text> {comic.price}
        </Text>
      </View>
      <View style={styles.containerBtn}>
        <TouchableHighlight
          style={styles.btn}
          onPress={() => props.onPress("buy")}
        >
          <View>
            <Text style={styles.text}>Acquista</Text>
          </View>
        </TouchableHighlight>

        <TouchableOpacity style={styles.btn} onPress={() => props.onPress("")}>
          <Text style={styles.text}>Dettagli</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const padding = 15;
const styles = StyleSheet.create({
  start: {
    //width: 150,
    height: "auto",
    display: "flex",
    flexDirection: "column",
    marginBottom: 10,
    marginTop: 30,
    // borderStyle: "solid",
    // borderWidth: 2,
    // borderColor: "red",
    padding: 10,
  },
  containerImg: {
    display: "flex",
    alignItems: "center",
    margin: 3,
    marginBottom: 1,
    // borderStyle: "solid",
    // borderWidth: 2,
    // borderColor: "yellow",
  },
  img: {
    width: "100%",
    height: "90%",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    fontWeight: "bold",
    padding: PixelRatio.roundToNearestPixel(padding),
    paddingTop: 0,
  },
  price: {
    display: "flex",
    justifyContent: "flex-end",
    backgroundColor: "black",
    color: "white",
    width: "100%",
  },
  name: {
    display: "flex",
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
  containerBtn: {
    display: "flex",
    marginVertical: 12,
    alignItems: "center",
  },
  text: {
    color: "red",
    justifyContent: "center",
    fontWeight: "bold",
  },
});
