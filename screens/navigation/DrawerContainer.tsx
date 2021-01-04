import React from "react";
import { Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerItems,
} from "react-navigation-drawer";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/actions/auth";
import { RootState } from "../../store/store";
import { DrawerItemList } from "@react-navigation/drawer";

export const DrawerContainer: React.FC<any> = ({ ...props }) => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state: RootState) => !!state.auth.token);
  console.log("isauthout", isAuth);
  return (
    <SafeAreaView style={{ paddingTop: 10, flex: 1 }}>
      <DrawerItemList {...props} />
      <Button title="Logout" color="red" onPress={() => dispatch(logout())} />
    </SafeAreaView>
  );
};
