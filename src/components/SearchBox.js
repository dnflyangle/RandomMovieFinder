import React from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';

class SearchBox extends React.Component {

  state = { inputValue: '' };

  onChangeText = (inputValue) => {
    this.setState({ inputValue });
  };

  render() {
    const { onSearchPressed } = this.props;
    return (
      <View style={styles.searchBoxContainer}>
        <TextInput 
          style={styles.inputBox} 
          onChangeText={this.onChangeText}
          autoCapitalize={'none'} 
          value={this.state.inputValue}
        />
        <TouchableOpacity 
          style={styles.buttonStyle}
          onPress={() => { onSearchPressed(this.state.inputValue); }}
        >
          <Text>Search</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  inputBox: {
    borderColor: '#d6d7da',
    borderWidth: 1,
    borderRadius: 3,
    width: '60%',
    height: 40
  },

  searchBoxContainer: {
    width: '100%',
    alignItems: 'center'
  },

  buttonStyle: {
    borderWidth: 1,
    borderRadius: 3,
    marginTop: 5,
    width: '30%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#000'
  }
};

export default SearchBox;
