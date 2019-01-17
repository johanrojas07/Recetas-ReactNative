/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { Text, StyleSheet, View } from "react-native";

import NavBar from "../Components/NavBar";

export default class GenericScreen extends React.Component {
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
  
  render() {
    console.log("render");
    const { favorite } = this.state;
    return (
      <View>
        <NavBar
          leftButton={true}
          title="Titulo"
          rightButton={true}
          onPressFavorite={this.pressFavorite}
          favorite={favorite}
        />
      </View>

    );
  }
}
