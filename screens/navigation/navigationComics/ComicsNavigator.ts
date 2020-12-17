import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { ComicsShopScreen } from '../screenComics/ComicsShop';
import { ComicsDetailScreen } from '../screenComics/ComicsDetail';
import { CarrelloScreen } from '../screenComics/Carrello';
import { MyComicsScreen } from '../screenComics/MyComics';
import { MySellingsScreen } from '../screenComics/MySellings';
import { FavoutitesScreen } from '../screenComics/FavouritesComics';


export const defaultOptions = {
    headerStyle: {
        backgroundColor: "black",
    },
    headerTintColor: "white",
}
export const ComicsNavigator = createStackNavigator(
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
        FavouritesComics: {
            screen: FavoutitesScreen, navigationOptions: {}
        },
        // AcquistiClient: {
        //     screen: MyComicsScreen, navigationOptions: {}
        // },
        // Fatturato: {
        //     screen: MySellingsScreen, navigationOptions: {}
        // },
    }, { defaultNavigationOptions: defaultOptions }
);

export const ComicsMainNavigator = createAppContainer(ComicsNavigator)

// export const ComicsSellingNavigator = createStackNavigator(
//     {
//         Fatturato: {
//             screen: MySellingsScreen, navigationOptions: {}
//         },
//     }
// );

// export const ComicsUserNavigator = createStackNavigator(
//     {

//         Carrello: {
//             screen: CarrelloScreen, navigationOptions: {}
//         },
//         FavouritesComics: {
//             screen: FavoutitesScreen, navigationOptions: {}
//         },
//         AcquistiClient: {
//             screen: MyComicsScreen, navigationOptions: {}
//         }
//     }
// );
// export const sideNavigator = createDrawerNavigator({

// })