import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {withNavigation} from 'react-navigation'


class CartOriginal extends Component {

  render() {
    return (
      <>
      <View style={{backgroundColor:'#fff', flex:1}}>
        <View style={{height: 60, flexDirection: 'row', marginTop:0,elevation:7, marginBottom:10, backgroundColor:'#fff'}}>
          <View 
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#000'}}>
              CART
            </Text>
          </View>
        </View>

        <ScrollView>
        <View style={{height:140, backgroundColor:'#fff', elevation:2, marginHorizontal:15, borderRadius:0, flexDirection:'row', alignItems:'center', paddingHorizontal:10, marginBottom:5, marginTop:5}}>
            <View style={{height:120, width:120, marginRight:15}}>
                <Image source={require('../assets/images/starbucks.jpeg')} style={{height:120, width:120, borderRadius:10}} />
            </View>
            <View style={{height:140, flex:1, paddingVertical:20}}>
                <Text style={{ fontWeight:'bold', color:'#2196f3'}}>Espresso: Starbucks Coffe Companny</Text>
                <Text style={{flex:1,fontWeight:'bold'}}>Starbucks</Text>
                <Text style={{flex:1, color:'green'}}>200000</Text>
                <View onStartShouldSetResponder={()=>(alert('delete'))} style={{flex:1,height:30, width:30, backgroundColor:'#b02c25', alignItems:'center', justifyContent:'center', borderRadius:10}}>
                    <Image source={require('../assets/images/icon/trash.png')} style={{height:15, width:15}} />
                </View>
            </View>

            <View style={{height:140, alignItems:'center', justifyContent:'center'}}>
                <TouchableOpacity>
                    <Image source={require('../assets/images/icon/minus-square.png')} style={{height:20, width:20 }} />
                </TouchableOpacity>
                    <TextInput value="1" style={{borderWidth:1,textAlign:'center', height:35, marginRight:5, borderColor:'#eee', marginVertical:10}} />
                    <TouchableOpacity>
                    <Image source={require('../assets/images/icon/plus-square.png')} style={{height:20, width:20 }} />
                    </TouchableOpacity>
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
<TouchableOpacity onPress={()=> this.props.navigation.navigate('Checkout')}>

      <View  style={{backgroundColor:'#0e5cc9', height:50, alignItems:'center', justifyContent:'center', margin:15, borderRadius:10}}>
          <Text style={{fontWeight:'bold', fontSize:18, color:'#fff'}}>Order items</Text>
        </View>
</TouchableOpacity>
      </View>

      </>
    );
  }
}
const Cart=withNavigation(CartOriginal)

export default Cart