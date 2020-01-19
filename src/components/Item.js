import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapallitem: {
    height: 40,
    padding: 20,
    marginBottom: 20,
  },
  textallitems: {
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
    padding: 10,
    elevation: 3,
    borderRadius: 20,
    marginBottom: 10,
  },
  card: {paddingHorizontal: 10},
  imgwrap: {
    marginRight: 20,
    height: 110,
    width: 110,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingTop: 20,
  },
  img: {
    height: 110,
    width: 110,
    borderRadius: 10,
  },
  textwrap: {
    borderLeftWidth: 1,
    borderColor: '#eee',
    paddingLeft: 20,
  },
  atextwrap: {
    marginBottom: 5,
    marginTop: 10,
    width: 170,
  },
  textname: {
    fontWeight: 'bold',
    fontSize: 12,
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

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  rupiah(angka) {
    var rupiah = '';
    var angkarev = angka
      .toString()
      .split('')
      .reverse()
      .join('');
    for (var i = 0; i < angkarev.length; i++) {
      if (i % 3 === 0) {
        rupiah += angkarev.substr(i, 3) + '.';
      }
    }
    return (
      'Rp.' +
      rupiah
        .split('', rupiah.length - 1)
        .reverse()
        .join('')
    );
  }

  render() {
    return (
      <>
        <View style={styles.wrapallitem}>
          <Text style={styles.textallitems}>All items</Text>
          <View style={styles.bordertext} />
        </View>
        <View style={styles.card}>
          {this.props.data &&
            this.props.data.map((v, i) => (
              <View key={i} style={styles.carditem}>
                <View style={styles.imgwrap}>
                  <Image
                    source={{uri: `asset:/images/${v.image}`}}
                    style={styles.img}
                  />
                </View>
                <View style={styles.textwrap}>
                  <View style={styles.atextwrap}>
                    <Text style={styles.textname}>{v.name}</Text>
                  </View>
                  <View>
                    <Text style={styles.textrestaurant}>{v.restaurant}</Text>
                  </View>
                  <View>
                    <Text style={styles.textprice}>{this.rupiah(v.price)}</Text>
                  </View>
                  <View style={styles.wrapaddcart}>
                    <TouchableOpacity>
                      <View style={styles.wraptextcart}>
                        <Text>Add to cart</Text>
                        <Image
                          source={require('../assets/images/icon/plus.png')}
                          style={styles.imgicon}
                        />
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
        </View>
      </>
    );
  }
}
