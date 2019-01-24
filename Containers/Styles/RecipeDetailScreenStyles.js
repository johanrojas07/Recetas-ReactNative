import { StyleSheet } from "react-native";

import { Metrics, AppStyles, Colors, Fonts } from "../../Theme/";


export default StyleSheet.create({
    ...AppStyles.screen,
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "stretch",
        backgroundColor: Colors.mainBackground
    },
    navBar: {
        marginTop: Metrics.statusBarHeight,
        height: Metrics.navBarHeight,
        backgroundColor: Colors.whiteFull,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        ...Fonts.family.recipeNameCard,
        fontWeight: "bold"
    },
    imageContainer: {
        height: 100,
        backgroundColor: "red"
    },
    infoContainer: {
        height: 100,
        backgroundColor: "green"
    },
    ingredientsBox: {
        height: 200,
        backgroundColor: "violet"
    },
    instructionBox: {
        height: 200,
        backgroundColor: "pink"
    }
});
