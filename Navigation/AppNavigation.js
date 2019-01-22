import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";

import GenericScreen from "../Containers/GenericScreen";
import ExploreScreen from "../Containers/ExploreScreen";
import CategoryScreen from "../Containers/CategoriesScreen";

const tabNav = createBottomTabNavigator(
    {
        Explore: { screen: ExploreScreen },
        Categories: { screen: CategoryScreen },
        Favorites: { screen: GenericScreen }
    },
    {
        headerMode: "none",
        defaultNavigationOptions: { tabBarVisible: false }
    }
);

const RootStack = createStackNavigator(
    {
        Home: { screen: tabNav }
    },
    {
        headerMode: "none"
    }
);
const AppNavigator = createAppContainer(RootStack);

export default AppNavigator;