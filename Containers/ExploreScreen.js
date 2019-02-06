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
        id: "1",
        ingredients: "ESTOS SON LOS INGREDIENTE DE HOLAAA ",
        description: `Para agregar una introducción a la encuesta:

        Vaya a la sección Diseño de la encuesta de su encuesta.
        Agregue una Página de introducción en el GENERADOR de encuestas, ubicado en la barra lateral izquierda.
        Haga clic en el texto del diseño para editar el Título de la página y la Descripción de la página.
        Obtenga más información sobre cómo agregar y administrar páginas en una encuesta.
        
        Escribir una introducción
        Comenzar la encuesta con una introducción es una buena idea. Al escribir una introducción, suponga que los encuestados no saben demasiado sobre el tema de la encuesta.
        
        Utilice lenguaje simple y claro para explicar brevemente el tema y la finalidad de la encuesta. La introducción solo debe estar compuesta por tres o cuatro `
    },
    {
        photo: "https://facebook.github.io/react-native/img/header_logo.png",
        name: "----1",
        categoryName: "Pescad213o",
        duration: 16,
        complexity: "Med21312io",
        people: 80,
        id: "2",
        ingredients: "ESTOS SON LOS INGREDIENTE DE Pescad213o ",
        description: "Para iniciar debe selecci21ciar debe selecci213456789iuhygdhiajskopij  ciar debe selecci213456789iuhygdhiajskopij 3456789iuhygdhiajskopijusaa"
    },
    {
        photo: "https://facebook.github.io/react-native/img/header_logo.png",
        name: "----22",
        categoryName: "Pescado3",
        duration: 16,
        complexity: "Medio2",
        people: 80,
        id: "3",
        ingredients: "ESTOS SON LOS INGREDIENTE DE Pescado3 ",
        description: "Para iniciar debe selecci21ciar debe selecci213456789iuh1221321321 hygdhiajskopijusaa hygdhiajskopijusaaasd"
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
