import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body ,Item, Input, Icon,Left ,Right, Title, Button,} from 'native-base';
export default class SpeechDetail extends Component {
  render() {
  const {  name, description , publisher,date} = this.props.navigation.state.params;
  const { goBack } = this.props.navigation;
    return (
      <View style={styles.container}>
      <Header  style={{ backgroundColor:'#A11C1C' ,borderRadius:3}}>
          <Left>
            <Button transparent
              onPress={() => goBack()}
            >
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>{name.title}</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
        <Content>
          <Card>
            <CardItem header>
              <Text>{name.title}</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>{description}</Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text style={{marginRight:10}}>Publisher:</Text>
              <Text>{publisher}</Text>
            </CardItem>
         </Card>
        </Content>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:22,
  },
});
