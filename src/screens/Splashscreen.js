import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {withNavigation} from 'react-navigation';
import {connect} from 'react-redux';

class SplashscreenOriginal extends Component {
  componentDidMount() {
    setTimeout(() => {
      if (!this.props.login.data.auth) {
        this.props.navigation.navigate('Login');
      } else {
        this.props.navigation.navigate('Home');
      }
    }, 1000);
  }

  render() {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'pink',
          flex: 1,
        }}>
        <Text> SPLASHSCREEN </Text>
      </View>
    );
  }
}

const Splashscreen = withNavigation(SplashscreenOriginal);

const mapStateToProps = state => {
  return {
    login: state.login,
  };
};
export default connect(mapStateToProps)(Splashscreen);
