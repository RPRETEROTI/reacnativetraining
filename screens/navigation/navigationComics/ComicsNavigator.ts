import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createDrawerNavigator, DrawerContentComponentProps, DrawerItems } from 'react-navigation-drawer'
import { ComicsShopScreen } from '../screenComics/ComicsShop';
import { ComicsDetailScreen } from '../screenComics/ComicsDetail';
import { CarrelloScreen } from '../screenComics/Carrello';
import { MyComicsScreen } from '../screenComics/MyComics';
import { MySellingsScreen } from '../screenComics/MySellings';
import { FavoutitesScreen } from '../screenComics/FavouritesComics';
// import { SafeAreaView } from "react-native";
import { Button, View } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { DrawerContainer, NavigationContainer } from '../DrawerContainer';
import React from 'react';


export const defaultOptions = {
    headerStyle: {
        backgroundColor: "black",
    },
    headerTintColor: "white",
}
export const ComicsUserNavigator = createStackNavigator(
    {
        Home: {
            screen: ComicsShopScreen
        },
        ComicsDetail: {
            screen: ComicsDetailScreen, navigationOptions: {}
        },

        Carrello: {
            screen: CarrelloScreen, navigationOptions: {}
        },
        // FavouritesComics: {
        //     screen: FavoutitesScreen, navigationOptions: {}
        // },

    }, { defaultNavigationOptions: defaultOptions }
);



export const ComicsAdminSellingNavigator = createStackNavigator(
    {
        Fatturato: {
            screen: MySellingsScreen, navigationOptions: {}
        },
    }, { defaultNavigationOptions: defaultOptions }
);
export const EditComicsNavigator = createStackNavigator(
    {
        Home: {
            screen: ComicsShopScreen
        },
        EditComicsDetail: {
            screen: ComicsDetailScreen, navigationOptions: {}
        },
    }, { defaultNavigationOptions: defaultOptions }
);

export const ComicsBoughtUserNavigator = createStackNavigator(
    {
        AcquistiClient: {
            screen: MyComicsScreen, navigationOptions: {}
        }
    }, { defaultNavigationOptions: defaultOptions }
);
export const FavouritesNavigator = createStackNavigator(
    {
        FavouritesComics: {
            screen: FavoutitesScreen, navigationOptions: {}
        },
    }, { defaultNavigationOptions: defaultOptions }
);

export const CarrelloNavigator = createStackNavigator(
    {
        Carrello: {
            screen: CarrelloScreen, navigationOptions: {}
        },
    }, { defaultNavigationOptions: defaultOptions }
);


export const sideNavigatorAdmin = createDrawerNavigator({
    ViewSold: ComicsAdminSellingNavigator,
    EditProduct: EditComicsNavigator
})
export const sideNavigatorUser = createDrawerNavigator({
    Home: ComicsUserNavigator,
    Favourites: FavouritesNavigator,
    Acquisti: ComicsBoughtUserNavigator,
    Carrello: CarrelloNavigator
},
    {
        contentComponent: DrawerContainer
    }
)




const isAdmin = false
const ComicsNavigator = isAdmin ? sideNavigatorAdmin : sideNavigatorUser

export const ComicsMainNavigator = createAppContainer(ComicsNavigator)