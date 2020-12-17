import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { CategoriesScreen } from '../CategoriesScreen'
import { CategoryMealsScreen } from '../CategoryMealsScreen'
import { FavouritesMeals } from '../FavouritesMeals'
import { FilterMealsScreen } from '../FilterMealsScreen'
import { MealsDetailScreen } from '../MealsDetailScreen'
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'

const MealsNavigatorScreen = createStackNavigator({
    Categories: { screen: CategoriesScreen as any, navigationOptions: { headerTitle: "Category Meals" } },
    // MealDetail: FilterMealsScreen,
    MealDetail: { screen: MealsDetailScreen as any },
    CategoryMeals: CategoryMealsScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: 'yellow'
        }
    }
});
const FavouritesMealsNavigator = createStackNavigator({
    Favorites: { screen: FavouritesMeals },
    MealDetail: { screen: MealsDetailScreen as any },

}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: 'yellow'
        }
    }
});
const FiltersNavigator = createStackNavigator({
    Filters: { screen: FilterMealsScreen }


}, {
    navigationOptions: {
        drawerLabel: "Filtriz"
    },
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: 'yellow'
        },
        headerTitle: "Meals Filtered"
    }
});
const tabScreenConfig = {
    Meals: {
        screen: MealsNavigatorScreen, navigationOptions: {
            tabBarIcon: (tabInfo: any) => {
                // return <Ionicons name= "ios-restaurant" size = { 24} color = { tabInfo.tintColor } > </Ionicons>
            },
            tabBarLabel: "Meals!",
            tabBarColor: "red",
            barStyle: {
                backgroundColor: "yellow"
            }
        }
    },
    Favorites: {
        screen: FavouritesMealsNavigator, navigationOptions: {
            tabBarIcon: (tabInfo: any) => {
                // return <Ionicons name= "ios-restaurant" size = { 24} color = { tabInfo.tintColor } > </Ionicons>
            },
            tabBarLabel: "Favorites!",
            tabBarColor: "green",

        }
    }
};
const y = "materialtab";
const MealsTabNavigatorScreen =
    y === "materialtab" ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: "white",
        shifting: true
    }) : createBottomTabNavigator(
        tabScreenConfig, {
        tabBarOptions: {
            activeTintColor: "red"
        }
    }
    )

const MainNavigator = createDrawerNavigator(
    {
        MealsFavourites: MealsTabNavigatorScreen,
        Filters: FiltersNavigator
    }, {
    contentOptions: {
        activeTintColor: "purple"
    }
}
)
export const MealsNavigator = createAppContainer(MainNavigator)