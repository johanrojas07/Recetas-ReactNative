import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";

import GenericScreen from "../Containers/GenericScreen";
import ExploreScreen from "../Containers/ExploreScreen";

const tabNav = createBottomTabNavigator(
    {
        Explore: { screen: ExploreScreen },
        Categories: { screen: GenericScreen },
        Favorites: { screen: GenericScreen }
    },
    {
        headerMode: "none"
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