import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { IMAGE_PREFIX } from '../FakeMoviesApi';

class MovieListItem extends Component {
  render() {
    const { movie, callback } = this.props;

    return (
      <TouchableHighlight onPress={() => { callback(movie); }}>
        <View style={styles.itemContainer}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: `${IMAGE_PREFIX}${movie.poster_path}` }} />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.movieTitle}>{ movie.title }</Text>
            <Text>{ movie.vote_average }/10</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = {
  itemContainer: {
    flexDirection: 'row',
    flex: 1,
    paddingTop: 5,
    paddingBottom: 5,
    borderBottomColor: '#d6d7da',
    borderBottomWidth: 1
  },

  infoContainer: {
    flexDirection: 'column',
    justifyContent: 'center'
  },

  image: { 
    width: 50, 
    height: 50, 
    resizeMode: 'contain' 
  },

  movieTitle: {
    fontWeight: 'bold'
  }

};

export default MovieListItem;
