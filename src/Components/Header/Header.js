import React , { Component } from 'react';
import { View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Container, Header,Content,Title,Icon,Right,Left,Button,Body} from 'native-base';

export default class HeaderComponent extends Component {
  render(){
    const { goBack} = this.props.navigation;
    return(
      <Header  style={{ backgroundColor:'#A11C1C' ,borderRadius:3}}>
          <Left>
            <Button transparent
              onPress={() => goBack()}
            >
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>{this.props.name}</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
    );
  }
}
