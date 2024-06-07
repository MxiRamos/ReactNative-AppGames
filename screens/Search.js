import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Button, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


export default function Search(){

    const Tav = createBottomTabNavigator()

    return(
        <View>
            <TextInput
                placeholder="Buscar amigos, juegos y más"
                placeholderTextColor="white"
                style={styles.input}
            />
            <View style={styles.buttonsFlex}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>Parte superior</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2}>
                <Text style={styles.text}>Contactos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button3}>
                <Text style={styles.text}>Juegos</Text>
            </TouchableOpacity>
            </View>
            
        </View>
    )
}
const styles = StyleSheet.create({
    input:{
        width: '95%',
        fontSize: 15,
        borderWidth: 1,
        borderColor: 'white',
        height: 43,
        color: '#ffffff',
        textAlign: 'center',
        borderRadius: 25,
        padding: 4,
        fontWeight: 'bold',
        margin: 13
      },
    button: {
        alignItems: 'center',
        borderRadius: 25,
        backgroundColor: '#2B2B2C',
        width: 150,
        height: 35,
        padding: 5,
        marginTop: 5,
        marginLeft: 13,
    },
    button2: {
        alignItems: 'center',
        borderRadius: 25,
        backgroundColor: '#2B2B2C',
        width: 100,
        height: 35,
        padding: 5,
        marginTop: 5,
        marginLeft: 10
    },
    button3: {
        alignItems: 'center',
        borderRadius: 25,
        backgroundColor: '#2B2B2C',
        width: 75,
        height: 35,
        padding: 5,
        marginTop: 5,
        marginLeft: 10
    },
    text: {
        fontSize: 16,
        color: 'white'
    },
    buttonsFlex: {
        flexDirection: 'row'
    }
})