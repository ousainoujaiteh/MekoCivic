import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { citizenship } from './LawsData';
import { List, ListItem } from 'react-native-elements';
import { Container, Header, Content, Title,Icon,Right,Left,Button,Body} from 'native-base';
class Citizenship extends Component {
  onLearnMore = (citizen) => {
    this.props.navigation.navigate('CitizenshipDetail', { ...citizen });
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
            <Title> Citizenship </Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
      <ScrollView>
        <List>
          {citizenship.map((citizen) => (
            <ListItem
              //key={citizen.name.title}
              thumbnail
            //  title={`${citizen.name.title.toUpperCase()}`}
              subtitle={citizen.description}
              onPress={() => this.onLearnMore(citizen)}
            />
          ))}
        </List>
      </ScrollView>
        </View>
    );
  }
}

export default Citizenship;

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:22,
  },
});
