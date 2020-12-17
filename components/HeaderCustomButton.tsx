import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

export const HeaderCustomButton = (props: any) => {
  return (
    <HeaderButton
      {...props}
      iconSize={23}
      IconComponent={Ionicons}
      color="black"
    />
  );
};
