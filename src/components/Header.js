import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TextInput} from 'react-native';

const styles = StyleSheet.create({
  logo: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 35,
    color: '#fff',
  },
  wraplogo: {marginLeft: 30, marginTop: 25, marginBottom: 20},
  search: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 4,
    height: 50,
    paddingLeft: 60,
    paddingRight: 14,
    backgroundColor: '#fff',
  },
  iconsearch: {
    height: 20,
    width: 20,
    position: 'absolute',
    top: 15,
    left: 20,
  },
  wrapsearch: {marginHorizontal: 30},
});

export default class Header extends Component {
  render() {
    return (
      <>
        <View style={styles.wraplogo}>
          <Text style={styles.logo}>HappFood</Text>
        </View>
        <View style={styles.wrapsearch}>
          <TextInput placeholder="Search" style={styles.search} />
          <Image
            style={styles.iconsearch}
            source={require('../assets/images/icon/search.png')}
          />
        </View>
      </>
    );
  }
}
