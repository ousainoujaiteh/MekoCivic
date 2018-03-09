import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';
import { trending } from '../config/data';
import { List, ListItem } from 'react-native-elements';
import { Container, Header, Content, Title,Icon,Right,Left,Button,Body} from 'native-base';

class Trending extends Component {
  onLearnMore = (trend) => {
    this.props.navigation.navigate('TrendingDetails', { ...trend });
  };

  render() {
    return (
      <View>
      <ScrollView>
        <List>
          {trending.map((trend) => (
            <ListItem
              key={trend.name.title}
              thumbnail
              avatar={{ uri: trend.picture.thumbnail }}
              title={`${trend.name.title.toUpperCase()}`}
              subtitle={trend.description}
              onPress={() => this.onLearnMore(trend)}
            />
          ))}
        </List>
      </ScrollView>
      </View>
    );
  }
}

export default Trending;
