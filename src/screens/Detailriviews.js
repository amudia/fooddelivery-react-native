import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

import StarRating from 'react-native-star-rating';

import {getRiview} from '../redux/action/Detailriviews';
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

class Detailriviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starCount: 5,
      isLoading: true,
    };
  }
  async componentDidMount() {
    const id = this.props.navigation.getParam('id');
    await this.props.dispatch(getRiview(id));
    this.setState({isLoading: false});
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating,
    });
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

        <View style={{margin: 20}}>
          <Text style={{fontWeight: 'bold', fontSize: 14}}>
            Ulasan paling membantu
          </Text>
        </View>
        <View>
          {!this.state.isLoading &&
            this.props.detailriview.data.map((v, i) => {
              return (
                <View
                  key={i}
                  style={{
                    height: 150,
                    backgroundColor: '#fff',
                    borderWidth: 1,
                    borderColor: '#eee',
                    marginHorizontal: 20,
                    marginBottom:20
                  }}>
                  <View style={{width: 50, marginTop: 10, marginLeft: 10}}>
                    <StarRating
                      disabled={true}
                      maxStars={5}
                      fullStarColor={'orange'}
                      starSize={18}
                      rating={v.rating}
                      selectedStar={rating => this.onStarRatingPress(rating)}
                    />
                  </View>
                  <View style={{marginLeft: 10, marginTop: 10}}>
                    <Text>Oleh : {v.name}</Text>
                  </View>
                  <View style={{marginLeft: 10, marginTop: 10}}>
                    <Text>{v.riview}</Text>
                  </View>
                </View>
              );
            })}
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    detailriview: state.detailriview,
  };
};

export default connect(mapStateToProps)(Detailriviews);
