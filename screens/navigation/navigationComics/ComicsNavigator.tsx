// import { createAppContainer, createSwitchNavigator } from 'react-navigation'
// import { createStackNavigator } from 'react-navigation-stack'
// import { createBottomTabNavigator } from 'react-navigation-tabs'
// import { Ionicons } from "@expo/vector-icons";
// import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
// import { createDrawerNavigator, DrawerContentComponentProps, DrawerItems } from 'react-navigation-drawer'
// import { ComicsShopScreen } from '../screenComics/ComicsShop';
// import { ComicsDetailScreen } from '../screenComics/ComicsDetail';
// import { CarrelloScreen } from '../screenComics/Carrello';
// import { MyComicsScreen } from '../screenComics/MyComics';
// import { MySellingsScreen } from '../screenComics/MySellings';
// import { FavoutitesScreen } from '../screenComics/FavouritesComics';
// // import { SafeAreaView } from "react-native";
// import { Button, View } from 'react-native';
// import SafeAreaView from 'react-native-safe-area-view';
// import { DrawerContainer } from '../DrawerContainer';
import React from "react";
// import { AuthScreen } from '../screenComics/Auth';
// import { FirstScreen } from '../screenComics/FirstScreen';

import { createStackNavigator } from "@react-navigation/stack";
import {
  CarrelloScreen,
  carrelloScreenOptions,
} from "../screenComics/Carrello";
import {
  ComicsDetailScreen as UserViewComic,
  detailComicsScreenOptions,
} from "../screenComics/ComicsDetail-user";
import {
  ComicsDetailScreen,
  detailComicAdminScreenOptions,
} from "../screenComics/ComicsDetail";
import {
  comicShopScreenOptions,
  ComicsShopScreen,
} from "../screenComics/ComicsShop";
import { MySellingsScreen } from "../screenComics/MySellings";
import { MyComicsScreen } from "../screenComics/MyComics";
import { FavoutitesScreen } from "../screenComics/FavouritesComics";
import { AuthScreen, authScreenOptions } from "../screenComics/Auth";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
import { DrawerContainer } from "../DrawerContainer";
export const defaultOptions = {
  headerStyle: {
    backgroundColor: "black",
  },
  headerTintColor: "white",
};
// export const ComicsUserNavigator = createStackNavigator(
//     {
//         Home: {
//             screen: ComicsShopScreen
//         },
//         ComicsDetail: {
//             screen: ComicsDetailScreen, navigationOptions: {}
//         },

//         Carrello: {
//             screen: CarrelloScreen, navigationOptions: {}
//         },

//     }, { defaultNavigationOptions: defaultOptions }
// );

const ComicsUserStack = createStackNavigator();
export const ComicsUserNavigator: React.FC<any> = () => {
  return (
    <ComicsUserStack.Navigator screenOptions={defaultOptions}>
      <ComicsUserStack.Screen
        name="Home"
        component={ComicsShopScreen}
        options={comicShopScreenOptions}
      />
      <ComicsUserStack.Screen
        name="ComicsDetail"
        component={UserViewComic}
        // options={detailComicsScreenOptions}
      />
      <ComicsUserStack.Screen
        name="Carrello"
        component={CarrelloScreen}
        options={carrelloScreenOptions}
      />
    </ComicsUserStack.Navigator>
  );
};

// export const ComicsAdminSellingNavigator = createStackNavigator(
//     {
//         Fatturato: {
//             screen: MySellingsScreen, navigationOptions: {}
//         },
//     }, { defaultNavigationOptions: defaultOptions }
// );
// export const EditComicsNavigator = createStackNavigator(
//     {
//         Home: {
//             screen: ComicsShopScreen
//         },
//         EditComicsDetail: {
//             screen: ComicsDetailScreen, navigationOptions: {}
//         },
//     }, { defaultNavigationOptions: defaultOptions }
// );
const ComicsAdminSellingStack = createStackNavigator();
export const ComicsAdminSellingNavigator: React.FC<any> = () => {
  return (
    <ComicsAdminSellingStack.Navigator screenOptions={defaultOptions}>
      <ComicsAdminSellingStack.Screen
        name="Fatturato"
        component={MySellingsScreen}
      />
    </ComicsAdminSellingStack.Navigator>
  );
};
const EditComicsAdminStack = createStackNavigator();
export const EditComicsAdminNavigator: React.FC<any> = () => {
  return (
    <EditComicsAdminStack.Navigator screenOptions={defaultOptions}>
      <EditComicsAdminStack.Screen name="Home" component={ComicsShopScreen} />
      <EditComicsAdminStack.Screen
        name="EditComicsDetail"
        component={ComicsDetailScreen}
        options={detailComicAdminScreenOptions}
      />
    </EditComicsAdminStack.Navigator>
  );
};

// export const ComicsBoughtUserNavigator = createStackNavigator(
//     {
//         AcquistiClient: {
//             screen: MyComicsScreen, navigationOptions: {}
//         }
//     }, { defaultNavigationOptions: defaultOptions }
// );
const ComicsBoughtUserStack = createStackNavigator();
export const ComicsBoughtUserNavigator: React.FC<any> = () => {
  return (
    <ComicsBoughtUserStack.Navigator screenOptions={defaultOptions}>
      <ComicsBoughtUserStack.Screen
        name="AcquistiClient"
        component={MyComicsScreen}
      />
    </ComicsBoughtUserStack.Navigator>
  );
};
// export const FavouritesNavigator = createStackNavigator(
//     {
//         FavouritesComics: {
//             screen: FavoutitesScreen, navigationOptions: {}
//         },
//     }, { defaultNavigationOptions: defaultOptions }
// );
const FavouritesStack = createStackNavigator();
export const FavouritesNavigator: React.FC<any> = () => {
  return (
    <FavouritesStack.Navigator screenOptions={defaultOptions}>
      <ComicsBoughtUserStack.Screen
        name="FavouritesComics"
        component={FavoutitesScreen}
      />
    </FavouritesStack.Navigator>
  );
};
// export const CarrelloNavigator = createStackNavigator(
//     {
//         Carrello: {
//             screen: CarrelloScreen, navigationOptions: {}
//         },
//     }, { defaultNavigationOptions: defaultOptions }
// );
const CarrelloStack = createStackNavigator();
export const CarrelloNavigator: React.FC<any> = () => {
  return (
    <CarrelloStack.Navigator screenOptions={defaultOptions}>
      <CarrelloStack.Screen name="Carrello" component={CarrelloScreen} />
    </CarrelloStack.Navigator>
  );
};
// export const AuthenticationNavigator = createStackNavigator(
//     {
//         Auth: {
//             screen: AuthScreen, navigationOptions: {}
//         },
//     }, { defaultNavigationOptions: defaultOptions }
// );
const AuthenticationStack = createStackNavigator();
export const AuthenticationNavigator: React.FC<any> = () => {
  return (
    <AuthenticationStack.Navigator screenOptions={defaultOptions}>
      <AuthenticationStack.Screen
        name="Auth"
        component={AuthScreen}
        options={authScreenOptions}
      />
    </AuthenticationStack.Navigator>
  );
};

// export const sideNavigatorAdmin = createDrawerNavigator({
//     ViewSold: ComicsAdminSellingNavigator,
//     EditProduct: EditComicsNavigator
// }, {
//     contentComponent: DrawerContainer
// })

const AdminDrawer = createDrawerNavigator();
export const AdminSideNavigator: React.FC<any> = () => {
  return (
    <AdminDrawer.Navigator
      drawerContent={(props) => {
        return <DrawerContainer {...props} />;
      }}
    >
      <AdminDrawer.Screen name="Sold" component={ComicsAdminSellingNavigator} />
      <AdminDrawer.Screen
        name="EditProduct"
        component={EditComicsAdminNavigator}
      />
    </AdminDrawer.Navigator>
  );
};
// export const sideNavigatorUser = createDrawerNavigator({
//     Home: ComicsUserNavigator,
//     Favourites: FavouritesNavigator,
//     Acquisti: ComicsBoughtUserNavigator,
//     Carrello: CarrelloNavigator
// },
//     {
//         contentComponent: DrawerContainer
//     }
// )
const UserDrawer = createDrawerNavigator();
export const UserSideNavigator: React.FC<any> = () => {
  return (
    <UserDrawer.Navigator
      drawerContent={(props) => {
        return <DrawerContainer {...props} />;
      }}
    >
      <UserDrawer.Screen name="Home" component={ComicsUserNavigator} />
      <UserDrawer.Screen name="Favourites" component={FavouritesNavigator} />
      <UserDrawer.Screen
        name="Acquisti"
        component={ComicsBoughtUserNavigator}
      />
      <UserDrawer.Screen name="Carrello" component={CarrelloNavigator} />
    </UserDrawer.Navigator>
  );
};
// export const mainNavigator = createSwitchNavigator(
//     {
//         Startscreen: FirstScreen,
//         AuthenticationPage: AuthenticationNavigator,
//         UserMenu: sideNavigatorUser,
//         AdminMenu: sideNavigatorAdmin
//     }
// )

// // const isAdmin = false
// // const ComicsNavigator = isAdmin ? sideNavigatorAdmin : sideNavigatorUser

// export const ComicsMainNavigator = createAppContainer(mainNavigator)
