import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
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
  onFavouritePressed = (favourites) => {
    this.props.navigation.navigate('MovieList', {
      searchKeyWord: 'Favourites',
      movies: favourites
    });
  }

  render() {
    return (
      <View style={styles.content}>
        <Text>What Movie should we watch tonight</Text>
        <Image style={styles.image} source={movieImage} />
        <SearchBox onSearchPressed={this.onSearchPressed} />
        <TouchableOpacity 
          style={styles.buttonStyle}
          onPress={() => this.onFavouritePressed(this.props.favourites)} 
        >
          <Text>Favourites</Text>
        </TouchableOpacity>
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

const mapStateToProps = state => ({
  favourites: state.favourites
});

export default connect(mapStateToProps, null)(Home);
