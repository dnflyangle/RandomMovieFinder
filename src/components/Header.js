import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

const Header = (props) => (
    <View style={styles.header}>
        <Text>{props.children}</Text>
    </View>
);

const styles = StyleSheet.create({
    header: { 
      alignItems: 'center', 
      justifyContent: 'center',
      paddingTop: 15, 
      height: 60,
      shadowOffset: { 
        width: 0, height: 2,
      },
      shadowColor: 'black',
      shadowOpacity: 0.2
    }
  });

export default Header;
