import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { bulletin } from '../config/data';
import { Container, Header, Content, Title,Icon,Right,Left,Button,Body} from 'native-base';
class NewsFeed extends Component {
  onLearnMore = (bullet) => {
    this.props.navigation.navigate('NewsFeedDetail', { ...bullet });
  };

  render() {
    return (
      <ScrollView>
        <List>
          {bulletin.map((bullet) => (
            <ListItem
              key={bullet.name.title}
              thumbnail
              avatar={{ uri: bullet.picture.large }}
              title={`${bullet.name.title.toUpperCase()}`}
              subtitle={bullet.description}
              onPress={() => this.onLearnMore(bullet)}
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}

export default NewsFeed;
