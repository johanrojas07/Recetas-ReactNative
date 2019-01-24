/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { View, FlatList } from "react-native";
import NavBar from "../Components/NavBar";
import RecipeRow from "../Components/RecipeRow";
import styles from "./Styles/GenericScreenStyles";
import TabBar from "../Components/TabBar";
const dataList = [
    {
        photo: "https://facebook.github.io/react-native/img/header_logo.png",
        name: "Hola",
        categoryName: "Pescado",
        duration: 16,
        complexity: "Medio",
        people: 80,
        id: "1"
    },
    {
        photo: "https://facebook.github.io/react-native/img/header_logo.png",
        name: "----1",
        categoryName: "Pescad213o",
        duration: 16,
        complexity: "Med21312io",
        people: 80,
        id: "2"
    },
    {
        photo: "https://facebook.github.io/react-native/img/header_logo.png",
        name: "----22",
        categoryName: "Pescado3",
        duration: 16,
        complexity: "Medio2",
        people: 80,
        id: "3"
    }
] 
export default class ExploreScreen extends React.Component {

    static navigationOptions = {
        title: "Explore"
    };
  constructor(props) {
    super(props);
  }

  keyExtractor = (item) => item.id;

  renderList = () => {
      return (
          <FlatList
          keyExtractor = {this.keyExtractor}
          data = {dataList}
          renderItem={({item}) => <RecipeRow data={item}></RecipeRow>}
          ></FlatList>
      )
  }

  render() {
    console.log("render--");
    return (
      <View style={[styles.mainScreen]}>
        <NavBar leftButton={false} title="Explore" rightButton={false}/>
        <View style={styles.container}>{this.renderList()}</View>
        <TabBar selected="explore"></TabBar>
      </View>
    );
  }
}
