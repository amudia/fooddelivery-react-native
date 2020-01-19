import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

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

export default class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <View style={styles.title}>
          <Text style={styles.texttitle}>Categories</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {this.props.data &&
            this.props.data.map((v, i) => (
              <View key={i} style={styles.wrapcontent}>
                <View style={styles.card}>
                  <TouchableOpacity>
                    <View style={styles.wrapimg}>
                      <Image
                        source={{uri: `asset:/images/icon/${v.logo}`}}
                        style={styles.img}
                      />
                    </View>
                    <View style={styles.awraptitle}>
                      <Text style={styles.atitle}>{v.name_cat}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
        </ScrollView>
      </>
    );
  }
}
