import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const styles = StyleSheet.create({
  title: {height: 40, padding: 20, borderBottomWidth: 1, borderColor: '#eee'},
  texttitle: {fontSize: 14, fontWeight: 'bold'},
  wrapcontent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 20,
    marginBottom: 0,
    marginTop: 5,
  },
  card: {
    height: 120,
    width: 120,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    borderRadius: 0,
    elevation: 2,
  },
  wrapimg: {width: 50, height: 50, marginBottom: 10},
  img: {width: 50, height: 50},
  awraptitle:{alignItems: 'center', justifyContent: 'center'},
atitle:{fontWeight: 'bold', fontSize: 12, marginTop: 5},
});

export default class Categories extends Component {
  render() {
    return (
      <>
        <View style={styles.title}>
          <Text style={styles.texttitle}>Categories</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.wrapcontent}>
            <View style={styles.card}>
              <TouchableOpacity>
                <View style={styles.wrapimg}>
                  <Image
                    source={require('../assets/images/icon/coffee.png')}
                    style={styles.img}
                  />
                </View>
                <View style={styles.awraptitle}>
                  <Text
                    style={styles.atitle}>
                    Coffee
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                height: 120,
                width: 120,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 5,
                borderRadius: 0,
                elevation: 2,
              }}>
              <TouchableOpacity>
                <View style={{width: 50, height: 50, marginBottom: 10}}>
                  <Image
                    source={require('../assets/images/icon/tea.png')}
                    style={{width: 50, height: 50}}
                  />
                </View>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Text
                    style={{fontWeight: 'bold', fontSize: 12, marginTop: 5}}>
                    Tea
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                height: 120,
                width: 120,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 5,
                borderRadius: 0,
                elevation: 2,
              }}>
              <TouchableOpacity>
                <View style={{width: 50, height: 50, marginBottom: 10}}>
                  <Image
                    source={require('../assets/images/icon/pizza.png')}
                    style={{width: 50, height: 50}}
                  />
                </View>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Text
                    style={{fontWeight: 'bold', fontSize: 12, marginTop: 5}}>
                    Pizza
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                height: 120,
                width: 120,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 5,
                borderRadius: 0,
                elevation: 2,
              }}>
              <TouchableOpacity>
                <View style={{width: 50, height: 50, marginBottom: 10}}>
                  <Image
                    source={require('../assets/images/icon/chicken.png')}
                    style={{width: 50, height: 50}}
                  />
                </View>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Text
                    style={{fontWeight: 'bold', fontSize: 12, marginTop: 5}}>
                    Chicken
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </>
    );
  }
}
