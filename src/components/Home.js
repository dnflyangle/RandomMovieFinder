import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';
import movieImage from '../resources/movieBoardImg.png';
import SearchBox from './SearchBox';
import * as FakeMoviesApi from '../FakeMoviesApi';

class Home extends Component {
  static navigationOptions = {
    title: 'Random Movie Finder'
  }

  constructor(props) {
    super(props);
    this.onSearchPressed = this.onSearchPressed.bind(this);
  }

  onSearchPressed = (searchKeyWord) => {
    const movies = FakeMoviesApi.search(searchKeyWord);

    this.props.navigation.navigate('MovieList', {
      searchKeyWord, movies
    });
  }

  render() {
    return (
      <View style={styles.content}>
        <Text>What Movie should we watch tonight</Text>
        <Image style={styles.image} source={movieImage} />
        <SearchBox onSearchPressed={this.onSearchPressed} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
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

export default Home;
