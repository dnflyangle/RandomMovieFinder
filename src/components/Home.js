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
import { callMovieApi } from '../redux/movies';

class Home extends Component {
  static navigationOptions = {
    title: 'Random Movie Finder'
  }

  constructor(props) {
    super(props);
    this.onSearchPressed = this.onSearchPressed.bind(this);
  }

  onSearchPressed = (searchKeyWord) => {
    this.props.dispatchCallMovieApi(searchKeyWord);

    this.props.navigation.navigate('SearchMovieList', {
      searchKeyWord
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
  favourites: state.favourites,
});

const mapDispatchToProps = dispatch => ({
  dispatchCallMovieApi: keyword => dispatch(callMovieApi(keyword)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
