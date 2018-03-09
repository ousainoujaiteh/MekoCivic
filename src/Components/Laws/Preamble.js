import React, { Component } from 'react';
import ViewMoreText from 'react-native-view-more-text';
import { Tile, List, ListItem } from 'react-native-elements';
import { View ,ScrollView ,Image,Text , StyleSheet} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body ,Item, Input, Icon,Left ,Right, Title, Button,} from 'native-base';
class Preamble extends Component {

  render() {
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
            <Title>Preamble</Title>
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
              <Text>{}</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={styles.text}>
                  In the name of God, the Almighty.
                  We the people of The Gambia have accomplished a great and historic task. We have had
                  our say on how we should be governed. For this Constitution contains our will and
                  resolve for good governance and a just, secure and prosperous society.
                  Our hopes and aspirations as a people were reflected in the enthusiasm and zeal with
                  which we embarked on the task of nation building on the attainment of independence.
                  The self-perpetuating rule of the recent past, however, soon gave rise to the abuse of
                  office and related vices which negated the total welfare of the Gambian people. Thesovereign people of The Gambia therefore endorsed the change of government on 22 nd
                  July 1994 to rectify such evils.
                  This Constitution provides for us a fundamental Law, which affirms our commitment to
                  freedom, justice, probity and accountability. It also affirms the principle that all power
                  emanate from the sovereign will of the people.
                  The fundamental rights and freedoms enshrined in this Constitution will ensure for all
                  time respect for and observance of human rights and fundamental freedoms for all,
                  without distinction as to ethnic considerations, gender, language or religion. In
                  acknowledging our fundamental rights we also affirm our duties and responsibilities as
                  citizens of this Country.
                  This Constitution guarantees participatory democracy that reflects the undiluted choice of
                  the people. The functions of the arms of government have been clearly defined, their
                  independence amply secured with adequate checks and balances to ensure that they all
                  work harmoniously together toward our common good.
                  As we usher in the Second Republic and beyond we give ourselves and generations of
                  Gambians yet unborn this Constitution as a beacon of hope for peace and stability in our
                  society and the good governance of The Gambia for all time.
                  In this spirit, we continue to pledge our firm allegiance to our beloved Country and pray
                  that the Great God of Nations will keep us all ever true to The Gambia.
                </Text>
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

export default Preamble;



const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:22,
  },
  text:{
    fontSize:20,
    lineHeight:25,
    fontFamily: 'sans-serif',
  }
});
