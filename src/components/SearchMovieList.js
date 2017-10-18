import React from 'react';
import { View, FlatList, ActivityIndicator, Text } from 'react-native';
import { connect } from 'react-redux';
import MovieListItem from './MovieListItem';

const renderSearchKeyword = (searchKeyword) => {
  if (searchKeyword !== '') {
    return `Searches for '${searchKeyword}'`;
  }
};

class SearchMovieList extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: renderSearchKeyword(navigation.state.params.searchKeyWord)
  });

  movieSelected = (movie) => {
    this.props.navigation.navigate('MovieCell', { movie });
  };

  render() {
    const { isLoading, movies, error } = this.props;

    if (isLoading) {
      return (
        <ActivityIndicator color='red' style={{ flex: 1 }} />
      );
    }

    if (error) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Something went wrong</Text>
        </View>
      );
    }

    return (
      <View style={styles.listContainer}>
        <FlatList
          data={movies}
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

const mapStateToProps = state => ({
  movies: state.movies.movies,
  error: state.movies.error,
  isLoading: state.movies.isLoading
});

export default connect(mapStateToProps)(SearchMovieList);
