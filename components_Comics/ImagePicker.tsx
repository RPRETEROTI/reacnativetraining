import React from "react";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { Alert, Button } from "react-native";

export const ImagePickerFeature: React.FC<any> = (props) => {
  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(
      Permissions.CAMERA_ROLL,
      Permissions.CAMERA
    );
    if (result.status !== "granted") {
      Alert.alert(
        "Insufficient permissions!",
        "You need to grant camera permissions to use this app.",
        [{ text: "Okay" }]
      );
      return false;
    }
    return true;
  };
  const takeImageHandler = async () => {
    const permissions = await verifyPermissions();
    ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log("image", image);
  };
  return <Button title="imagePick" onPress={() => takeImageHandler()}></Button>;
};
