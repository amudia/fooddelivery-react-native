import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  ImageStore,
  TouchableOpacity,
} from 'react-native';
import {withNavigation} from 'react-navigation';

class ProfileOriginal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.root}>
        <View style={{height:80, backgroundColor:'#e04667', flexDirection:'row',alignItems:'center', justifyContent:'center', paddingTop:10, elevation:4  }}>
          <View style={{flex:1, alignItems:'center'}}>
            <TouchableOpacity onPress={() =>
                      this.props.navigation.navigate('Setting')
                    }>
            <View style={{width:40, height:40, backgroundColor:'#de4767',alignItems:'center', justifyContent:'center', elevation:2, borderRadius:10}}>
              <Image source ={require('../assets/images/icon/setting.png')} style={{height:24, width:24}} />
            </View>
            </TouchableOpacity>
          </View>
          <View style={{flex:1, alignItems:'center'}}>
            <Text style={{fontWeight:'bold', fontSize:14, color: '#fff'}}>PROFILE</Text>
          </View>
          <View style={{flex:1, alignItems:'center'}}></View>
        </View>
        <ScrollView>
          <View style={styles.content}>
            <View style={{height:260, backgroundColor:'#e24567', borderBottomLeftRadius:30, borderBottomRightRadius:30, alignItems:'center', justifyContent:'center', elevation:3 }}>
              <View >
                <Image source ={require('../assets/images/user.jpg')} style={{height:100, width:100,borderWidth:3,borderColor:'#eee', borderRadius:20, marginBottom:15}} />
              </View>
              <Text style={{fontWeight:'bold', fontSize:20, color: '#fff', marginBottom:5}}>Customer</Text>
              <Text style={{fontSize:12, color: '#fff'}}>Edit Profile</Text>
            </View>

            <View style={{flexDirection:'row', height:50, backgroundColor:'#fff', marginHorizontal:20, marginTop:10, borderRadius:15, alignItems:'center', elevation:2, padding:25}}>
              <View style={{height:35, width:40, backgroundColor:'#eda4e0', alignItems:'center', justifyContent:'center', borderRadius:10, marginRight:30, elevation:3}}>
                <Image source ={require('../assets/images/icon/shopping-bag.png')} style={{height:18, width:18}} />
              </View>
              <View style={{width:130}}>
              <Text style={{fontWeight:'bold', fontSize:14, color:'#70696f'}}>My Orders</Text>
              </View>
              <View style={{height:35, width:40, alignItems:'center', justifyContent:'center', borderRadius:10, flex: 1}}>
                <Image source={require('../assets/images/icon/arrow.png')} style={{height:18, width:18,}} />
              </View>
            </View>

            <View style={{flexDirection:'row', height:50, backgroundColor:'#fff', marginHorizontal:20, marginTop:10, borderRadius:15, alignItems:'center', elevation:2, padding:25}}>
              <View style={{height:35, width:40, backgroundColor:'#56a676', alignItems:'center', justifyContent:'center', borderRadius:10, marginRight:30, elevation:3}}>
                <Image source ={require('../assets/images/icon/credit-card.png')} style={{height:18, width:18}} />
              </View>
              <View style={{width:130}}>
              <Text Setting
Settingstyle={{fontWeight:'bold', fontSize:14, color:'#70696f'}}>My Wallet</Text>
              </View>
              <View style={{height:35, width:40, alignItems:'center', justifyContent:'center', borderRadius:10, flex: 1}}>
                <Image source={require('../assets/images/icon/arrow.png')} style={{height:18, width:18,}} />
              </View>
            </View>

            <View style={{flexDirection:'row', height:50, backgroundColor:'#fff', marginHorizontal:20, marginTop:10, borderRadius:15, alignItems:'center', elevation:2, padding:25}}>
              <View style={{height:35, width:40, backgroundColor:'#5391bd', alignItems:'center', justifyContent:'center', borderRadius:10, marginRight:30, elevation:3}}>
                <Image source ={require('../assets/images/icon/map.png')} style={{height:18, width:18}} />
              </View>
              <View style={{width:130}}>
              <Text style={{fontWeight:'bold', fontSize:14, color:'#70696f'}}>My Addresses</Text>
              </View>
              <View style={{height:35, width:40, alignItems:'center', justifyContent:'center', borderRadius:10, flex:1}}>
                <Image source={require('../assets/images/icon/arrow.png')} style={{height:18, width:18,}} />
              </View>
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



const Profile = withNavigation(ProfileOriginal);

export default Profile;


const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#eee',
  },
  content: {
    flex: 1,
    paddingBottom: 40,
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
});
