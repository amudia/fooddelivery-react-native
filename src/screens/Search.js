import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {withNavigation} from 'react-navigation';

class SearchOriginal extends Component {
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}
const Search = withNavigation(SearchOriginal);

export default Search;
