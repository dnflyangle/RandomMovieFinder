import React from 'react';
import { View, FlatList } from 'react-native';
import MovieListItem from './MovieListItem';

const renderSearchKeyword = (searchKeyword) => {
  if (searchKeyword !== '') {
    return `Searches for '${searchKeyword}'`;
  }
};

class MovieList extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: renderSearchKeyword(navigation.state.params.searchKeyWord)
  });

  movieSelected = (movie) => {
    this.props.navigation.navigate('MovieCell', { movie });
  };

  render() {
    return (
      <View style={styles.listContainer}>
        <FlatList
          data={this.props.navigation.state.params.movies}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MovieListItem
            movie={item}
            callback={this.movieSelected}
          />}
        />
      </View>
    );
  }
}

const styles = {
  listContainer: {
    flex: 1,
    width: '100%'
  }
};

export default MovieList;
