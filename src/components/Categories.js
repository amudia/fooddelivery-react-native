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
import {getCategories} from '../redux/action/Categories';
import {APP_URL} from '../config/config';
import {connect} from 'react-redux';

const styles = StyleSheet.create({
  title: {height: 40, padding: 20, borderBottomWidth: 1, borderColor: '#eee'},
  texttitle: {fontSize: 14, fontWeight: 'bold'},
  wrapcontent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginLeft: 5,
    marginRight: 5,
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
  awraptitle: {alignItems: 'center', justifyContent: 'center'},
  atitle: {fontWeight: 'bold', fontSize: 12, marginTop: 5},
});

class CategoriesOriginal extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: true};
  }
  async componentDidMount() {
    await this.props.dispatch(getCategories());
    this.setState({isLoading: false});
  }

  render() {
    return (
      <>
        <View style={styles.title}>
          <Text style={styles.texttitle}>Categories</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {!this.state.isLoading &&
            this.props.categories.data.map((v, i) => {
              return (
                <View key={v.id_category} style={styles.wrapcontent}>
                  <View style={styles.card}>
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate('Menucategory', {
                          id: v.id_category,
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
                      <View style={styles.awraptitle}>
                        <Text style={styles.atitle}>{v.name_category}</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
        </ScrollView>
      </>
    );
  }
}
const Categories = withNavigation(CategoriesOriginal);

const mapStateToProps = state => {
  return {
    categories: state.categories,
  };
};

export default connect(mapStateToProps)(Categories);
