import React , { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import ViewMoreText from 'react-native-view-more-text';
import { View , ScrollView ,TouchableOpacity ,StyleSheet} from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Separator ,Right,Icon, Button, Title,Left,Body, Footer, FooterTab} from 'native-base';


export default class Events extends Component {
  static navigationOptions = {
   header:null,
  }

  renderViewMore(onPress){
    return(
      <Text onPress={onPress} style={styles.text}>View Details</Text>
    )
  }

  renderViewLess(onPress){
    return(
      <Text onPress={onPress} style={styles.text} >View Less</Text>
    )
  }

  render(){
      return(
        <View style={styles.container }>
        <ScrollView>
        <ListItem  style={styles.list}>
          <Left>
            <Text style={styles.date}>18</Text>
            <Text></Text>
            <Text>Feb</Text>
          </Left>
          <Body>
            <ViewMoreText
                style={{padding:10}}
                numberOfLines={1}
                renderViewMore={this.renderViewMore}
                renderViewLess={this.renderViewLess}>
                <Text> Independence Day This is day when Gambia gain her independence</Text>
            </ViewMoreText>
          </Body>

          </ListItem>

          <ListItem  style={styles.list}>
            <Left>
              <Text style={styles.date}>1</Text>
              <Text></Text>
              <Text>May</Text>
            </Left>
            <Body>
              <ViewMoreText
                  style={{padding:10}}
                  numberOfLines={1}
                  renderViewMore={this.renderViewMore}
                  renderViewLess={this.renderViewLess}>
                  <Text> Workers Day This is day when when all workers celebrate</Text>
              </ViewMoreText>
            </Body>

            </ListItem>

            <ListItem  style={styles.list}>
              <Left>
                <Text style={styles.date}>8</Text>
                <Text></Text>
                <Text>March</Text>
              </Left>
              <Body>
                <ViewMoreText
                    style={{padding:10}}
                    numberOfLines={1}
                    renderViewMore={this.renderViewMore}
                    renderViewLess={this.renderViewLess}>
                    <Text> Womens Day This is day when when all women celebrate  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
                </ViewMoreText>
              </Body>

            </ListItem>

            <ListItem  style={styles.list}>
              <Left>
                <Text style={styles.date}>25</Text>
                <Text></Text>
                <Text>May</Text>
              </Left>
              <Body>
                <ViewMoreText
                    style={{padding:10}}
                    numberOfLines={1}
                    renderViewMore={this.renderViewMore}
                    renderViewLess={this.renderViewLess}>
                    <Text> African Liberation Day This is day when when all women celebrate  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
                </ViewMoreText>
              </Body>

              </ListItem>

              <ListItem  style={styles.list}>
                <Left>
                  <Text style={styles.date}>1</Text>
                  <Text></Text>
                  <Text>Jan</Text>
                </Left>
                <Body>
                  <ViewMoreText
                      style={{padding:10}}
                      numberOfLines={1}
                      renderViewMore={this.renderViewMore}
                      renderViewLess={this.renderViewLess}>
                      <Text> New Years Day This is day when when all women celebrate  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                  </ViewMoreText>
                </Body>
                </ListItem>



                <ListItem  style={styles.list}>
                  <Left>
                    <Text style={styles.date}>1</Text>
                    <Text></Text>
                    <Text>Sawal</Text>
                  </Left>
                  <Body>
                    <Text>Koriteh Day</Text>
                  </Body>
                  </ListItem>




                  <ListItem  style={styles.list}>
                    <Left>
                      <Text style={styles.date}>10</Text>
                      <Text></Text>
                      <Text>Eidu Adha</Text>
                    </Left>
                    <Body>
                      <Text>Tobaski Day</Text>
                    </Body>
                    </ListItem>

          </ScrollView>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  list:{
    paddingTop:20 ,
    paddingBottom:25,
    marginLeft :0 ,
    marginRight:0,
    marginBottom: 5,
  },
  container:{
    flex:1,
    paddingTop:22,
  },
  date:{
    backgroundColor:'#A11C1C',
    padding:20,
    color:'white',
    borderRadius:100,
  },
  text:{
    backgroundColor:'#A11C1C',
    color:'white',
    fontSize: 15,
    padding :10,
    textAlign:'center',
    marginTop:10,
  },
});
