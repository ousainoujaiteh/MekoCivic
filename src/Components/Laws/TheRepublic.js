import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { republic } from './LawsData';
import { List, ListItem } from 'react-native-elements';
import { Container, Header, Content, Title,Icon,Right,Left,Button,Body} from 'native-base';
class TheRepublic extends Component {
  onLearnMore = (rep) => {
    this.props.navigation.navigate('RepublicDetail', { ...rep });
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
            <Title> The Republic</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
      <ScrollView>
        <List>
          {republic.map((rep) => (
            <ListItem
              key={rep.name.title}
              thumbnail
              title={`${rep.name.title.toUpperCase()}`}
              subtitle={rep.description}
              onPress={() => this.onLearnMore(rep)}
            />
          ))}
        </List>
      </ScrollView>
        </View>
    );
  }
}

export default TheRepublic;

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:22,
  },
});
