import { StackNavigator } from 'react-navigation';
import Home from './components/Home';
import MovieList from './components/MovieList';
import MovieCell from './components/MovieCell';

const App = StackNavigator({
  Home: { screen: Home },
  MovieList: { screen: MovieList },
  MovieCell: { screen: MovieCell },
});

export default App;
