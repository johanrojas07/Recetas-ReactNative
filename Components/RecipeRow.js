import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "./Styles/RecipeRowStyles";
import { Ionicons } from '@expo/vector-icons';
import { withNavigation } from "react-navigation";

class RecipeRow extends React.Component {
    onPress = () => {
        const { navigation, data } = this.props;
        navigation.navigate("Details", {data});
    }
    renderImage = () => {
        const {data} = this.props;
        let imageUrl = "http://via.palceholder.com/640.360";
        if (data && data.photo) {
            imageUrl = data.photo;
        }
        return <Image source={{uri: imageUrl}} style={styles.recipeImage}></Image>
    }
    render(){
        const {data} = this.props;
        return(
            <TouchableOpacity onPress={() => this.onPress()}>
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        {this.renderImage()}
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.category}>{data.categoryName}</Text>
                        <Text style={styles.title}>{data.name}</Text>
                        <View style={styles.properties}>
                            <View style={styles.cell}>
                                <Ionicons name="md-pulse" styles={styles.cellIcon}/>
                                <Text style={styles.cellText}>{data.duration} Minutos</Text>
                            </View>
                            <View style={styles.cell}>
                                <Ionicons name="md-swap" styles={styles.cellIcon}/>
                                <Text style={styles.cellText}>{data.complexity}</Text>
                            </View>
                            <View style={styles.cell}>
                                <Ionicons name="md-videocam" styles={styles.cellIcon}/>
                                <Text style={styles.cellText}>{data.people} Personas</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

}

export default withNavigation(RecipeRow);