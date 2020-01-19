import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';

class SettingOriginal extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'pink'}}>
        <View
          style={{
            height: 40,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            elevation: 3,
          }}>
          <Text style={{fontWeight: 'bold'}}>Settings</Text>
        </View>
        <View style={{flex: 1, backgroundColor: '#fff'}}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Login')}>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: '#eee',
                paddingVertical: 15,
                paddingHorizontal: 15,
              }}>
              <Text>Logout</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const Setting = withNavigation(SettingOriginal);

export default Setting;
