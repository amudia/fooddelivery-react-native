import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
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
    marginBottom: 20,
    paddingLeft: 10,
    borderColor: '#eee',
    paddingBottom: 20,
    borderBottomWidth: 1,
  },
  card: {paddingHorizontal: 3},
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
  },
  textwrap: {
    borderLeftWidth: 1,
    borderColor: '#eee',
    paddingLeft: 20,
    paddingRight: 100,
  },
  atextwrap: {
    marginBottom: 5,
    marginTop: 0,
  },
  textname: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#2196f3',
  },
  textrestaurant: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 12,
  },
  textprice: {color: 'blue', fontSize: 12},
  wrapaddcart: {marginTop: 40, paddingLeft: 90},
  wraptextcart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgicon: {height: 25, width: 25},
});

class RestaurantOriginal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <View style={styles.wrapallitem}>
          <Text style={styles.textallitems}>More restaurants</Text>
          <View style={styles.bordertext} />
        </View>
        <View style={styles.card}>
          {this.props.data &&
            this.props.data.map((v, i) => (
              <View key={i} style={styles.carditem}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Menu')}>
                  <View style={styles.imgwrap}>
                    <Image
                      source={{uri: `asset:/images/${v.logo}`}}
                      style={styles.img}
                    />
                  </View>
                </TouchableOpacity>
                <View style={styles.textwrap}>
                  <View style={styles.atextwrap}>
                    <Text style={styles.textname}>{v.name_rest}</Text>
                  </View>
                </View>
              </View>
            ))}
        </View>
      </>
    );
  }
}

const Restaurant = withNavigation(RestaurantOriginal);

export default Restaurant;
