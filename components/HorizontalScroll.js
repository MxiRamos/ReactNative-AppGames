import React, { useRef } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, ScrollView, Image, ImageBackground, StyleSheet, Text, Dimensions, SafeAreaView, Animated } from "react-native";

const screendWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

const HorizontalScroll = () => {

    const scrollX = useRef(new Animated.Value(0)).current

    const list = [
        {
            id: '1',
            title: 'First Item',
            description: 'Description First',
            img: require('../assets/bg3.jpg')
        },
        {
            id: '2',
            title: 'Second Item',
            description: 'Description Second',
            img: require('../assets/hades.jpg')
        },
        {
            id: '3',
            title: 'Third Item',
            description: 'Description Third',
            img: require('../assets/mountain.jpg')
        }
    ]


    return(
        <Animated.ScrollView
            horizontal
            onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: {x: scrollX }}}],
                { useNativeDriver: true }
            )}
            snapToInterval={350} // ancho de la imagen
            snapToAlignment="start"
            decelerationRate="fast"
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.contentContainer}
        >
            {list.map((image, imageIndex) => {
                        return(
                            <View style={ styles.sliderHeader } key={imageIndex}>
                                <ImageBackground
                                    source={image.img}
                                    style={styles.image}
                                >
                                    <LinearGradient
                                        colors={['transparent', 'rgba(0, 0, 0, 0.6)']}
                                        style={styles.overlay}
                                    >
                                        <Text style={styles.title}>{image.title}</Text>
                                        <Text style={styles.description}>{image.description}</Text>
                                    </LinearGradient>
                                </ImageBackground>
                            </View>
                        )
                    })}
        </Animated.ScrollView>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    contentContainer:{
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 15,
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        justifyContent: 'flex-end',
        paddingBottom: 50,
        paddingHorizontal: 15
    },
    game: {
        marginRight: 15,
        shadowColor: 'black',
        shadowOffset: {
            height: 0,
            width: 0,
        },
        shadowOpacity: 0.6,
        shadowRadius: 5,
    },
    title: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    },
    description:{
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold'
    },
    imageContainer: {
        paddingTop: 25,
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
    },
    image:{
        height: 350,
        width: 350,
        borderRadius: 4,
        overflow: 'hidden'
    }
})

export default HorizontalScroll
