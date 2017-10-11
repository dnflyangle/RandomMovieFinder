import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import favouritesIcon from '../resources/favorites.png';
import favouritesSelectedIcon from '../resources/favorites_selected.png';
import { addFavourite, removeFavourite } from '../redux/favourites';

class Favourite extends Component {
  onPress(movie, isFavourite, dispatchAddFavourite, dispatchRemoveFavourite) {
    if (isFavourite) {
      dispatchRemoveFavourite(movie);
    } else {
      dispatchAddFavourite(movie);
    }
  }

  getIcon(isFavourite) {
    return isFavourite ? favouritesSelectedIcon : favouritesIcon;
  }

  render() {
    const { movie, isFavourite, dispatchAddFavourite, dispatchRemoveFavourite } = this.props;
    return (
      <TouchableOpacity 
        onPress={() => this.onPress(movie, 
          isFavourite, dispatchAddFavourite, dispatchRemoveFavourite)}
      >
        <Image source={this.getIcon(isFavourite)} />
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  isFavourite: state.favourites.includes(ownProps.movie)
});

const mapDispatchToProps = dispatch => ({
  dispatchAddFavourite: movie => dispatch(addFavourite(movie)),
  dispatchRemoveFavourite: movie => dispatch(removeFavourite(movie))
});

export default connect(mapStateToProps, mapDispatchToProps)(Favourite);
