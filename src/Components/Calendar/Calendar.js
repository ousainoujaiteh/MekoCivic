import React, { Component } from 'react';
import Expo from 'expo';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  H2,
  Footer,
  FooterTab,
  Content,
} from 'native-base';

import BottomNavigation from '../BottomNavigation/BottomNavigation';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

export default class CalendarComponent extends React.Component {

  static navigationOptions = {
   header:null,
  }

 render() {
   const { navigate } = this.props.navigation;
   const { goBack } = this.props.navigation;
   return (
     <View style={styles.container}>

       <View style={{flex:10}}>
        <CalendarList
          // Callback which gets executed when visible months change in scroll view. Default = undefined
          onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
          // Max amount of months allowed to scroll to the past. Default = 50
          pastScrollRange={50}
          // Max amount of months allowed to scroll to the future. Default = 50
          futureScrollRange={50}
          // Enable or disable scrolling of calendar list
          scrollEnabled={true}
          //...calendarParams
        />
      </View>
     </View>
   );
 }
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop:22
  },
  Icontainer: {
    flex: 5,
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch', // or 'stretch',
    justifyContent: 'center',
  },

  loginForm: {
    flexDirection: 'row',
    justifyContent:'space-between',
    backgroundColor: 'transparent',
    alignItems: 'center',
    margin:30,


  },

  btn: {
    backgroundColor: 'transparent'
  },
  text:{
    color:'white',
    fontSize:20
  },
  navText:{
    color:'white',
  }
});
