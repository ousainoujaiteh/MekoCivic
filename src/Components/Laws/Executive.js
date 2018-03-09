import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { executive } from './LawsData';
import { List, ListItem } from 'react-native-elements';
import { Container, Header, Content, Title,Icon,Right,Left,Button,Body} from 'native-base';
class Executive extends Component {
  onLearnMore = (exec) => {
    this.props.navigation.navigate('ExecutiveDetail', { ...exec });
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
            <Title> Executive</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
      <ScrollView>
        <List>
          {executive.map((exec) => (
            <ListItem
              key={exec.name.title}
              thumbnail
              title={`${exec.name.title.toUpperCase()}`}
              subtitle={exec.description}
              onPress={() => this.onLearnMore(exec)}
            />
          ))}
        </List>
      </ScrollView>
        </View>
    );
  }
}

export default Executive;

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:22,
  },
});
