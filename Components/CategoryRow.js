import React from "react";
import { View, Image, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import styles from "./Styles/CategoryRowStyles";

class CategoryRow extends React.Component {

    render(){
        const { data } = this.props;
        return(
            <View style={styles.categoryRow}>
                <Text style={styles.categoryText}>{data.name}</Text>
            </View>
        )
    }
}


export default CategoryRow;