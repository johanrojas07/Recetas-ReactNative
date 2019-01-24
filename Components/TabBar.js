import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { withNavigation } from "react-navigation";
import styles from "./Styles/TabBarStyles";

class TabBar extends React.Component {

    navigate = route => {
        const { navigation } = this.props;
        switch(route) {
            case "explore":
                navigation.navigate({
                    routeName: "Explore"
                });
                break;
            case "categories": 
                navigation.navigate({
                    routeName: "Categories"
                });
                break;
            case "favorites":
                navigation.navigate({
                    routeName: "Favorites"
                });
                break;
        } 
    }
    renderTab = ({route, icon}) => {
        const {selected} = this.props;
        return(
            <TouchableOpacity style={styles.tab} onPress={() => this.navigate(route)}>
                <Ionicons name={icon} style={
                    [
                        styles.tabIcon,
                        selected === route ? styles.selectedIcon : null
                    ]
                }></Ionicons> 
                {selected === route && <View style={styles.tabLine}></View>}
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderTab({route: "explore", icon: "md-home"})}
                {this.renderTab({route: "categories", icon: "md-restaurant"})}
                {this.renderTab({route: "favorites", icon: "md-paw"})}
            </View>
        )
    }
}

export default withNavigation(TabBar);