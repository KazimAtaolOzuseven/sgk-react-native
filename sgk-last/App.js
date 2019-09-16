
import React, { Component } from 'react';

import { View, Image, TouchableOpacity, ImageBackground } from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Screen1 from './pages/Screen1';
import Screen2 from './pages/Screen2';
import Screen3 from './pages/Screen3';
import Screen4 from './pages/Screen4';
import Screen5 from './pages/Screen5';
import Screen6 from './pages/Screen6';
import Screen7 from './pages/Screen7';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';





 
class NavigationDrawerStructure extends Component {
 
  toggleDrawer = () => {
 
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={require('./image/drawer.png')}
            style={{ width: 30, height: 40, marginLeft: 5 }}
          />
        </TouchableOpacity>
        
      </View>
      
        
      
      
    );
  }
}

const TabScreen = createMaterialTopTabNavigator(
  {
    Sayfa1: { screen: Screen2 },
    Settings: { screen: Tab2 },
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#FFFFFF',
      inactiveTintColor: '#F8F8F8',
      style: {
        backgroundColor: '#FF9800',
      },
      labelStyle: {
        textAlign: 'center',
      },
      indicatorStyle: {
        borderBottomColor: '#555',
        borderBottomWidth: 4,
      },
    },
  }
);
const TabScreen2 = createMaterialTopTabNavigator(
  {
    Sayfa2: { screen: Screen3 },
    Settings: { screen: Tab3 },
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#FFFFFF',
      inactiveTintColor: '#F8F8F8',
      style: {
        backgroundColor: '#FF9800',
      },
      labelStyle: {
        textAlign: 'center',
      },
      indicatorStyle: {
        borderBottomColor: '#555',
        borderBottomWidth: 4,
      },
    },
  }
);
 
const FirstActivity_StackNavigator = createStackNavigator({
  
  First: {
    screen: Screen1,
    navigationOptions: ({ navigation }) => ({
      title: 'Anasayfa',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});
 
const Screen2_StackNavigator = createStackNavigator({
  
  Second: {
    screen: TabScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Sayfa 1',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});
 
const Screen3_StackNavigator = createStackNavigator({
  
  Third: {
    screen: TabScreen2,
    navigationOptions: ({ navigation }) => ({
      title: 'Sayfa 2',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});
const Screen4_StackNavigator = createStackNavigator({
  
  Fourth: {
    screen: Screen4,
    navigationOptions: ({ navigation }) => ({
      title: 'Sayfa 3',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});
const Screen5_StackNavigator = createStackNavigator({
  
  Second: {
    screen: Screen5,
    navigationOptions: ({ navigation }) => ({
      title: 'Sayfa 4',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});
const Screen6_StackNavigator = createStackNavigator({
  
  Second: {
    screen: Screen6,
    navigationOptions: ({ navigation }) => ({
      title: 'Sayfa 5',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});
const Screen7_StackNavigator = createStackNavigator({
  
  Second: {
    screen: Screen7,
    navigationOptions: ({ navigation }) => ({
      title: 'Sayfa 5',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});


 
const DrawerNavigatorExample = createDrawerNavigator({

  Screen1: {
    
    screen: FirstActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Anasayfa',
    },
  },
  Screen2: {
    
    screen: Screen2_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Sayfa 1',
    },
  },
  Screen3: {
    
    screen: Screen3_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Sayfa 2',
    },
  },
  Screen4: {
    
    screen: Screen4_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Sayfa 3',
    },
  },
  Screen5: {
    
    screen: Screen5_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Sayfa 4',
    },
  },
  Screen6: {
    
    screen: Screen6_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Sayfa 5',
    },
  },
  Screen7: {
    
    screen: Screen7_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Sayfa 6',
    },
  },
 
});

 
export default createAppContainer(DrawerNavigatorExample);