import React, { Component } from 'react';
import { speeches } from '../config/data';
import { View, ScrollView} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { Container, Header, Content, Card, CardItem, Text, Body ,Item, Input, Icon, Button,} from 'native-base';
export default class Speech extends Component {
  onLearnMore = (speech) => {
    this.props.navigation.navigate('SpeechDetails', { ...speech });
  };
  render() {
    return (
      <ScrollView>
        <List>
          {speeches.map((speech) => (
            <ListItem
              key={speech.name.title}
              title={`${speech.name.title.toUpperCase()}`}
              subtitle={speech.description}
              onPress={() => this.onLearnMore(speech)}
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}
