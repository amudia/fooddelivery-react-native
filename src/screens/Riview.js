import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {withNavigation} from 'react-navigation';
import StarRating from 'react-native-star-rating';

class RiviewOriginal extends Component {
    constructor(props) {
        super(props);
        this.state = {
          starCount: 1
        };
      }
     
      onStarRatingPress(rating) {
        this.setState({
          starCount: rating
        });
      }
  render() {
    return (
          <View style={{flex:1, backgroundColor:'#fff'}}>
              <View style={{height:240, backgroundColor:'#de4767', alignItems:'center', justifyContent:'flex-end', paddingBottom:50}}>
              <View style={{marginBottom:20}}>
                  <Image source={require('../assets/images/icon/check-circle.png')} />
              </View>
            <Text style={{fontSize:24, color:'#f5dae0'}}>Transaction Success</Text>
              </View>
              <View style={{justifyContent:'center', alignItems:'center', marginTop:50}}>
                  <Text style={{fontSize:20, fontWeight:'bold'}}>Give Rate & Riview Your Item(s)</Text>
              </View>
              <View style={{alignItems:'center', justifyContent:'center', marginTop:20}}>
              <View style={{marginTop: 20}}>
                  <StarRating
                    disabled={false}
                    maxStars={5}
                    fullStarColor={'orange'}
                    starSize={30}
                    rating={this.state.starCount}
                    selectedStar={rating => this.onStarRatingPress(rating)}
                  />
                </View>              
                </View>
              <View style={{alignItems:'center', justifyContent:'center', marginTop:20}}>
                <TextInput placeholder="Riview" style={{height:50, width:300, borderBottomWidth:1, borderBottomColor:'#c2bebf', fontSize:16}} />
              </View>
              <TouchableOpacity onPress={() =>
                      this.props.navigation.navigate('Pagethanks')
                    }>

              <View style={{height:50, marginHorizontal:90, alignItems:'center', justifyContent:'center', marginTop:20, backgroundColor:'#51d6d0', elevation:4}}>
                    <Text style={{color:'#fff'}}>SUBMIT</Text>
              </View>
              </TouchableOpacity>
          </View>
    );
  }
}

const Riview = withNavigation(RiviewOriginal);

export default Riview;