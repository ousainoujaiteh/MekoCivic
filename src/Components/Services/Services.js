import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Communications from 'react-native-communications';
import { View , ScrollView ,TouchableOpacity ,StyleSheet} from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Separator ,Right,Icon, Button, Title,Left,Body, Footer, FooterTab} from 'native-base';
export default class Services extends Component {
  static navigationOptions = {
   header:null,
  }
  render() {
    const { navigate } = this.props.navigation;
    const { goBack} = this.props.navigation;
    return (
      <View style={styles.container}>
      <Header style={{ backgroundColor:'#A11C1C' }}>
          <Left>
            <Button transparent
            onPress={ () => goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Services</Title>
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
        <ScrollView>
          <Separator  >
            <Text style={{fontSize:20,paddingTop:20,paddingBottom:20}}>Police</Text>
          </Separator>
          <ListItem icon style={{ marginLeft:0}}>
            <Left>
              <Icon name="ios-call" />
            </Left>
            <Body>
              <Text>Call</Text>
            </Body>
            <Right>
              <TouchableOpacity onPress={() => Communications.phonecall('117', true)}>
              <Text>117</Text>
              </TouchableOpacity>
            </Right>
            </ListItem>

            <Separator  >
              <Text style={{fontSize:20,paddingTop:20,paddingBottom:20}}>Fire Service</Text>
            </Separator>
            <ListItem icon style={{ marginLeft:0}}>
              <Left>
                <Icon name="ios-call" />
              </Left>
              <Body>
                <Text>Call</Text>
              </Body>
              <Right>
                <TouchableOpacity onPress={() => Communications.phonecall('118', true)}>
                <Text>118</Text>
                </TouchableOpacity>
              </Right>
              </ListItem>
              <Separator  >
                <Text style={{fontSize:20,paddingTop:20,paddingBottom:20}}>Ambulance</Text>
              </Separator>
              <ListItem icon style={{ marginLeft:0}}>
                <Left>
                  <Icon name="ios-call" />
                </Left>
                <Body>
                  <Text>Call</Text>
                </Body>
                <Right>
                  <TouchableOpacity onPress={() => Communications.phonecall('16', true)}>
                  <Text>16</Text>
                  </TouchableOpacity>
                </Right>
                </ListItem>

                <Separator  >
                  <Text style={{fontSize:20,paddingTop:20,paddingBottom:20}}>Coast Guard</Text>
                </Separator>
                <ListItem icon style={{ marginLeft:0}}>
                  <Left>
                    <Icon name="ios-call" />
                  </Left>
                  <Body>
                    <Text>Call</Text>
                  </Body>
                  <Right>
                    <TouchableOpacity onPress={() => Communications.phonecall('4497426', true)}>
                    <Text>4497426</Text>
                    </TouchableOpacity>
                  </Right>
                  </ListItem>


                  <Separator  >
                    <Text style={{fontSize:20,paddingTop:20,paddingBottom:20}}>Banjul City Council</Text>
                  </Separator>
                  <ListItem icon style={{ marginLeft:0}}>
                    <Left>
                      <Icon name="ios-call" />
                    </Left>
                    <Body>
                      <Text>Call</Text>
                    </Body>
                    <Right>
                      <TouchableOpacity onPress={() => Communications.phonecall('+220 4227415', true)}>
                      <Text>4497426</Text>
                      </TouchableOpacity>
                    </Right>
                    </ListItem>


                    <Separator  >
                      <Text style={{fontSize:20,paddingTop:20,paddingBottom:20}}>Kanifing Municipal Council</Text>
                    </Separator>
                    <ListItem icon style={{ marginLeft:0}}>
                      <Left>
                        <Icon name="ios-call" />
                      </Left>
                      <Body>
                        <Text>Call</Text>
                      </Body>
                      <Right>
                        <TouchableOpacity onPress={() => Communications.phonecall('+220 4390545', true)}>
                        <Text>4497426</Text>
                        </TouchableOpacity>
                      </Right>
                      </ListItem>


                      <Separator  >
                        <Text style={{fontSize:20,paddingTop:20,paddingBottom:20}}>Brikima Area Council</Text>
                      </Separator>
                      <ListItem icon style={{ marginLeft:0}}>
                        <Left>
                          <Icon name="ios-call" />
                        </Left>
                        <Body>
                          <Text>Call</Text>
                        </Body>
                        <Right>
                          <TouchableOpacity onPress={() => Communications.phonecall(' +220 4484585', true)}>
                          <Text>4497426</Text>
                          </TouchableOpacity>
                        </Right>
                        </ListItem>



          </ScrollView>
          </View>
          <View style={{flex:1}}>
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
