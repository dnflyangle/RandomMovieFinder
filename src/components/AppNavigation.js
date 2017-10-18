import { StackNavigator } from 'react-navigation';
import Home from './Home';
import MovieList from './MovieList';
import SearchMovieList from './SearchMovieList';
import MovieCell from './MovieCell';

const AppNavigation = StackNavigator({
  Home: { screen: Home },
  MovieList: { screen: MovieList },
  SearchMovieList: { screen: SearchMovieList },
  MovieCell: { screen: MovieCell }
});

export default AppNavigation;
