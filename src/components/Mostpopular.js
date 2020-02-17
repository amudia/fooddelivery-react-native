import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {withNavigation} from 'react-navigation';
import StarRating from 'react-native-star-rating';

import {getPopularitem} from '../redux/action/Popularitem';
import {APP_URL} from '../config/config';
import {connect} from 'react-redux';

const styles = StyleSheet.create({
  wraptitle: {height: 40, backgroundColor: '#fff', flexDirection: 'row'},
  wraptitlemost: {justifyContent: 'center', flex: 1, paddingLeft: 20},
  textmost: {fontSize: 14, fontWeight: 'bold'},
  wrapshowall: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    left: 30,
  },
  textshowall: {fontSize: 14, color: '#2196f3'},
  wrapline: {paddingHorizontal: 20},
  line: {height: 2, backgroundColor: '#eee'},
  wrapcontent: {
    flex: 1,
    marginBottom: 15,
    marginLeft: 5,
  },
  awrapcontent: {
    height: 255,
    width: 180,
    backgroundColor: 'white',
    marginTop: 15,
    marginRight: 5,
    marginLeft: 5,
    elevation: 3,
    marginBottom: 10,
  },
  wrapimg: {height: 140, width: 180, backgroundColor: 'white'},
  img: {height: 140, width: 180},
  textname: {
    fontWeight: 'bold',
    marginTop: 5,
    paddingHorizontal: 10,
    fontSize: 12,
    color: '#2196f3',
  },
  textrest: {
    fontWeight: 'bold',
    marginTop: 5,
    paddingHorizontal: 10,
    fontSize: 12,
  },
  textprices: {color: 'green', paddingHorizontal: 10, marginTop: 5},
  rating: {color: 'orange', paddingHorizontal: 10, marginTop: 5},
});

class MostpopularOriginal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starCount: 5,
      isLoading: true,
    };
  }
  async componentDidMount() {
    await this.props.dispatch(getPopularitem());
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
    return (
      <>
        <View style={styles.wraptitle}>
          <View style={styles.wraptitlemost}>
            <Text style={styles.textmost}>Most popular items</Text>
          </View>
          <View style={styles.wrapshowall}>
            <TouchableOpacity>
              <Text style={styles.textshowall}>Show All >></Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.wrapline}>
          <View style={styles.line} />
        </View>
        <View style={styles.wrapcontent}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {!this.state.isLoading &&
              this.props.popularitem.data.map((v, i) => {
                return (
                  <View key={v.id_item} style={styles.awrapcontent}>
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate('Detailitem', {
                          id: v.id_item,
                        })
                      }>
                      <View style={styles.wrapimg}>
                        <Image
                          style={styles.img}
                          source={{
                            uri: APP_URL.concat(`src/assets/${v.image}`),
                          }}
                        />
                      </View>
                    </TouchableOpacity>

                    <View style={{flex: 1}}>
                      <Text style={styles.textname}>{v.name_item}</Text>
                    </View>
                    <View style={{flex: 1}}>
                      <Text style={styles.textrest}>{v.name_rest}</Text>
                    </View>
                    <View style={{flex: 1}}>
                      <Text style={styles.textprices}>
                        {this.rupiah(v.price)}
                      </Text>
                    </View>
                    <View
                      style={{
                        width: 60,
                        marginTop: 10,
                        marginLeft: 8,
                        flex: 1,
                      }}>
                      <StarRating
                        disabled={true}
                        maxStars={5}
                        fullStarColor={'orange'}
                        starSize={12}
                        rating={v.rating}
                        selectedStar={rating => this.onStarRatingPress(rating)}
                      />
                    </View>
                  </View>
                );
              })}
          </ScrollView>
        </View>
      </>
    );
  }
}

const Mostpopular = withNavigation(MostpopularOriginal);

const mapStateToProps = state => {
  return {
    popularitem: state.popularitem,
  };
};

export default connect(mapStateToProps)(Mostpopular);
