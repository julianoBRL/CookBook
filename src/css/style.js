import * as React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        marginBottom: 40,
    },
    scrollView: {
        marginTop: 10,
        marginBottom: 50,
        backgroundColor: "#FFFFFF2F",
    },
    text: {
        fontSize: 42,
    },
    mealContainer:{
        width: "100%",
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        }
    },
    row:{
        flexDirection:"row",
    },
    mealItem: {
        backgroundColor: 'white',
        borderColor: "#0000002D",
        borderWidth:1,
        borderRadius: 5,
        margin: 5,
    },
    image:{
        height: 150,
        width: "50%",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    dethaisContainer: {
        padding: 5,
        width: "50%"
    },
    title: {
        fontWeight: "bold",
        paddingLeft: 10,
        paddingRight: 10,
    },
    subTag:{
        marginTop: 5,
        marginLeft: 1,
        marginRight: 5,
        backgroundColor: 'red',
        borderRadius: 50,
        paddingLeft: 6,
        paddingRight: 6,
        paddingTop: 3,
        paddingBottom: 3,
        justifyContent:'center',
        alignItems:'center'
    },
    rating:{
        width: 10,
        height: 10
    },
    search:{
        backgroundColor: 'white',
        borderColor: "#0000002D",
        borderWidth:1,
        borderRadius: 50,
        margin: 10,
        paddingLeft: 10,
        height: 40,
        flex: 1,
    },
    searchIcon:{
        marginLeft: 10
    },
    searchContainer:{
        flexDirection: 'row',
        justifyContent:'center', 
        alignItems:'center'
    },
    tagContainer:{
        marginLeft: 10,
        marginRight: 5,
        backgroundColor: 'red',
        borderRadius: 50,
        paddingLeft: 6,
        paddingRight: 6,
        paddingTop: 3,
        paddingBottom: 3,
        justifyContent:'center',
        alignItems:'center'
    },
    tagTitle:{
        color: "white",
        fontWeight: "bold",
    },
    thumbTitle:{
        
    },
    thumbnail:{
        height: 300,
    },
    dethaisTitle:{
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 30,
        marginLeft: 10,
        textShadowColor:'#000000',
        textShadowOffset:{width: 1, height: 1},
        textShadowRadius:10,
        
    },
    dethaisContainer:{
        flexDirection: 'row',
        marginTop: 5
    },
    dethaisIngredients:{
        flexDirection: 'row',
        marginLeft: 5
    },
    dethaisInstructions:{
        flexDirection: 'row',
        margin: 5
    },
    dethaislTag:{
        marginTop: 5,
        marginLeft: 1,
        marginRight: 5,
        backgroundColor: 'red',
        borderRadius: 50,
        paddingLeft: 6,
        paddingRight: 6,
        paddingTop: 3,
        paddingBottom: 3,
        justifyContent:'center',
        alignItems:'center'
    },
    detailsTitle:{
        alignSelf: 'center'
    },
    dethaisIngredient:{
        fontSize: 20,
    },
    dethaisInstruction:{
        fontSize: 20,
    },
    spacer:{
        marginTop: 5,
        marginBottom: 5
    }
  });