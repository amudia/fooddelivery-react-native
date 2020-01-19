import React, {Component} from 'react';
import {Text, View, Image, Button, TouchableOpacity} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {TextInput} from 'react-native-gesture-handler';
import {withNavigation} from 'react-navigation';
import StarRating from 'react-native-star-rating';

class DetailitemOriginal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starCount: 5,
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating,
    });
  }
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
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
          />
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
          />
        </View>

        <View style={{backgroundColor: '#fff', flex: 1}}>
          <View
            style={{
              height: 250,
              alignItems: 'center',
              backgroundColor: '#eee',
              justifyContent: 'center',
              borderBottomWidth: 1,
              borderColor: '#eee',
              paddingBottom: 10,
              paddingTop: 10,
            }}>
            <Image source={require('../assets/images/starbucks.jpeg')} />
          </View>
          <View
            style={{
              height: 130,
              padding: 10,
              marginHorizontal: 10,
              borderBottomWidth: 1,
              borderColor: '#eee',
            }}>
            <Text style={{fontSize: 24, fontWeight: 'bold', marginBottom: 5}}>
              Espresso: starbucks Coffe Company
            </Text>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <Text style={{fontSize: 24, color: 'green'}}>Rp. 20000</Text>
                <View style={{width: 50, marginTop: 20}}>
                  <StarRating
                    disabled={true}
                    maxStars={5}
                    fullStarColor={'orange'}
                    starSize={18}
                    rating={this.state.starCount}
                    selectedStar={rating => this.onStarRatingPress(rating)}
                  />
                </View>
              </View>

              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  marginRight: 20,
                  marginTop: 20,
                }}>
                <TouchableOpacity>
                  <View
                    style={{
                      height: 50,
                      width: 20,
                      borderWidth: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderColor: '#eee',
                    }}>
                    <Text>-</Text>
                  </View>
                </TouchableOpacity>
                <TextInput
                  value="1"
                  style={{
                    borderTopWidth: 1,
                    borderBottomWidth: 1,
                    width: 40,
                    height: 50,
                    textAlign: 'center',
                    borderColor: '#eee',
                  }}
                />
                <TouchableOpacity>
                  <View
                    style={{
                      height: 50,
                      width: 20,
                      borderWidth: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderColor: '#eee',
                    }}>
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
              INI DESKRIPSI ITEM
            </Text>
          </View>
        </View>

        <View
          onStartShouldSetResponder={() =>
            this.props.navigation.navigate('Cart')
          }
          style={{
            backgroundColor: '#0e5cc9',
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            margin: 15,
            borderRadius: 10,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 18, color: '#fff'}}>
            Add to Cart
          </Text>
        </View>
      </View>
    );
  }
}
const Detailitem = withNavigation(DetailitemOriginal);

export default Detailitem;
