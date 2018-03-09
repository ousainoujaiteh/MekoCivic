import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { fundamentalRights } from './LawsData';
import { List, ListItem } from 'react-native-elements';
import { Container, Header, Content, Title,Icon,Right,Left,Button,Body} from 'native-base';
class FundamentalRights extends Component {
  onLearnMore = (rights) => {
    this.props.navigation.navigate('FundamentalRightsDetail', { ...rights });
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
            <Title>Fundamental Rights and Freedoms</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
      <ScrollView>
        <List>
          {fundamentalRights.map((rights) => (
            <ListItem
              key={rights.name.title}
              thumbnail
              title={`${rights.name.title.toUpperCase()}`}
              subtitle={rights.description}
              onPress={() => this.onLearnMore(rights)}
            />
          ))}
        </List>
      </ScrollView>
        </View>
    );
  }
}

export default FundamentalRights;

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:22,
  },
});
