import React, {Component} from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// import Splash from '../screens/Splash';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Register from '../screens/Register';
import ForgotPassword from '../screens/ForgotPassword';
import Search from '../screens/Search';
import Detailitem from '../screens/Detailitem';
import Detailriviews from '../screens/Detailriviews';
import Help from '../screens/Help';
import Cart from '../screens/Cart';
import Checkout from '../screens/Checkout';
import Profile from '../screens/Profile';
import Inbox from '../screens/Inbox';
import Menu from '../screens/Menu';
import Setting from '../screens/Setting';
import Riview from '../screens/Riview';
import Pagethanks from '../screens/Pagethanks';
import Menucategory from '../screens/Menucategory';
import Splashscreen from '../screens/Splashscreen';

const SplashNav = createStackNavigator(
  {
    Splashscreen: {
      screen: Splashscreen,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'Splashscreen',
  },
);

const AuthNav = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        headerShown: false,
      },
    },
    Register: {
      screen: Register,
      navigationOptions: {
        headerShown: false,
      },
    },
    ForgotPassword: {
      screen: ForgotPassword,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'Login',
  },
);

const HomeNav = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        headerShown: false,
      },
    },
    Search: {
      screen: Search,
      navigationOptions: {
        headerShown: false,
      },
    },
    Detailitem: {
      screen: Detailitem,
      navigationOptions: {
        headerShown: false,
      },
    },
    Detailriviews: {
      screen: Detailriviews,
      navigationOptions: {
        headerShown: false,
      },
    },
    Menu: {
      screen: Menu,
      navigationOptions: {
        headerShown: false,
      },
    },
    Menucategory: {
      screen: Menucategory,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'Home',
  },
);

HomeNav.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

const HelpNav = createStackNavigator(
  {
    Help: {
      screen: Help,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'Help',
  },
);

HelpNav.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

const CartNav = createStackNavigator(
  {
    Cart: {
      screen: Cart,
      navigationOptions: {
        headerShown: false,
      },
    },
    Checkout: {
      screen: Checkout,
      navigationOptions: {
        headerShown: false,
      },
    },
    Riview: {
      screen: Riview,
      navigationOptions: {
        headerShown: false,
      },
    },
    Pagethanks: {
      screen: Pagethanks,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'Cart',
  },
);

CartNav.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

const InboxNav = createStackNavigator(
  {
    Inbox: {
      screen: Inbox,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'Inbox',
  },
);

InboxNav.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

const ProfileNav = createStackNavigator(
  {
    Profile: {
      screen: Profile,
      navigationOptions: {
        headerShown: false,
      },
    },
    Setting: {
      screen: Setting,
      navigationOptions: {
        headerShown: false,
      },
    },
    Login: {
      screen: Login,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'Profile',
  },
);

const BottomNav = createBottomTabNavigator(
  {
    Home: {
      screen: HomeNav,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => {
          return <Icon name="home-outline" size={20} color={tintColor} />;
        },
      },
    },
    Help: {
      screen: HelpNav,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => {
          return (
            <Icon name="help-circle-outline" size={20} color={tintColor} />
          );
        },
      },
    },
    Cart: {
      screen: CartNav,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => {
          return <Icon name="cart-outline" size={20} color={tintColor} />;
        },
      },
    },
    Inbox: {
      screen: InboxNav,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => {
          return (
            <Icon name="inbox-multiple-outline" size={20} color={tintColor} />
          );
        },
      },
    },
    Profile: {
      screen: ProfileNav,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => {
          return <Icon name="face-outline" size={20} color={tintColor} />;
        },
      },
    },
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: 'white',
      activeBackgroundColor: '#e24567',
      inactiveTintColor: '#e24567',
      style: {
        backgroundColor: 'white',
        borderTopColor: 'transparent',
      },
    },
  },
);

const SwitchNav = createSwitchNavigator(
  {
    SplashNav,
    AuthNav,
    BottomNav,
  },
  {
    initialRouteName: 'SplashNav',
  },
);

const AppContainer = createAppContainer(SwitchNav);

// create a component
class Router extends Component {
  render() {
    return <AppContainer />;
  }
}

//make this component available to the app
export default Router;
