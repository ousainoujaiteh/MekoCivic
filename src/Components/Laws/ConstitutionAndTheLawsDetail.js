import React, { Component } from 'react';
import ViewMoreText from 'react-native-view-more-text';
import { Tile, List, ListItem } from 'react-native-elements';
import { View ,ScrollView ,Image,Text , StyleSheet} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body ,Item, Input, Icon,Left ,Right, Title, Button,} from 'native-base';

class ConstitutionAndTheLawsDetail extends Component {

  render() {
    const {  name, description, secdescription , thidescription,foudescription ,fifdescription , sixdescription} = this.props.navigation.state.params;
    const { goBack } = this.props.navigation;
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
              <Text>{name.subtitle}</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={styles.text}>{description}</Text>
                <Text></Text>
                <Text style={styles.text}>{secdescription}</Text>
                <Text style={styles.text}>{thidescription}</Text>
                <Text></Text>
                <Text style={styles.text}>{foudescription}</Text>
                <Text style={styles.text}>{fifdescription}</Text>
                <Text></Text>
                <Text style={styles.text}>{sixdescription}</Text>
              </Body>
            </CardItem>
            <CardItem footer>
            </CardItem>
         </Card>
        </Content>
      </View>
    );
  }
}

export default ConstitutionAndTheLawsDetail;



const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:22,
  },
  text:{
    fontSize:20,
    lineHeight:25,
    fontFamily: 'sans-serif',
    marginBottom:10,
  }
});
