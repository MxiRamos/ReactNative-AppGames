import React from 'react';
import { FlatList, Image, Pressable, StyleSheet } from 'react-native';

export default function PopularGames(/*props*/) {

  const listGames = [
    {
      id: '1',
      title: 'First Item',
      description: 'Description First',
      img: require('../assets/mountain.jpg')
    },
    {
      id: '2',
      title: 'First Item',
      description: 'Description First',
      img: require('../assets/mountain.jpg')
    },
    {
      id: '3',
      title: 'First Item',
      description: 'Description First',
      img: require('../assets/mountain.jpg')
    },
    {
      id: '4',
      title: 'First Item',
      description: 'Description First',
      img: require('../assets/mountain.jpg')
    },
    {
      id: '5',
      title: 'First Item',
      description: 'Description First',
      img: require('../assets/mountain.jpg')
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
    height: 120,
    width: 120,
    borderRadius: 6,
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
});