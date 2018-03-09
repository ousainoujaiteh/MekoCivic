import React, { Component } from 'react';
import ViewMoreText from 'react-native-view-more-text';
import { Tile, List, ListItem } from 'react-native-elements';
import { View ,ScrollView ,Image,Text , StyleSheet} from 'react-native';
import { Container, Header, Content, Title,Icon,Right,Left,Button,Body} from 'native-base';

class NewsFeedDetail extends Component {

  renderViewMore(onPress){
    return(
      <Text onPress={onPress}  style={{color:'#A11C1C' ,fontSize: 15,padding :10}}>Read more</Text>
    )
  }

  renderViewLess(onPress){
    return(
      <Text onPress={onPress} style={{color:'#A11C1C',fontSize: 15,padding :10}}>Close</Text>
    )
  }

  render() {
    const { picture, name, description } = this.props.navigation.state.params;
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
      <ScrollView>

        <Image
          source={{ uri: picture.large }}
          style={{ height: 300, left: 0, right: 0 }}
          resizeMode="stretch"
        />

        <Text style={styles.title}>{name.title}</Text>
        <Text>{name.date}</Text>

        <ViewMoreText
            style={{padding:10}}
            numberOfLines={10}
            renderViewMore={this.renderViewMore}
            renderViewLess={this.renderViewLess}>
            <Text style={styles.text}>{description}</Text>
        </ViewMoreText>

      </ScrollView>
      </View>
    );
  }
}

export default NewsFeedDetail;



const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:22,
  },
  title:{
    textAlign: "left" ,
    fontSize:25,fontWeight:'bold',
    fontFamily: 'sans-serif',
    padding: 10
  },
  text:{
    fontSize: 15,
    fontFamily: 'sans-serif',
    paddingTop: 1000,
  }
});
