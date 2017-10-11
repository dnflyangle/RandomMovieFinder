import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import favorites from '../resources/favorites.png';

class Favourite extends Component {
  render() {
    return (
      <TouchableOpacity>
        <Image source={favorites} />
      </TouchableOpacity>
    )
  }
}

export default Favourite;