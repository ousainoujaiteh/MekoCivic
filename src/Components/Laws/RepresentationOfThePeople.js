import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { representation } from './LawsData';
import { List, ListItem } from 'react-native-elements';
import { Container, Header, Content, Title,Icon,Right,Left,Button,Body} from 'native-base';
class RepresentationOfThePeople extends Component {
  onLearnMore = (represent) => {
    this.props.navigation.navigate('RepresentationOfThePeopleDetails', { ...represent });
  };

  render() {
      const { goBack }  = this.props.navigation;
    return (
      <View style={styles.container}>
      <Header  style={{ backgroundColor:'#A11C1C'}}>
          <Left>
            <Button transparent
              onPress={() => goBack()}
            >
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Representation Of The People</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
      <ScrollView>
        <List>
          {representation.map((represent) => (
            <ListItem
              key={represent.name.title}
              thumbnail
              title={`${represent.name.title.toUpperCase()}`}
              subtitle={represent.description}
              onPress={() => this.onLearnMore(represent)}
            />
          ))}
        </List>
      </ScrollView>
        </View>
    );
  }
}

export default RepresentationOfThePeople;

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:22,
  },
});
