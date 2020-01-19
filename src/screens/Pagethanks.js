import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import {withNavigation} from 'react-navigation';

class PagethanksOriginal extends Component {
    render() {
        return (
            <View style={{flex:1, backgroundColor:'#fff'}}>
                <View style={{height:500, alignItems:'center', justifyContent:'flex-end'}}>
                <Image source={require('../assets/images/thanks.jpg')} style={{height:400, width:200}} />
            </View>
            <View style={{alignItems:'center', justifyContent:'flex-start'}}>
                <Text style={{fontSize:30}}>Thanks for your riview :)</Text>
            </View>
            <TouchableOpacity onPress={() =>
                      this.props.navigation.navigate('Home')
                    }>
            <View style={{height:50, marginHorizontal:90, alignItems:'center', justifyContent:'center', marginTop:20, backgroundColor:'#f28852', elevation:4}}>
                    <Text style={{color:'#fff'}}>DONE</Text>
              </View>
              </TouchableOpacity>
            </View>
        )
    }
}

const Pagethanks = withNavigation(PagethanksOriginal);

export default Pagethanks;