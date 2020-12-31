import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { ImagePickerFeature } from "../../../components_Comics/ImagePicker";

export const FtresDveScreen: NavigationStackScreenComponent = ({
  ...props
}) => {
  return (
    <View style={styles.start}>
      <Text>Device features"</Text>
      <ImagePickerFeature />
    </View>
  );
};

FtresDveScreen.navigationOptions = {
  headerTitle: "Device features",
};
const styles = StyleSheet.create({
  start: {
    // margin: "30px",
    flex: 1,
    // width: "90%",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
});
