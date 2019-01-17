import { createStackNavigator, createAppContainer } from "react-navigation";

import GenericScreen from "../Containers/GenericScreen";

const RootStack = createStackNavigator(
    {
        Home: { screen: GenericScreen },
    }
)
const AppNavigator = createAppContainer(RootStack);

export default AppNavigator;