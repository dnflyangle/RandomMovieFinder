import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

class MovieCell extends Component {
  static navigationOptions = {
    title: 'Movie'
  }

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Text>{navigation.state.params.movie.title}}</Text>
      </View>
    );
  }
}

export default MovieCell;
