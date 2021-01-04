import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { useDispatch, useSelector } from "react-redux";
import { authenticate, resetStartAppState } from "../../../store/actions/auth";
import { RootState } from "../../../store/store";

export const FirstScreen = (props: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const { navigation } = props;

    const testLogin = async () => {
      const userData = await AsyncStorage.getItem("userData");
      if (!userData) {
        dispatch(resetStartAppState());
        // navigation.navigate("Auth");
        return;
      }
      const newUserData = userData ? JSON.parse(userData) : "";

      const { token, expirationDate, userId } = newUserData;
      // const email = useSelector((state: RootState) => state.auth.email);
      const actualExpDate = new Date(expirationDate);
      console.log("newUserData:", newUserData);
      // if (token) {
      //   if (email === "adminmail@libero.it") {
      //     navigation.navigate("UserMenu");
      //   }
      //   if (email === "adminmail@libero.it") {
      //     navigation.navigate("AdminMenu");
      //   }
      // }

      if (actualExpDate < new Date() || !token || !userId) {
        // navigation.navigate("Auth");
        dispatch(resetStartAppState());
        return;
      }
      const remainingTime = actualExpDate.getTime() - new Date().getTime();
      // navigation.navigate("UserMenu");
      dispatch(authenticate(token, userId, remainingTime));
    };
    testLogin();
  }, [dispatch]);

  return (
    <View style={styles.screen}>
      <ActivityIndicator size="large" color="red" />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
