import React, {Component} from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';

class CheckoutOriginal extends Component {
  render() {
    const {goBack} = this.props.navigation
    return (
      <View style={{flex: 1, backgroundColor:'#fff'}}>
          <View style={{height:60,marginBottom:10, flexDirection:'row', elevation:5, backgroundColor:'#fff'}}>
              <View style={{flex:1, justifyContent:'center', paddingLeft:20}}>
                  <View onStartShouldSetResponder={()=>goBack()} style={{height:40, width:40, backgroundColor:'#de4767', borderRadius:50, alignItems:'center', justifyContent:'center', elevation:8}}>
                  <Image source={require('../assets/images/icon/arrow-left.png')} style={{height:24, width:24}}/>
                  </View>
              </View>
              <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                  <Text style={{fontSize:16, fontWeight:'bold', color:'#000'}}>CHECKOUT</Text>
              </View>
              <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
              </View>
          </View>


          <View style={{flex:1, backgroundColor:'#fff'}}>
          <View style={{backgroundColor:'#fff', flex:1}}>
        <ScrollView>
        <View style={{height:140, backgroundColor:'#fff', elevation:2, marginHorizontal:10, borderRadius:0, flexDirection:'row', alignItems:'center', paddingHorizontal:10, marginBottom:5, marginTop:5}}>
            <View style={{height:120, width:120, marginRight:15}}>
                <Image source={require('../assets/images/starbucks.jpeg')} style={{height:120, width:120, borderRadius:10}} />
            </View>
            <View style={{height:140, flex:1, paddingVertical:20}}>
                <Text style={{fontWeight:'bold', color:'#2196f3', marginBottom:5}}>Espresso: Starbucks Coffe Companny</Text>
                <Text style={{fontWeight:'bold', marginBottom:5}}>Starbucks</Text>
                <Text style={{flex:1, color:'green'}}>200000</Text>
              
            </View>
     
        </View>

        <View style={{flexDirection:'row', marginBottom:10}}>
            <View style={{width:120}}>
            </View>
        <View style={{backgroundColor:'#fff', height:120, flex:1, marginHorizontal:18, marginTop:15, borderWidth:1, borderColor:'red',flexDirection:'column', alignItems:'flex-end', paddingVertical:10, paddingRight:20}}>
            <Text style={{flex:1, fontSize:15, marginVertical:3}}>Item price subtotal : 120000</Text>
            <Text style={{flex:1, fontSize:15, marginVertical:3}}>Fee Delivery : Free</Text>
            <Text style={{flex:1, fontSize:15,fontWeight:'bold', marginVertical:3}}>Sub Total : 120000</Text>
        </View>
        </View>
</ScrollView>
      </View>
    <TouchableOpacity onPress={() =>
                      this.props.navigation.navigate('Riview')
                    }>

        <View style={{backgroundColor:'#0e5cc9', height:50, alignItems:'center', justifyContent:'center', margin:15, borderRadius:10}}>
          <Text style={{fontWeight:'bold', fontSize:18, color:'#fff'}}>Checkout</Text>
        </View>
    </TouchableOpacity>
          </View>
      </View>

    );
  }
}

const Checkout = withNavigation(CheckoutOriginal)
export default Checkout;
