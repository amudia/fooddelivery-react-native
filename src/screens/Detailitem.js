import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {withNavigation} from 'react-navigation';
import StarRating from 'react-native-star-rating';

import {getItem} from '../redux/action/Item';
import {APP_URL} from '../config/config';
import {connect} from 'react-redux';

const styles = StyleSheet.create({
  wrapper: {backgroundColor: '#fff', flex: 1},
  header: {
    height: 60,
    marginBottom: 0,
    flexDirection: 'row',
    elevation: 5,
    backgroundColor: '#fff',
  },
  wrapicon: {flex: 1, justifyContent: 'center', paddingLeft: 20},
  awrapicon: {
    height: 40,
    width: 40,
    backgroundColor: '#de4767',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  icon: {height: 24, width: 24},
  wrapimg: {
    height: 250,
    alignItems: 'center',
    backgroundColor: '#eee',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#eee',
    paddingBottom: 10,
    paddingTop: 10,
  },
  img: {height: 240, width: 240},
  wrapdetail: {
    height: 150,
    padding: 10,
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  textname: {fontSize: 24, fontWeight: 'bold', marginBottom: 5},
  wrapcounter: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 20,
    marginTop: 20,
  },
  minus: {
    height: 50,
    width: 20,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#eee',
  },
  plus: {
    height: 50,
    width: 20,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#eee',
  },
  countinput: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    width: 40,
    height: 50,
    textAlign: 'center',
    borderColor: '#eee',
  },
  wrapbutton: {
    backgroundColor: '#0e5cc9',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
    borderRadius: 10,
  },
});

class DetailitemOriginal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starCount: 5,
      isLoading: true,
    };
  }
  async componentDidMount() {
    const id = this.props.navigation.getParam('id');
    await this.props.dispatch(getItem(id));
    this.setState({isLoading: false});
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating,
    });
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
    const {goBack} = this.props.navigation;

    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <View style={styles.wrapicon}>
            <View
              onStartShouldSetResponder={() => goBack()}
              style={styles.awrapicon}>
              <Image
                source={require('../assets/images/icon/arrow-left.png')}
                style={styles.icon}
              />
            </View>
          </View>
        </View>

        {!this.state.isLoading &&
          this.props.itemid.data.map((v, i) => {
            return (
              <View key={v.id_item} style={styles.wrapper}>
                <View style={styles.wrapimg}>
                  <Image
                    style={styles.img}
                    source={{
                      uri: APP_URL.concat(`src/assets/${v.image}`),
                    }}
                  />
                </View>
                <View style={styles.wrapdetail}>
                  <Text style={styles.textname}>{v.name_item}</Text>
                  <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 1}}>
                      <Text style={{fontSize: 24, color: 'green'}}>
                        {this.rupiah(v.price)}
                      </Text>
                      <View style={{width: 50, marginTop: 20}}>
                        <StarRating
                          disabled={true}
                          maxStars={5}
                          fullStarColor={'orange'}
                          starSize={18}
                          rating={v.rating}
                          selectedStar={rating =>
                            this.onStarRatingPress(rating)
                          }
                        />
                      </View>
                      <View style={{paddingLeft: 10, marginTop: 5}}>
                        <TouchableOpacity
                          onPress={() =>
                            this.props.navigation.navigate('Detailriviews', {
                              id: v.id_item,
                            })
                          }>
                          <Text style={{fontSize: 12, color: 'blue'}}>
                            Lihat Ulasan
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>

                    <View style={styles.wrapcounter}>
                      <TouchableOpacity>
                        <View style={styles.minus}>
                          <Text>-</Text>
                        </View>
                      </TouchableOpacity>
                      <TextInput value="1" style={styles.countinput} />
                      <TouchableOpacity>
                        <View style={styles.plus}>
                          <Text>+</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

                <View style={{marginHorizontal: 20, marginTop: 20}}>
                  <Text style={{fontWeight: 'bold', marginBottom: 20}}>
                    Description item
                  </Text>
                  <Text style={{marginBottom: 20, marginLeft: 10}}>
                    {v.desc_item}
                  </Text>
                </View>
              </View>
            );
          })}

        <View
          onStartShouldSetResponder={() =>
            this.props.navigation.navigate('Cart')
          }
          style={styles.wrapbutton}>
          <Text style={{fontWeight: 'bold', fontSize: 18, color: '#fff'}}>
            Add to Cart
          </Text>
        </View>
      </View>
    );
  }
}
const Detailitem = withNavigation(DetailitemOriginal);

const mapStateToProps = state => {
  return {
    itemid: state.itemid,
  };
};

export default connect(mapStateToProps)(Detailitem);
