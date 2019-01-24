/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { Text, StyleSheet, View } from "react-native";
import styles from "./Styles/RecipeDetailScreenStyles";
import NavBar from "../Components/NavBar";

export default class RecipeDetailScreen extends React.Component {
  static navigationOptions = {
    title: "Home"
  }
  constructor(props) {
    super(props);
    this.state = {
      example: 5,
      favorite: false
    }
    console.log("constructor")
  }

  componentDidMount() {
    console.log("componentDidMount");
    const example = this.state.example;
    this.setState({
      example: 3
    },() => {
      console.log(this.state.example);
    })
    console.log(this.state.example);
  }

  pressFavorite = () => {
    const { favorite } = this.state;
    this.setState({
      favorite: !favorite
    })
  }

  renderContainer = () => {
    return (
        <View>
            <View style={styles.imageContainer}></View>
            <View style={styles.infoContainer}></View>
            <View style={styles.ingredientsBox}></View>
            <View style={styles.instructionBox}></View>
        
        </View>
    )
  }
  
  render() {
      const { navigation } = this.props;
      const data = navigation.getParam("data", {});
    const { favorite } = this.state;
    return (
      <View style={styles.mainScreen}>
        <NavBar
          leftButton={true}
          title={data.name}
          rightButton={true}
          onPressFavorite={this.pressFavorite}
          favorite={favorite}
        />
        <View style={styles.container}>
            {this.renderContainer()}
        </View>
      </View>
    
    );
  }
}
