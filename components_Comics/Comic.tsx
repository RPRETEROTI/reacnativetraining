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
      <View style={styles.contentcontainer}>
        <View style={{ display: "flex", justifyContent: "center" }}>
          <Text style={styles.title}>{comic.title}</Text>
        </View>
        <View style={styles.price}>
          <Text style={styles.name}>Prezzo: {comic.price}</Text>
        </View>
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
const padding = 10;
const margin = 10;
const styles = StyleSheet.create({
  start: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    marginBottom: 15,
    marginTop: 20,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
  },
  contentcontainer: {
    display: "flex",
    flex: 1,
    //padding: PixelRatio.roundToNearestPixel(padding),
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  containerImg: {
    display: "flex",
    width: "100%",
    height: 250,
    alignItems: "center",
    margin: 3,
    marginBottom: PixelRatio.roundToNearestPixel(margin),
  },
  img: {
    width: "100%",
    height: "100%",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: 18,
    //padding: PixelRatio.roundToNearestPixel(padding),
    paddingTop: 0,
  },
  price: {
    display: "flex",
    //margin: PixelRatio.roundToNearestPixel(padding),
    padding: 10,
    marginVertical: 10,
    backgroundColor: "black",
    color: "white",
    width: 150,
  },
  name: {
    display: "flex",
    color: "white",
  },
  btn: {
    borderRadius: 10,
    backgroundColor: "black",
    justifyContent: "center",
    display: "flex",
    padding: 15,
    paddingHorizontal: 30,
    marginVertical: 3,
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
