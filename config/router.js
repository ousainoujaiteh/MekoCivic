import React from 'react';
import { TabNavigator, StackNavigator ,DrawerNavigator } from 'react-navigation';
//import { Icon } from 'react-native-elements';
import { Icon } from 'native-base';
import { Platform } from 'react-native';
import Bulletin from '../screens/Bulletin';
import BulletinDetail from '../screens/BulletinDetail';
import Trending from '../screens/Trending';
import TrendingDetails from '../screens/TrendingDetails';


import Laws from '../src/Components/Laws/Laws';
import Home from '../src/Components/Home/Home';
import Electoral from '../src/Components/Laws/Electoral';
import Labour from '../src/Components/Laws/Labour';
import Traffic from '../src/Components/Laws/Traffic';
import Services from '../src/Components/Services/Services';
import Constitution from '../src/Components/Laws/Constitution';
import NewsFeed from '../StateHouse/NewsFeed';
import NewsFeedDetail from '../StateHouse/NewsFeedDetail';
import Speech from '../StateHouse/Speech';
import SpeechDetails from '../StateHouse/SpeechDetails';

import ListPage from '../src/Components/Post/ListPage';
import CreatePage from '../src/Components/Post/CreatePage';



const DrawerIcon = ({ navigate }) => {
  if (Platform === 'ios') {
    return null;
  }
  else {
    return (
      <Icon
        name="menu"
        size={28}
        color="black"
        style={{paddingLeft:20}}
        onPress={ () => navigate('DrawerOpen')}
       />
    );
  }


};


export const Tabs = TabNavigator({
  Bulletin: {
    screen: Bulletin,
    navigationOptions: {
      tabBarLabel: 'Bulletin',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
    },
  },
  Trending: {
    screen: Trending,
    navigationOptions: {
      tabBarLabel: 'Trending',
      tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
    },
  },
});



const NewsNavigator = TabNavigator ({
  Bulletin: { screen: Bulletin },
  Trending: { screen: Trending },

}, {
  tabBarOptions : {
    style: {
      backgroundColor: '#A11C1C',
      marginTop:20,
    }
  },

});

const StateNavigator = TabNavigator ({
  NewsFeed: { screen: NewsFeed },
  Speech: { screen: Speech },

}, {
  tabBarOptions : {
    style: {
      backgroundColor: '#A11C1C',
      marginTop:20,
    }
  },

});

const Drawer = DrawerNavigator({
  Laws:{
    screen: Laws,
    navigationOptions:{
      drawer:{
        label: 'Laws',
      }
    }
  },
  Service:{
    screen: Services,
    navigationOptions:{
      drawer:{
        label: 'Services',
      }
    }
  },
});

export const Root = StackNavigator({

  Home:{screen : Home },
  Laws:{screen:Laws,
    navigationOptions:{
      header: (props) => ({
        left: <DrawerIcon {...props} />
      }),
    }


  },
  Constitution: {screen: Constitution},
  Services:{screen:Services},
  Electoral:{screen:Electoral},
  Labour:{screen: Labour},
  Traffic: {screen:Traffic},
  Bulletin:{screen: Bulletin},
  BulletinDetail:{screen:BulletinDetail},
  Trending:{screen:Trending},
  TrendingDetails:{screen:TrendingDetails},
  NewsFeed:{screen:NewsFeed},
  NewsFeedDetail:{screen:NewsFeedDetail},
  Speech:{screen:Speech},
  SpeechDetails:{screen:SpeechDetails},
  Tabs: {screen: Tabs,},
  NewsNavigator:{screen:NewsNavigator},
  StateNavigator:{screen: StateNavigator},
  Drawer:{screen:Drawer},
  ListPage:{screen:ListPage},
  CreatePage:{screen:CreatePage},
},

{
  mode: 'modal',
  headerMode: 'none',
});
