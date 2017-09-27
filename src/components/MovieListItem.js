import React from 'react';
import { View, Text, Image } from 'react-native';

const MovieListItem = ({ movie }) => (
  <View style={styles.itemContainer}>
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={{ uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}` }} />
    </View>
    <View style={styles.infoContainer}>
      <Text>{ movie.title }</Text>
      <Text>{ movie.vote_average }</Text>
    </View>
  </View>
);

const styles = {
  itemContainer: {
    flexDirection: 'row',
    flex: 1,
    paddingTop: 5
  },

  infoContainer: {
    flexDirection: 'column',
  },

  image: { 
    width: 50, 
    height: 50, 
    resizeMode: 'contain' }

};

export default MovieListItem;
