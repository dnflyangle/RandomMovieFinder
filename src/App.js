import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';
import movieImage from './resources/movieBoardImg.png';
import Header from './components/Header';
import MovieList from './components/MovieList';
import SearchBox from './components/SearchBox';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.onSearchPressed = this.onSearchPressed.bind(this);
  }

  state = {
    searchKeyWord: ''
  }

  onSearchPressed = (searchKeyWord) => {
    this.setState({ searchKeyWord });
  }

  render() {
    return (
      <View style={styles.home}>
        <Header>Random Movie Finder</Header>
        <View style={styles.content}>
          <Text>What Movie should we watch tonight</Text>
          <Image style={styles.image} source={movieImage} />
          <SearchBox onSearchPressed={this.onSearchPressed} />
          <MovieList searchKeyWord={this.state.searchKeyWord} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  home: { flex: 1 }, 
  content: { 
    flex: 1,
    paddingTop: 15, 
    alignItems: 'center'
  },
  image: { 
    width: '30%', 
    height: '30%', 
    resizeMode: 'contain' }
});

export default App;
