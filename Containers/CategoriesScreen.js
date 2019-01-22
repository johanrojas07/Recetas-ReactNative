

import React from "react";
import { View, FlatList } from "react-native";
import CategoryRow from "../Components/CategoryRow";

import styles from "./Styles/CategoriesScreenStyles";
import NavBar from "../Components/NavBar";

const categoriesData = [
  {
    id: "1",
    name: "Primero",
  },
  {
    id: "2",
    name: "segundo",
  },
  {
    id: "3",
    name: "tercero",
  },
] 
export default class CategoriesScreen extends React.Component {

  static navigationOptions = {
      title: "Category"
  };
  constructor(props) {
    super(props);
  }
  
  keyExtractor = (item) => item.id;

  renderRow = ({ item }) => {
    return <CategoryRow data={item}></CategoryRow>
  };

  renderList = () => {
      return (
          <FlatList
          contentContainerStyle={styles.listContent}
          keyExtractor = {this.keyExtractor}
          data = {categoriesData}
          renderItem={this.renderRow}
          ></FlatList>
      )
  }

  render() {
    console.log("render--");
    return (
      <View style={[styles.mainScreen]}>
        <NavBar leftButton={false} title="Categories"/>
        <View style={styles.container}>{this.renderList()}</View>
      </View>
    );
  }
}
