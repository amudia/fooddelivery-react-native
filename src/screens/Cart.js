import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {withNavigation} from 'react-navigation';
import {getCart, getCartbyid} from '../redux/action/Cart';
import {connect} from 'react-redux';
import axios from 'axios';
import {APP_URL} from '../config/config';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
  wrapheader: {
    height: 60,
    flexDirection: 'row',
    marginTop: 0,
    elevation: 7,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  wrapheader1: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  textheader: {fontSize: 16, fontWeight: 'bold', color: '#000'},
  wrapcontent: {
    height: 140,
    backgroundColor: '#fff',
    elevation: 2,
    marginHorizontal: 15,
    borderRadius: 0,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 5,
    marginTop: 5,
  },
  wrapimg: {height: 120, width: 120, marginRight: 15},
  img: {height: 120, width: 120, borderRadius: 10},
  wrapitem: {height: 140, flex: 1, paddingVertical: 20},
  textnameitem: {fontWeight: 'bold', color: '#2196f3'},
  textresto: {flex: 1, fontWeight: 'bold'},
  textprice: {flex: 1, color: 'green'},
  wraptrash: {
    flex: 1,
    height: 30,
    width: 30,
    backgroundColor: '#b02c25',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  icontrash: {height: 15, width: 15},
  wrapiconmin: {
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icomin: {height: 20, width: 20},
  wraptextinp: {
    borderWidth: 1,
    textAlign: 'center',
    height: 35,
    marginRight: 5,
    borderColor: '#eee',
    marginVertical: 10,
  },
  icoplus: {height: 20, width: 20},
  wrapfooter: {flexDirection: 'row', marginBottom: 10},
  wrapfooter1: {width: 120},
  wrapvalue: {
    backgroundColor: '#fff',
    height: 120,
    flex: 1,
    marginHorizontal: 18,
    marginTop: 15,
    borderWidth: 1,
    borderColor: 'red',
    flexDirection: 'column',
    alignItems: 'flex-end',
    paddingVertical: 10,
    paddingRight: 20,
  },
  subtotal: {flex: 1, fontSize: 15, marginVertical: 3},
  subtotal1: {
    flex: 1,
    fontSize: 15,
    fontWeight: 'bold',
    marginVertical: 3,
  },
  btn: {
    backgroundColor: '#0e5cc9',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
    borderRadius: 10,
  },
  textorder: {fontWeight: 'bold', fontSize: 18, color: '#fff'},
});
class CartOriginal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      id_item: null,
      isFetched: false,
      Subtotal: 0,
      isLoading: false,
      isFetchedDataItem: false,
    };
  }

  async componentDidMount() {
    const {id} = this.props.match.params;
    const jwt = this.props.login.data.auth;
    const url = APP_URL.concat(`carts/${id}`);
    // eslint-disable-next-line eqeqeq
    this.props.dispatch(getCart(id, jwt));
    const item = await axios.get(url, jwt);
    const {data} = item;
    this.setState({data, isFetched: !this.state.isFetched});
    this.setState({quantity: data.data.map(v => v.quantity)});
    this.setState({Subtotal: data.Subtotal});
  }

  render() {
    return (
      <>
        <View style={styles.root}>
          <View style={styles.wrapheader}>
            <View style={styles.wrapheader1}>
              <Text style={styles.textheader}>CART</Text>
            </View>
          </View>

          <ScrollView>
            <View style={styles.wrapcontent}>
              <View style={styles.wrapimg}>
                <Image
                  source={require('../assets/images/starbucks.jpeg')}
                  style={styles.img}
                />
              </View>
              {/* {!this.props.cart.isLoading &&
                this.props.cart.data &&
                this.props.cart.data.map((v, i) => ( */}
              <View style={styles.wrapitem}>
                <Text style={styles.textnameitem}>ASD</Text>
                <Text style={styles.textresto}>Starbucks</Text>
                <Text style={styles.textprice}>200000</Text>
                <View
                  onStartShouldSetResponder={() => alert('delete')}
                  style={styles.wraptrash}>
                  <Image
                    source={require('../assets/images/icon/trash.png')}
                    style={styles.icontrash}
                  />
                </View>
              </View>
              {/* ))} */}
              <View style={styles.wrapiconmin}>
                <TouchableOpacity>
                  <Image
                    source={require('../assets/images/icon/minus-square.png')}
                    style={styles.icomin}
                  />
                </TouchableOpacity>
                <TextInput value="1" style={styles.wraptextinp} />
                <TouchableOpacity>
                  <Image
                    source={require('../assets/images/icon/plus-square.png')}
                    style={styles.icoplus}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.wrapfooter}>
              <View style={styles.wrapfooter1} />
              <View style={styles.wrapvalue}>
                <Text style={styles.subtotal}>
                  Item price subtotal : 120000
                </Text>
                <Text style={styles.subtotal1}>Sub Total : 120000</Text>
              </View>
            </View>
          </ScrollView>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Checkout')}>
            <View style={styles.btn}>
              <Text style={styles.textorder}>Order items</Text>
            </View>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}
// const mapStateToProps = state => {
//   return {
//     cart: state.cart,
//   };
// };
const Cart = withNavigation(CartOriginal);

// export default connect(mapStateToProps)(Cart);
export default Cart;
