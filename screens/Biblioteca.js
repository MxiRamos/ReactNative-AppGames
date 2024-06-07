import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Button, FlatList, Image, StyleSheet, Text, View } from "react-native";

function Prueba(){
    return(
        <View>
            <Text>
                Hola
            </Text>
        </View>
    )
}

function Juegos(){
    const listGames = [
        {
          id: '1',
          title: 'First Item',
          description: 'Description First',
          img: require('../assets/bg3.jpg')
        },
        {
          id: '2',
          title: 'First Item',
          description: 'Description First',
          img: require('../assets/bg3.jpg')
        },
        {
          id: '3',
          title: 'First Item',
          description: 'Description First',
          img: require('../assets/bg3.jpg')
        },
        {
          id: '4',
          title: 'First Item',
          description: 'Description First',
          img: require('../assets/bg3.jpg')
        },
        {
          id: '5',
          title: 'First Item',
          description: 'Description First',
          img: require('../assets/bg3.jpg')
        },
      ]


    return(
        <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>Todos los 10 juegos</Text>
        <FlatList
            data={listGames}
            numColumns={3}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
                <Image
                    source={item.img}
                    style={styles.imageList}
                />
            )}
        />
        </View>
    )
}

function TabTopNavigator(){
    const TabTop = createMaterialTopTabNavigator()

    return(
        <TabTop.Navigator>
            <TabTop.Screen name="Capturas" component={Prueba}/>
            <TabTop.Screen name="Juegos" component={Juegos}/>
            <TabTop.Screen name="Consolas" component={Prueba}/>
        </TabTop.Navigator>
    )
}

export default function Biblioteca(){

    return(
        <TabTopNavigator/>
    )
}

const styles = StyleSheet.create({
    imageList:{
        flexDirection:'row',
        justifyContent: 'center',
        alignContent: 'center',
        height:125,
        width:125,
        margin:5,
        borderRadius:5
    },
    textStyle:{
        color: 'white',
        fontSize: 25,
    },
    viewStyle: {
        margin: 5
    }
})
