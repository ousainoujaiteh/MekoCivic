import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { constitution } from './LawsData';
import { List, ListItem } from 'react-native-elements';
import { Container, Header, Content, Title,Icon,Right,Left,Button,Body} from 'native-base';
class ConstitutionAndTheLaws extends Component {
  onLearnMore = (consti) => {
    this.props.navigation.navigate('ConstitutionAndTheLawsDetail', { ...consti });
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
            <Title> Constitution And The Laws</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
      <ScrollView>
        <List>
          {constitution.map((consti) => (
            <ListItem
              key={consti.name.title}
              thumbnail
              title={`${consti.name.title.toUpperCase()}`}
              subtitle={consti.description}
              onPress={() => this.onLearnMore(consti)}
            />
          ))}
        </List>
      </ScrollView>
        </View>
    );
  }
}

export default ConstitutionAndTheLaws;

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:22,
  },
});
