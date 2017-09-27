import React from 'react';
import { View, FlatList } from 'react-native';
import MovieListItem from './MovieListItem';
import movieData from '../resources/movies.json';

class MovieList extends React.Component {
  state = {
    movies: movieData.results
  }

  componentWillReceiveProps(nextProps) {
    const searchKeyWord = nextProps.searchKeyWord;
    if (searchKeyWord !== '') {
      const filteredMovies = movieData.results.filter(
        (movie) => this.movieContainsKeyword(movie, searchKeyWord)
      );
      this.setState({ movies: filteredMovies });
    } else {
      this.setState({ movies: movieData.results });
    }
  }

  movieContainsKeyword = (movie, searchKeyWord) => {
    const movieTitle = movie.title.toLowerCase();
    const keyword = searchKeyWord.toLowerCase();
    return movieTitle.includes(keyword); 
  }
  
  render() {
    return (
      <View style={styles.listContainer}>
        <FlatList 
          data={this.state.movies}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MovieListItem movie={item} />}
        />
      </View> 
    );
  }
}

const styles = {
  listContainer: {
    flex: 1,
    width: '100%',
    paddingTop: 15
  }
};

export default MovieList;
