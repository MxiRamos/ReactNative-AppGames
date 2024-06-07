import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "./HomeScreen";
import Search from "./Search";

function Friends(){
    return (
        <View style={styles.container}>
            <Button title="Boton1" style={styles.button}/>
            <Button title="Boton2" style={styles.button}/>
            <Button title="Boton3" style={styles.button}/>
            <Button title="Boton4" style={styles.button}/>
            <Button title="Boton5" style={styles.button}/>
            <Button title="Boton6" style={styles.button}/>
        </View>
    )
}

function Groups(){
    return(
        <View style={styles.container}>
            <Button title="BotonA" color='red'/>
            <Button title="BotonB" color='red'/>
            <Button title="BotonC" color='red'/>
            <Button title="BotonD" color='red'/>
            <Button title="BotonE" color='red'/>
        </View>
    )
}

function Chat(){
    return(
        <View style={styles.container}>
            <Button title="BotonZ" color='green'/>
            <Button title="BotonX" color='green'/>
            <Button title="BotonC" color='green'/>
            <Button title="BotonV" color='green'/>
            <Button title="BotonB" color='green'/>
        </View>
    )
}

function TabTopNavigator(){
    const TabTop = createMaterialTopTabNavigator()

    return(
        <TabTop.Navigator>
            <TabTop.Screen name="AMIGOS" component={Friends}/>
            <TabTop.Screen name="GRUPOS" component={Groups}/>
            <TabTop.Screen name="CHATS" component={Chat}/>
        </TabTop.Navigator>
    )
    
}

export default function RedesSociales(){
    return(
        <TabTopNavigator/>
    )
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttons:{
        flexDirection: 'row',
    },
    button: {
        color: 'red'
    },
    text: {
        color: 'white'
    }
})