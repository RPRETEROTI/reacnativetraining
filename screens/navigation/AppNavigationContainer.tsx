import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect, useRef } from "react";
import {
  NavigationActions,
  NavigationContainerComponent,
} from "react-navigation";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  AdminSideNavigator,
  AuthenticationNavigator,
  UserSideNavigator,
} from "./navigationComics/ComicsNavigator";
import { FirstScreen } from "./screenComics/FirstScreen";

// export const NavigationContainer: React.FC<any> = () => {
//   return <ComicsMainNavigator />;
// };
// export const NavigationContainer: React.FC<any> = () => {
//   const navRef = useRef() as any;
//   const isAuth = useSelector((state: RootState) => !!state.auth.token);
//   const current = navRef.current as any ;
//   useEffect(() => {
//     if (!isAuth && current != undefined) {
//       current.dispatch(NavigationActions.navigate({ routeName: "Auth" }));
//       console.log("refresh!!");
//     }
//   }, [isAuth]);
//   return <ComicsMainNavigator ref={navRef} />;
// };
export const AppNavigationContainer: React.FC<any> = () => {
  // const navRef = React.useRef<NavigationContainerComponent>(null);
  const isAuth = useSelector((state: RootState) => !!state.auth.token);
  const isStartState = useSelector((state: RootState) => state.auth.startState);

  const isAdmin = useSelector(
    (state: RootState) => state.auth.email === "adminmail@libero.it"
  );
  // useEffect(() => {
  //   if (!isAuth) {
  //     navRef.current?.dispatch(
  //       NavigationActions.navigate({ routeName: "Auth" })
  //     );
  //     console.log("refresh!!");
  //   }
  // }, [isAuth]);
  return (
    <NavigationContainer>
      {isAuth && (isAdmin ? <AdminSideNavigator /> : <UserSideNavigator />)}
      {!isAuth && isStartState && <AuthenticationNavigator />}
      {!isAuth && !isStartState && <FirstScreen />}

      {/* {isAuth && isAdmin && <UserSideNavigator />} */}
    </NavigationContainer>
  );
};
