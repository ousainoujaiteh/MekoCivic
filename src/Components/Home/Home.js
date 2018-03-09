import React, { Component } from 'react';
import Expo from 'expo';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  Container,
  Header, Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  H2,
  Footer,
  FooterTab,
  Content,
} from 'native-base';

import { List, ListItem,SearchBar} from 'react-native-elements';


import BottomNavigation from '../BottomNavigation/BottomNavigation';

import Slideshow from 'react-native-slideshow';

export default class HomeScreen extends React.Component {

  static navigationOptions = {
   header:null,
  }

 render() {
   const list = [
   {
     name: 'We will make Agriculture great again – OJ',
     avatar_url: 'http://standard.gm/site/wp-content/uploads/2016/05/OJ-728x410.jpg',
     subtitle: ''

   },
   {
     name: 'I WAS OFFERED MILLIONS TO TOPPLE JAMMEH',
     avatar_url: 'http://standard.gm/site/wp-content/uploads/2017/11/cds-and-jammeh-728x410.jpg',
     subtitle: ''
   },
   {
     name: 'Samba says Jammeh was a mad dictator',
     avatar_url: 'http://standard.gm/site/wp-content/uploads/2017/10/samba-728x410.jpg',
     subtitle: ''
   },



 ]
   const { navigate } = this.props.navigation;
   return (
     <View style={styles.container}>
     <Header  style={{ backgroundColor:'#A11C1C'}}>
         <Body>
           <Title>Home</Title>
         </Body>
         <Right>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Right>
       </Header>

       <View style={styles.loginForm}>
           <SlideshowTest />

        <Text style={{fontSize:25, padding:18 , backgroundColor:'white' ,marginBottom:-15}}>Featured News</Text>
          <ScrollView>
        <List containerStyle={{marginTop: 15}}>
         {
          list.map((l, i) => (
            <ListItem
              style={{padding:15}}
              thumbnail
              avatar={{uri:l.avatar_url}}
              key={i}
              title={l.name}
              category={l.category}
              subtitle={l.subtitle}
              onPress={() => navigate('Bulletin')}
            />
          ))
        }
      </List>
       </ScrollView>
       </View>

        <Container  style={{marginTop:-52}}>
          <Content/>
          <Footer>
            <FooterTab  style={{ backgroundColor:'#A11C1C'}}>
              <Button
                vertical
                onPress={() => navigate('Home')}>
                <Icon name="home" />
                <Text style={styles.navText}>Home</Text>
              </Button>
              <Button
                vertical
                onPress={() => navigate('News')}>
                <Icon name="grid" />
                <Text style={styles.navText}>News</Text>
              </Button>
              <Button vertical onPress={() => navigate('Laws')}>
                <Icon active name="paper" />
                <Text style={styles.navText}>Laws</Text>
              </Button>
              <Button vertical onPress={() => navigate('Services')}>
                <Icon name="star-half" />
                <Text style={styles.navText}>Services</Text>
              </Button>

            </FooterTab>
          </Footer>
        </Container>
     </View>
   );
 }
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop:22
  },
  Icontainer: {
    flex: 5,
    marginTop:20,
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch', // or 'stretch',
    justifyContent: 'center',
  },

  loginForm: {
    justifyContent:'space-between',
    backgroundColor: 'transparent',
  },

  btn: {
    backgroundColor: 'transparent'
  },
  text:{
    color:'white',
    fontSize:20
  },
  navText:{
    color:'white',
  }
});


 class SlideshowTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      position: 1,
      interval: null,
      dataSource: [
        {
          title: 'Constitution',
          caption: 'Laws of the Land',
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5jN_myvN6CHtCnD4ZCe-K-5m-6fD_KYffcELhWUIA2IQMjnSw0w',
        }, {
          title: ' News Feeds',
          caption: 'Be Updated with the News',
          url: 'data:image/jpeg;base64,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:image/jpeg;base64,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',
        }, {
          title: 'Services',
          caption: 'know the important numbers',
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSorKhmc32xSW_WjPPAD8OFQvQUiuJksr0kiv3gIJR1se7mv2Z',
        },
        {
          title: 'Government',
          caption:'Make yourself familiar with your leaders',
          url:'https://www.freedomnewspaper.com/wp-content/uploads/2016/12/AdamaBarrow.jpg',
        },
      ],
    };
  }

  componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
        });
      }, 3000)
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render() {
    return (
    <Slideshow
        height={250}
        indicatorSize={15}
        dataSource={this.state.dataSource}
        position={this.state.position}
        onPositionChanged={position => this.setState({ position })} />
    );
  }
}
