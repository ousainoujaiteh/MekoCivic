import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';
import { bulletin } from '../config/data';
import { List, ListItem } from 'react-native-elements';
import { Container, Header, Content, Title,Icon,Right,Left,Button,Body} from 'native-base';
class Bulletin extends Component {
  onLearnMore = (bullet) => {
    this.props.navigation.navigate('BulletinDetail', { ...bullet });
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

export default Bulletin;
