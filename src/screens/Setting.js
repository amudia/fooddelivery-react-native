import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Alert} from 'react-native';
import {withNavigation} from 'react-navigation';
import {logout} from '../redux/action/Login';
import {connect} from 'react-redux';
import Axios from 'axios';
import qs from 'qs';
import {APP_URL} from '../config/config';
// import Cookie from 'js-cookie';
// import Jwt from 'jwt-decode';

// const token = Cookie.get('token');

// let decode = '';
// if (token) {
//   decode = Jwt(token);
// }

class SettingOriginal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: null,
      isLoading: false,
      isSuccess: false,
      message: '',
      token: '',
    };
  }
  async handleLogout() {
    const jwt = await this.props.login.data.auth;
    if (jwt !== null) {
      await this.props.dispatch(logout(jwt));
    }
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.login.isLoading !== this.state.isLoading) {
      if (prevProps.login.isLoading === true) {
        this.setState({
          isLoading: true,
        });
        console.log('masih loading');
      } else {
        console.log('sudah fulfill');
        if (this.props.login.isSuccess) {
          console.log('berhasil logout');
          await this.setState({
            isLoading: false,
            isSuccess: true,
            message: 'Logout Success.',
          });
          this.handleRedirect();
        } else {
          console.log('gagal logout');
          await this.setState({
            isLoading: false,
            isSuccess: false,
            message: 'Logout Failed. Try Again.',
          });
          this.handleRedirect();
        }
      }
    }
  }

  async handleRedirect() {
    if (this.state.isSuccess) {
      Alert.alert('Logout Message', this.state.message, [
        {
          text: 'OK',
          onPress: () => this.props.navigation.navigate('Splashscreen'),
        },
      ]);
    } else {
      Alert.alert('Logout Message', this.state.message);
    }
  }

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
          <TouchableOpacity onPress={() => this.handleLogout()}>
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

const mapStateToProps = state => {
  return {
    login: state.login,
  };
};

export default connect(mapStateToProps)(Setting);
