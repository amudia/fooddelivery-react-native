import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {withNavigation} from 'react-navigation';
import {postLogin} from '../redux/action/Login';
import {connect} from 'react-redux';

const styles = StyleSheet.create({
  wrapperheader: {
    backgroundColor: '#de4767',
    height: 310,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  textheader: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#fff',
    paddingBottom: 100,
  },
  content: {
    backgroundColor: '#eee',
    height: '60%',
    paddingHorizontal: 20,
  },
  maincontent: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: -90,
    elevation: 10,
  },
  title: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 15,
  },
  texttitle: {fontWeight: 'bold', fontSize: 25},
  textusername: {
    borderWidth: 1,
    borderColor: '#eee',
    paddingLeft: 60,
    paddingRight: 20,
    borderRadius: 50,
  },
  iconuser: {
    backgroundColor: '#de4767',
    width: 40,
    height: 40,
    borderRadius: 50,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 36,
    top: 5,
  },
  textpassword: {
    borderWidth: 1,
    borderColor: '#eee',
    paddingLeft: 60,
    paddingRight: 20,
    borderRadius: 50,
  },
  iconpass: {
    backgroundColor: '#de4767',
    width: 40,
    height: 40,
    borderRadius: 50,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 36,
    top: 5,
  },
  wrapforgotpass: {
    flexDirection: 'row',
    marginTop: 20,
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  wraptextinput: {position: 'relative', marginTop: 15, paddingHorizontal: 30},
  loginbutton: {
    backgroundColor: '#de4767',
    height: 45,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logintext: {
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: 16,
  },
  stillconnect: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    flexDirection: 'row',
  },
});

class LoginOriginal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isLoading: false,
      isSuccess: false,
      msg: false,
    };
  }
  async login() {
    const {username, password} = this.state;
    const data = {
      username,
      password,
    };
    await this.props.dispatch(postLogin(data));
    console.log(this.props.login.data.msg);
    if ((await this.props.login.success) === true) {
      this.props.navigation.navigate('Home');
    } else {
      this.setState({
        msg: true,
      });
    }
  }
  render() {
    const {msg} = this.state;
    return (
      <View>
        <View style={styles.wrapperheader}>
          <Text style={styles.textheader}>HappFood</Text>
        </View>

        <View style={styles.content}>
          <View style={styles.maincontent}>
            <View style={styles.title}>
              <Text style={styles.texttitle}>SIGN IN</Text>
            </View>

            <View>
              <View style={styles.wraptextinput}>
                <View>
                  <TextInput
                    placeholder="Username"
                    value={this.state.username}
                    onChange={e =>
                      this.setState({username: e.nativeEvent.text})
                    }
                    style={styles.textusername}
                  />
                </View>
                <View style={styles.iconuser}>
                  <Image
                    source={require('../assets/images/icon/userlog.png')}
                    style={{width: 18, height: 18}}
                  />
                </View>
              </View>
              <View style={styles.wraptextinput}>
                <View>
                  <TextInput
                    placeholder="Password"
                    secureTextEntry
                    value={this.state.password}
                    onChange={e =>
                      this.setState({password: e.nativeEvent.text})
                    }
                    style={styles.textpassword}
                  />
                </View>
                <View style={styles.iconpass}>
                  <Image
                    source={require('../assets/images/icon/lock.png')}
                    style={{width: 18, height: 18}}
                  />
                </View>
              </View>
            </View>

            <View style={styles.wrapforgotpass}>
              <Text style={{flex: 1, fontSize: 14, color: '#70696f'}} />
              <TouchableOpacity>
                <Text style={{flex: 0, fontSize: 14, color: 'red'}}>
                  Forgot Password
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{marginBottom: 5, marginTop: 20, marginHorizontal: 30}}>
              <TouchableOpacity onPress={() => this.login()}>
                <View style={styles.loginbutton}>
                  <Text style={styles.logintext}>Login</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.stillconnect}>
              <Text style={{fontSize: 18, color: '#70696f'}}>
                Still not connected?
              </Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Register')}>
                <Text style={{color: 'red', fontSize: 18, marginLeft: 10}}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const Login = withNavigation(LoginOriginal);

const mapStateToProps = state => {
  return {
    login: state.login,
  };
};

export default connect(mapStateToProps)(Login);
