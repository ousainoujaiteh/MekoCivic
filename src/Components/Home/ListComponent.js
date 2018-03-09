import React, { Component } from 'react';
import { View ,ListView, StyleSheet,ScrollView} from 'react-native';
import { List, ListItem,SearchBar} from 'react-native-elements';
 class ListComponent extends Component{

  static navigationOptions = {
    title: 'Business Directory',
  };

  render(){
    const  { navigate }  = this.props.navigation;

    const list = [
    {
      name: 'KamekoGambia',
      avatar_url: 'http://facebook.github.io/react/img/logo_og.png',
      subtitle: 'Software Development'

    },
    {
      name: 'KamekoGambia',
      avatar_url: 'http://facebook.github.io/react/img/logo_og.png',
      subtitle: 'Software Development'
    },
    {
      name: 'KamekoGambia',
      avatar_url: 'http://facebook.github.io/react/img/logo_og.png',
      subtitle: 'Software Development'
    },
    {
      name: 'KamekoGambia',
      avatar_url: 'http://facebook.github.io/react/img/logo_og.png',
      subtitle: 'Software Development'
    },
    {
      name: 'KamekoGambia',
      avatar_url: 'http://facebook.github.io/react/img/logo_og.png',
      subtitle: 'Software Development'
    },
    {
      name: 'KamekoGambia',
      avatar_url: 'http://facebook.github.io/react/img/logo_og.png',
      subtitle: 'Software Development'
    },
    {
      name: 'KamekoGambia',
      avatar_url: 'http://facebook.github.io/react/img/logo_og.png',
      subtitle: 'Software Development'
    },
    {
      name: 'KamekoGambia',
      avatar_url: 'http://facebook.github.io/react/img/logo_og.png',
      subtitle: 'Software Development'
    },
    {
      name: 'KamekoGambia',
      avatar_url: 'http://facebook.github.io/react/img/logo_og.png',
      subtitle: 'Software Development'
    },
    {
      name: 'KamekoGambia',
      avatar_url: 'http://facebook.github.io/react/img/logo_og.png',
      subtitle: 'Software Development'
    },
  ]
    return(
      <View>
      <ScrollView>
      <List containerStyle={{marginBottom: 20}}>
       {
        list.map((l, i) => (
          <ListItem
            roundAvatar
            avatar={{uri:l.avatar_url}}
            key={i}
            title={l.name}
            category={l.category}
            subtitle={l.subtitle}
            onPress={() => navigate('')}
          />
        ))
      }
    </List>
    </ScrollView>
    </View>
    );
  }
}
