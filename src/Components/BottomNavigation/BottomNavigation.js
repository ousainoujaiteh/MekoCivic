import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
export default class BottomNavigation extends Component {
  render() {
     const  navigate  = this.props.navigation;

    return (
      <Container  style={{marginTop:-52}}>
        <Content/>
        <Footer>
          <FooterTab  style={{ backgroundColor:'#A11C1C'}}>
            <Button vertical>
              <Icon name="home" />
              <Text>Home</Text>
            </Button>
            <Button vertical onPress={() => navigate('NewsNavigator')}>
              <Icon name="camera" />
              <Text>News</Text>
            </Button>
            <Button vertical >
              <Icon active name="people" />
              <Text>Laws</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Services</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
