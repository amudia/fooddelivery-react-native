import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';

import {connect} from 'react-redux';
import {getPopularitem} from '../redux/action/Popularitem';
import {getRestaurant} from '../redux/action/Restaurant';
import {getCategories} from '../redux/action/Categories';

import Header from '../components/Header';
import Categories from '../components/Categories';
import Mostpopular from '../components/Mostpopular';
import Restaurant from '../components/Restaurant';
// import ButtonNav from '../components/ButtonNav';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.dispatch(getRestaurant());
    this.props.dispatch(getPopularitem());
    this.props.dispatch(getCategories());
  }

  render() {
    return (
      <View style={styles.root}>
        <ScrollView>
          <View style={styles.content}>
            <View style={styles.header}>
              <Header />
            </View>

            <View style={styles.category}>
              <Categories data={this.props.categories.data} />
            </View>

            <View>
              <Mostpopular data={this.props.popularitem.data} />
            </View>

            <View>
              <Restaurant data={this.props.restaurant.data} />
            </View>
          </View>
        </ScrollView>
        {/* <View style={styles.bottomnav}>
          <ButtonNav />
        </View> */}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    restaurant: state.restaurant,
    popularitem: state.popularitem,
    categories: state.categories,
  };
};

export default connect(mapStateToProps)(Home);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    paddingBottom: 20,
  },
  bottomnav: {
    height: 70,
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingTop: 9,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    elevation: 15,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderLeftWidth: 2,
    borderColor: '#fff',
  },
  header: {
    height: 150,
    backgroundColor: '#e24567',
    elevation: 5,
  },
  category: {
    height: 200,
    backgroundColor: '#fff',
  },
});
