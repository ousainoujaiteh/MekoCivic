import React , {Component} from 'react';
import { graphql, gql } from 'react-apollo';
import { View , StyleSheet, ScrollView,Text , WebView} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { List, ListItem } from 'react-native-elements'
import { Container, Header, Left, Body, Right, Button, Icon, Title,Footer, FooterTab,Content } from 'native-base';

 class Laws extends Component{
  static navigationOptions = {
   header:null,
  }
  render(){
    const list = [

    {
      name: 'Preamble',
      subtitle: 'Preamble'
    },
    {
      name: 'The Republic',
      subtitle: 'TheRepublic'
    },
    {
      name : 'Constitution And The Laws',
      subtitle: 'ConstitutionAndTheLaws'
    },
    {
      name: 'Citizenship',
      subtitle: 'Citizenship'
    },
    {
      name: 'Protection of Fundamentals Rights and Freedoms',
      subtitle: 'FundamentalRights'
    },
    {
      name: 'Representation of the People',
      subtitle: 'RepresentationOfThePeople'
    },
    {
      name: 'The Executive',
      subtitle: 'Executive'
    },
    {
      name: 'The National Assembly and Legislation',
      subtitle: ''
    },
    {
      name: 'The Judicature',
      subtitle: ''
    },
    {
      name: 'Finance',
      subtitle: ''
    },
    {
      name: 'The Ombusman',
      subtitle: ''
    },
    {
      name: 'The Public Service',
      subtitle: ''
    },
    {
      name: 'The Police and The Prison Service',
      subtitle: ''
    },
    {
      name: 'The Armed Forces and the National Intellignece Agency',
      subtitle: ''
    },
    {
      name: 'Land Commission',
      subtitle: ''
    },
    {
      name: 'Local Government and Traditional Rulers',
      subtitle: ''
    },
    {
      name: 'Commission of Inquiry',
      subtitle: ''
    },
    {
      name: 'The Media',
      subtitle: ''
    },
    {
      name: 'Directive of Principal of State Policy',
      subtitle: ''
    },
    {
      name: 'Code of Conduct for Public Officers',
      subtitle: ''
    },
    {
      name: 'Amend of the Constitution',
      subtitle: ''
    },
    {
      name: 'Miscellaneous',
      subtitle: ''
    },
    {
      name: 'Schedule 1 - Dimensions of the National Flag',
      subtitle: ''
    },
    {
      name: 'Schedule 2- Transitional and Consequential Provision',
      subtitle: ''
    },
    {
      name: 'Subsidicing Legislation',
      subtitle: ''
    },
  ]
    const { goBack } = this.props.navigation;
    const  { navigate }  = this.props.navigation;
    return(
      <View style={styles.container}>
      <Header  style={{ backgroundColor:'#A11C1C' ,borderRadius:3}}>
          <Left>
            <Button transparent
              onPress={() => goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Laws</Title>
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
        <View style={{flex:10}}>
        {/*  <WebView
            source={{uri: 'http://thegambiaconstitution.com/'}}
          /> */}

      <List containerStyle={{marginBottom: 20}}>
        {
          list.map((l, i) => (
            <ListItem
              roundAvatar
              key={i}
              title={l.name}
            //  subtitle={l.subtitle}
              onPress={() => navigate(l.subtitle)}
            />
          ))
        }
      </List>


      </View>
      <View>
      <Container  style={{marginTop:-52}}>
        <Content/>
        <Footer>
          <FooterTab  style={{ backgroundColor:'#A11C1C'}}>
            <Button vertical onPress={() => navigate('Home')}>
              <Icon name="home" />
              <Text style={styles.navText}>Home</Text>
            </Button>
            <Button vertical onPress={() => navigate('News')}>
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
    </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  navText:{
    color:'white',
  }
});



export default Laws
