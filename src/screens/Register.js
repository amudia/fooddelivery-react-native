import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  CheckBox,
  Button,
  TouchableOpacity,
} from 'react-native';
import {TextInput, ScrollView} from 'react-native-gesture-handler';
import {withNavigation} from 'react-navigation';

class RegisterOriginal extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            backgroundColor: '#de4767',
            height: 310,
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
          }}>
          <Text
            style={{
              fontSize: 50,
              fontWeight: 'bold',
              color: '#fff',
              paddingBottom: 100,
            }}>
            HappFood
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#eee',
            height: '60%',
            paddingHorizontal: 20,
          }}>
          <View
            style={{
              flex: 1,
              backgroundColor: '#fff',
              marginTop: -90,
              elevation: 10,
            }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 30,
                marginBottom: 15,
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 25}}>SIGN UP</Text>
            </View>

            <View>
              <View style={{position: 'relative', marginTop: 20}}>
                <View style={{paddingHorizontal: 30}}>
                  <TextInput
                    placeholder="Your Name"
                    style={{
                      borderWidth: 1,
                      borderColor: '#eee',
                      paddingLeft: 30,
                      paddingRight: 20,
                      borderRadius: 50,
                    }}
                  />
                </View>
              </View>
              <View style={{position: 'relative', marginTop: 20}}>
                <View style={{paddingHorizontal: 30}}>
                  <TextInput
                    placeholder="Username"
                    style={{
                      borderWidth: 1,
                      borderColor: '#eee',
                      paddingLeft: 30,
                      paddingRight: 20,
                      borderRadius: 50,
                    }}
                  />
                </View>
              </View>
              <View style={{position: 'relative', marginTop: 15}}>
                <View style={{paddingHorizontal: 30}}>
                  <TextInput
                    placeholder="Password"
                    style={{
                      borderWidth: 1,
                      borderColor: '#eee',
                      paddingLeft: 30,
                      paddingRight: 20,
                      borderRadius: 50,
                    }}
                  />
                </View>
              </View>
            </View>

            <View style={{arginBottom: 5, marginTop: 20, marginHorizontal: 30}}>
              <TouchableOpacity>
                <View
                  style={{
                    backgroundColor: '#de4767',
                    height: 45,
                    borderRadius: 8,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: '#fff',
                      textTransform: 'uppercase',
                      fontSize: 16,
                    }}>
                    REGISTER
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 20,
                flexDirection: 'row',
              }}>
              <Text style={{fontSize: 18, color: '#70696f'}}>
                Already have an account?
              </Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Login')}>
                <Text style={{color: 'red', fontSize: 18, marginLeft: 10}}>
                  Sign In
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const Register = withNavigation(RegisterOriginal);

export default Register;
