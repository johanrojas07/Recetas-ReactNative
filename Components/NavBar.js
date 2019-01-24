import React from "react";

import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import styles from "./Styles/NavBarStyles";
import { withNavigation } from "react-navigation";


class NavBar extends React.Component {

  constructor() {
    return super();
  }
  
  goBack = () => {
    const { navigation } = this.props;
    navigation.goBack();
  }

  pressFavorite = () => {
    const { onPressFavorite } = this.props;
    if (typeof onPressFavorite === "function") {
      onPressFavorite();
    }
  }
  backButton = () => {
    const { leftButton } = this.props;
    if (leftButton) {
      return (
        <TouchableOpacity onPress={this.goBack}>
          <Ionicons name="md-return-left" styles={styles.favIco} />
        </TouchableOpacity>
      );
    }
  };

  rightButton = () => {
    const { rightButton, favorite } = this.props;
    if (rightButton) {
      if (favorite) {
        return (
          <TouchableWithoutFeedback onPress={this.pressFavorite}>
            <Ionicons name="md-heart" size={32} style={[styles.barButtonIco, styles.favorite]} />
          </TouchableWithoutFeedback>
        );
      } else {
        return (
          <TouchableWithoutFeedback onPress={this.pressFavorite}>
            <Ionicons name="md-heart" size={32} style={[styles.barButtonIco]} />
          </TouchableWithoutFeedback>
        );
      }
    }
  };
  render() {
    const { title } = this.props;
    console.log("title", title);
    return (
      <View {...this.props} style={styles.navBar}>
        <View style={styles.leftContainer}>{this.backButton()}</View>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.rightContainer}>{this.rightButton()}</View>
      </View>
    );
  }
}

export default withNavigation(NavBar);
