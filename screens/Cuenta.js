import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Button, Image, ImageBackground, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { Icon } from "../components/Icon";

const List = [
    {
        id: '1',
        title: 'First Item',
        description: 'Description First',
        img: require('../assets/bg3.jpg')
    },
]

function Publicaciones(){
    return(
        <View>
            <Button title="Boton1" color='#2A2A2E'/>
        </View>
    )
}

function TabTopNavigator(){
    const TabTop = createMaterialTopTabNavigator()

    return(
        <TabTop.Navigator>
            <TabTop.Screen name="Publicaciones" component={Publicaciones}/>
            <TabTop.Screen name="Logros" component={Publicaciones}/>
            <TabTop.Screen name="Acerca De" component={Publicaciones}/>
        </TabTop.Navigator>
    )
    
}

export default function Cuenta(){
    return(
        <>
            <Button title="Hola"/>
            {List.map((image, imageIndex) =>{
                return(
                    <ImageBackground source={image.img} key={imageIndex} style={styles.imageBackground} imageStyle={{opacity: 0.4}}> 
                        <View style={styles.user}>
                            <Image source={image.img} style={styles.image}/>
                            <View>
                                <Text style={styles.textUser}>Nombre de usuario</Text>
                                <Text style={styles.textSub}>Aplicacion Xbox</Text>
                            </View>
                        </View>
                        <TouchableHighlight style={styles.textTouchable}>
                            <Text style={{color: 'white'}}>APARECER SIN CONEXION</Text>
                        </TouchableHighlight>
                    </ImageBackground>
                )
            })}
            
            <TabTopNavigator/>
        </>   
    )
}

const styles = StyleSheet.create({
    imageBackground:{
        height: 280,
        width: 'auto',
        overflow: 'hidden',
    },
    image:{
        height:100,
        width:100,
        borderRadius: 60,
    },
    overlay:{
        backgroundColor: 'transparent',
        opacity: 0.6
    },
    user:{
        marginTop: 90,
        flexDirection: 'row',
        alignSelf: 'center'
    },
    textUser: {
        color: 'white',
        fontSize: 20,
        marginLeft: 10
    },
    textSub:{
        color: 'white',
        fontSize: 15,
        marginLeft: 10
    },
    textTouchable:{
        borderRadius: 25,
        backgroundColor: '#2A2A2E',
        width: 350,
        height: 35,
        padding: 5,
        marginTop: 20,
        marginLeft: 10,
        alignItems: 'center'
    }
})