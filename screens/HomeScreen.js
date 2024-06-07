import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View, StyleSheet, ScrollView, Image, Animated, Dimensions, ImageBackground } from "react-native";
import horizontalScroll from "../components/HorizontalScroll";
import { useRef } from "react";
import HorizontalScroll from "../components/HorizontalScroll";
import GamesList from "../components/GameList";
import Header from "../components/Header";
import GamePublications from "../components/GamePublications";
import RecomendedGames from "../components/RecomendedGames";
import PopularGames from "../components/PopularGames";

export default function HomeScreen(){

    const scrollY = useRef(new Animated.Value(0)).current
    
    return (
        <SafeAreaView
            style={styles.container}
        >
            <Animated.ScrollView
                showsVerticalScrollIndicator={false}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY }}}],
                    { useNativeDriver: true }
                )}
            >
                <HorizontalScroll/>

                <Header>Publicaciones oficiales de juegos</Header>
                <GamePublications/>
                <Header>Vuelve a jugar</Header>
                <GamesList/>
                <Header>Recomendaciones</Header>
                <RecomendedGames/>
                <Header>Populares</Header>
                <PopularGames/>

            </Animated.ScrollView>
            
            
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize:25,
    },
    imageContainer: {
        paddingTop: 25,
        paddingBottom: 15,
        paddingLeft: 8,
        paddingRight: 5
    },
    sliderHeader:{
        marginRight: 15,
        shadowColor: 'black',
        shadowOffset: {
            height: 0,
            width: 0,
        }
    },image:{
        height: 300,
        width: 300,
        borderRadius: 4,
        overflow: 'hidden'
    }
  });