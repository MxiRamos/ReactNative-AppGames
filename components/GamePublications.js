import React from 'react';
import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function GamePublications(/*props*/) {

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

  return (
    <FlatList
      data={listGames} //props.games
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Pressable style={styles.gameContainer}>
          <Image source={ item.img } style={styles.game} />
          <View>
            <Text style={styles.text}>{item.title}</Text>
          </View>
        </Pressable>
      )}
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    marginBottom: 10,
  },
  contentContainer: {
    paddingLeft: 15,
  },
  game: {
    height: 90,
    width: 90,
    borderRadius: 60,
    marginLeft: 15,
    marginRight: 15,
  },
  gameContainer: {
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowOpacity: 0.6,
    shadowRadius: 5,
  },
  text: {
    paddingTop: 5,
    textAlign: 'center',
    color: 'white',
  }
});