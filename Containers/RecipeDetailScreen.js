/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { Text, StyleSheet, View, Image, ScrollView, StatusBar } from "react-native";
import styles from "./Styles/RecipeDetailScreenStyles";
import NavBar from "../Components/NavBar";
import { Ionicons } from '@expo/vector-icons';

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

  renderImage = () => {
    const { navigation } = this.props;
    const data = navigation.getParam("data", {});
    let imageUrl = "http://via.palceholder.com/640.360";
    console.log("datadata", data);
    if (data && data.photo) {
        imageUrl = data.photo;
    }
    return (
      <View style={styles.imageContainer}>
        <Image source={{uri: imageUrl}} style={styles.recipeImage}></Image>
        <View style={styles.darkener}></View>
      </View>
      );
  }

  renderInfo = () => {
    const { navigation } = this.props;
    const data = navigation.getParam("data", {});
    return (
      <View style={styles.container}>
          <View style={styles.recipeImage}>
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
    );
  }

  renderIngredients = () => {
    const { navigation } = this.props;
    const data = navigation.getParam("data", {});

    if (data.ingredients) {
      return (
        <View style={styles.infoBox}>
          <Text style={styles.header}>Ingredientes</Text>
          <Text style={styles.description}>{data.ingredients}</Text>
        </View>
      );
    }
  };

  renderInstructions = () => {
    const { navigation } = this.props;
    const data = navigation.getParam("data", {});

    if (data.description) {
      return (
        <View style={styles.infoBox}>
          <Text style={styles.header}>Preparacion</Text>
          <Text style={styles.description}>{data.description}</Text>
        </View>
      );
    }
  };

  pressFavorite = () => {
    const { favorite } = this.state;
    this.setState({
      favorite: !favorite
    })
  }

  renderContent = () => {
    return (
        <ScrollView>
            {this.renderImage()}
            {this.renderInfo()}
            {this.renderIngredients()}
            {this.renderInstructions()}
        </ScrollView>
    )
  }
  
  render() {
    const { navigation } = this.props;
    const data = navigation.getParam("data", {});
    const { favorite } = this.state;
    return (
      <View style={styles.mainScreen}>
      <StatusBar barStyle={light-content}></StatusBar>
        <NavBar
          leftButton={true}
          transparent={true}
          rightButton={true}
          onPressFavorite={this.pressFavorite}
          favorite={favorite}
        />
        <View style={styles.container}>
            {this.renderContent()}
        </View>
      </View>
    
    );
  }
}
