import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import styles from "./Styles/TabBarStyles";

class TabBar extends React.Component {

    renderTab = ({route, icon}) => {
        const {selected} = this.props;
        return(
            <TouchableOpacity style={styles.tab}>
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

export default TabBar;