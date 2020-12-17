import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

export const HeaderComicsCustomButton: React.FC<HeaderButton> = (props) => {
  return (
    <HeaderButton
      {...props}
      title="HeaderButton"
      iconSize={23}
      IconComponent={Ionicons}
      color="white"
    />
  );
};
