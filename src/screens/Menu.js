import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, ScrollView} from 'react-native';
import {withNavigation} from 'react-navigation';

const styles = StyleSheet.create({
  wrapallitem: {
    height: 40,
    padding: 0,
    marginBottom: 20,
  },
  textallitems: {
    marginLeft: 20,
    fontSize: 14,
    fontWeight: 'bold',
  },
  bordertext: {
    height: 2,
    backgroundColor: '#eee',
    marginTop: 4,
    marginBottom: 30,
  },
  carditem: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 0,
    marginBottom: 0,
    paddingLeft: 10,
    borderColor: '#eee',
    paddingBottom: 10,
    paddingTop: 10,
    borderBottomWidth: 1,
  },
  card: {paddingHorizontal: 5, paddingVertical: 5},
  imgwrap: {
    marginRight: 10,
    height: 100,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    height: 100,
    width: 100,
    borderRadius: 5,
    marginRight: 10,
  },
  textwrap: {
    borderLeftWidth: 1,
    borderColor: '#eee',
    paddingLeft: 20,
    paddingRight: 120,
  },
  atextwrap: {
    marginBottom: 5,
    marginTop: 0,
  },
  textname: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#2196f3',
    marginBottom: 10,
  },
  textprice: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 16,
  },
  rating: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 20,
    color: 'orange',
  },
  wrapaddcart: {marginTop: 40, paddingLeft: 90},
  wraptextcart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgicon: {height: 25, width: 25},
});

class MenuOriginal extends Component {
  render() {
    const {goBack} = this.props.navigation;

    return (
      <View style={{backgroundColor: '#fff', flex: 1}}>
        <View
          style={{
            height: 60,
            marginBottom: 0,
            flexDirection: 'row',
            elevation: 5,
            backgroundColor: '#fff',
          }}>
          <View style={{flex: 1, justifyContent: 'center', paddingLeft: 20}}>
            <View
              onStartShouldSetResponder={() => goBack()}
              style={{
                height: 40,
                width: 40,
                backgroundColor: '#de4767',
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',
                elevation: 8,
              }}>
              <Image
                source={require('../assets/images/icon/arrow-left.png')}
                style={{height: 24, width: 24}}
              />
            </View>
          </View>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#000'}}>
              MENU
            </Text>
          </View>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
          />
        </View>
        <ScrollView>
          <View
            style={{
              height: 260,
              backgroundColor: '#fff',
              borderBottomWidth: 2,
              borderColor: '#eee',
              padding: 10,
            }}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <View style={{height: 200, width: 200, marginBottom: 15}}>
                <Image
                  source={require('../assets/images/starbucks.png')}
                  style={{height: 200, width: 200, borderRadius: 10}}
                />
              </View>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                Starbucks-Bogor Rest Area
              </Text>
            </View>
          </View>

          <View style={{backgroundColor: '#fff', flex: 1}}>
            <View style={styles.card}>
              <View style={styles.carditem}>
                <View>
                  <Image
                    source={require('../assets/images/starbucks.jpeg')}
                    style={styles.img}
                  />
                </View>
                <View style={styles.textwrap}>
                  <View style={styles.atextwrap}>
                    <Text style={styles.textname}>
                      Espresso: Starbucks Coffee Company
                    </Text>
                    <Text style={styles.textprice}>10000</Text>
                    <Text style={styles.rating}>*****</Text>
                    <View style={{alignItems: 'flex-end', paddingRight: 20}}>
                      <View
                        onStartShouldSetResponder={() =>
                          this.props.navigation.navigate('Cart')
                        }
                        style={{
                          height: 40,
                          width: 100,
                          backgroundColor: '#2196f3',
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: 10,
                        }}>
                        <Text style={{color: '#fff'}}>Add to cart</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const Menu = withNavigation(MenuOriginal);

export default Menu;
