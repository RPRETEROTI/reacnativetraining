import React, { useEffect, useRef } from "react";
import {
  NavigationActions,
  NavigationContainerComponent,
} from "react-navigation";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { ComicsMainNavigator } from "./navigationComics/ComicsNavigator";

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
export const NavigationContainer: React.FC<any> = () => {
  const navRef = React.useRef<NavigationContainerComponent>(null);
  const isAuth = useSelector((state: RootState) => !!state.auth.token);
  useEffect(() => {
    if (!isAuth) {
      navRef.current?.dispatch(
        NavigationActions.navigate({ routeName: "Auth" })
      );
      console.log("refresh!!");
    }
  }, [isAuth]);
  return <ComicsMainNavigator ref={navRef} />;
};
