import React , { Component} from 'react';
import Bulletin from '../screens/Bulletin';
import Trending from '../screens/Trending';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
export default class NewMain extends Component{
  render(){
    return(
      <Container  style={{ backgroundColor:'#A11C1C'}}>
        <Tabs initialPage={1}>
          <Tab heading="Bulletin">
            <Bulletin />
          </Tab>
          <Tab heading="Trending">
            <Trending />
          </Tab>

        </Tabs>
      </Container>
    );

  }
}
