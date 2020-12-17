import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  Dimensions,
} from "react-native";
import { Card } from "../components/Card";

export const StartScreen = (props: any) => {
  const [initialWidthButton, setInitialWidthButton] = React.useState(
    Dimensions.get("window").width / 20
  );

  useEffect(() => {
    const updatelayout = () =>
      setInitialWidthButton(Dimensions.get("window").width / 20);
    Dimensions.addEventListener("change", updatelayout);
    return () => Dimensions.removeEventListener("change", updatelayout);
  });
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Text>Start Game</Text>
        <View style={styles.containerCard}>
          <TextInput placeholder="Start" />
          <View style={styles.button}>
            <Button title="+" onPress={() => console.log("ci siamo")}></Button>
          </View>
          <View style={[styles.button, { width: initialWidthButton }]}>
            <Button title="-" onPress={() => console.log("ci siamo")}></Button>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // margin: "30px",
    flex: 1,
    // width: "90%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
  card: {
    backgroundColor: "#eaeaea",
  },
  containerCard: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    display: "flex",
    justifyContent: "space-around",
    padding: 10,
  },
});
