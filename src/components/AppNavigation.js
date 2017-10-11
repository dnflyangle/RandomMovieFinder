import { StackNavigator } from 'react-navigation';
import Home from './Home';
import MovieList from './MovieList';
import MovieCell from './MovieCell';

const AppNavigation = StackNavigator({
  Home: { screen: Home },
  MovieList: { screen: MovieList },
  MovieCell: { screen: MovieCell }
});

export default AppNavigation;
