// import React, {Component} from 'react';
// import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

// export default class ButtonNav extends Component {
//   render() {
//     return (
//       <>
//         <View
//           style={{
//             flex: 1,
//             alignItems: 'center',
//             justifyContent: 'center',
//             borderRightWidth: 1,
//             borderRightColor: '#eee',
//           }}>
//           <TouchableOpacity>
//             <View style={{width: 26, height: 26}}>
//               <Image
//                 source={require('../assets/images/icon/home.png')}
//                 style={{width: 24, height: 24, marginLeft: 6}}
//               />
//             </View>
//             <Text style={{marginTop: 5, marginBottom: 12}}> Home</Text>
//           </TouchableOpacity>
//         </View>
//         <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//           <TouchableOpacity>
//             <View style={{width: 26, height: 26}}>
//               <Image
//                 style={{width: 24, height: 24, marginLeft: 4}}
//                 source={require('../assets/images/icon/help-circle.png')}
//               />
//             </View>
//             <Text style={{marginTop: 5, marginBottom: 12}}> Help</Text>
//           </TouchableOpacity>
//         </View>
//         <View
//           style={{
//             position: 'absolute',
//             left: 155,
//             top: -30,
//             backgroundColor: 'white',
//             borderRadius: 50,
//             borderWidth: 1,
//             borderColor: '#eee',
//           }}>
//           <View
//             style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//             <TouchableOpacity>
//               <View
//                 style={{
//                   backgroundColor: 'white',
//                   height: 80,
//                   width: 80,
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   borderRadius: 50,
//                 }}>
//                 <View
//                   style={{
//                     width: 60,
//                     height: 60,
//                     position: 'absolute',
//                     backgroundColor: '#e24567',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     borderRadius: 50,
//                   }}>
//                   <Image
//                     style={{width: 24, height: 24}}
//                     source={require('../assets/images/icon/cart.png')}
//                   />
//                 </View>
//               </View>
//             </TouchableOpacity>
//           </View>
//         </View>
//         <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//           <View style={{width: 26, height: 26}} />
//         </View>
//         <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//           <TouchableOpacity>
//             <View style={{width: 26, height: 26}}>
//               <Image
//                 style={{width: 24, height: 24, marginLeft: 4}}
//                 source={require('../assets/images/icon/message-square.png')}
//               />
//             </View>
//             <Text style={{marginTop: 5, marginBottom: 12}}> Inbox</Text>
//           </TouchableOpacity>
//         </View>
//         <View
//           style={{
//             flex: 1,
//             alignItems: 'center',
//             justifyContent: 'center',
//             borderLeftWidth: 1,
//             borderLeftColor: '#eee',
//           }}>
//           <TouchableOpacity>
//             <View style={{width: 26, height: 26}}>
//               <Image
//                 style={{width: 24, height: 24, marginLeft: 6}}
//                 source={require('../assets/images/icon/user.png')}
//               />
//             </View>
//             <Text style={{marginTop: 5, marginBottom: 12}}> Profile</Text>
//           </TouchableOpacity>
//         </View>
//       </>
//     );
//   }
// }
