import React, { Component } from 'react';
import { Image , View ,StyleSheet} from 'react-native';
import ViewMoreText from 'react-native-view-more-text';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Title , Footer, FooterTab } from 'native-base';
export default class Government extends Component {

  renderViewMore(onPress){
    return(
      <Text onPress={onPress}  style={styles.text}>VIEW MORE</Text>
    )
  }

  renderViewLess(onPress){
    return(
      <Text onPress={onPress} style={styles.text}>VIEW LESS</Text>
    )
  }

  render() {
    const { navigate } = this.props.navigation;
    const { goBack } = this.props.navigation;
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
            <Title>Government</Title>
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
        <Text style={{fontSize:25, textAlign: "center"}}>Know Your Leaders</Text>
        <View style={{flex:10}}>
      <Container>
        <Content>
          <Card>
            <CardItem cardBody>
              <Image source={{uri: 'https://www.freedomnewspaper.com/wp-content/uploads/2016/12/AdamaBarrow.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
              <Text style={styles.textName}>H.E Adama Barrow</Text>
              <Text style={{fontSize:20 , paddingTop:10 ,paddingBottom:10}}>The President</Text>
              <ViewMoreText
                  style={{padding:10}}
                  numberOfLines={3}
                  renderViewMore={this.renderViewMore}
                  renderViewLess={this.renderViewLess}>
                  <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con</Text>
              </ViewMoreText>
          </Card>
          <Card>
            <CardItem cardBody>
              <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Aid_for_Trade_Global_Review_2017_%E2%80%93_Day_3_%2835059631424%29.jpg/1200px-Aid_for_Trade_Global_Review_2017_%E2%80%93_Day_3_%2835059631424%29.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
                <Text style={{fontSize:25 , paddingTop:10 ,paddingBottom:5, fontWeight:'bold'}}> H.E. Fatoumatta Tambajang</Text>
              <Text style={{fontSize:20 , paddingTop:10 ,paddingBottom:10}}>Vice President</Text>
              <ViewMoreText
                  style={{padding:10}}
                  numberOfLines={3}
                  renderViewMore={this.renderViewMore}
                  renderViewLess={this.renderViewLess}>
                  <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con</Text>
              </ViewMoreText>
          </Card>

          <Card>
            <CardItem cardBody>
              <Image source={{uri: 'https://www.freedomnewspaper.com/wp-content/uploads/2017/02/Foreign-Minister-Darboe.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
              <Text style={styles.textName}> Hon Ousainou Darboe</Text>
              <Text style={{fontSize:20 , paddingTop:10 ,paddingBottom:10}}> Minister of Foreign Affairs</Text>
              <ViewMoreText
                  style={{padding:10}}
                  numberOfLines={3}
                  renderViewMore={this.renderViewMore}
                  renderViewLess={this.renderViewLess}>
                  <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con</Text>
              </ViewMoreText>
          </Card>

          <Card>
            <CardItem cardBody>
              <Image source={{uri: 'https://www.freedomnewspaper.com/wp-content/uploads/2017/02/Amadou-Sanneh-sworn-edited-.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
                <Text style={styles.textName}> Hon Amadou Sanneh</Text>
              <Text style={{fontSize:20 , paddingTop:10 ,paddingBottom:10}}> Minister of Finance and Economic Affairs </Text>
              <ViewMoreText
                  style={{padding:10}}
                  numberOfLines={3}
                  renderViewMore={this.renderViewMore}
                  renderViewLess={this.renderViewLess}>
                  <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con</Text>
              </ViewMoreText>
          </Card>

          <Card>
            <CardItem cardBody>
              <Image source={{uri: 'http://fatunetwork.net/wp-content/uploads/2017/02/Ba-Tambedou-1132x670.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
                <Text style={styles.textName}> Hon Ba Tambedou</Text>
              <Text style={{fontSize:20 , paddingTop:10 ,paddingBottom:10}}> Minister of Justice</Text>
              <ViewMoreText
                  style={{padding:10}}
                  numberOfLines={3}
                  renderViewMore={this.renderViewMore}
                  renderViewLess={this.renderViewLess}>
                  <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con</Text>
              </ViewMoreText>
          </Card>


          <Card>
            <CardItem cardBody>
              <Image source={{uri: 'http://www.sunugambia.com/wp-content/uploads/2017/05/hamat-bah-e1494409795645.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
                <Text style={styles.textName}> Hon Hamad Bah</Text>
              <Text style={{fontSize:20 , paddingTop:10 ,paddingBottom:10}}> Minister of Tourism & Culture  </Text>
              <ViewMoreText
                  style={{padding:10}}
                  numberOfLines={3}
                  renderViewMore={this.renderViewMore}
                  renderViewLess={this.renderViewLess}>
                  <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con</Text>
              </ViewMoreText>
          </Card>


          <Card>
            <CardItem cardBody>
              <Image source={{uri: 'https://www.freedomnewspaper.com/wp-content/uploads/2017/04/OJ-Talks-Tough-1132x670.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
                <Text style={styles.textName}> Hon Omar Jallow</Text>
              <Text style={{fontSize:20 , paddingTop:10 ,paddingBottom:10}}> Minister of  Agriculture </Text>
              <ViewMoreText
                  style={{padding:10}}
                  numberOfLines={3}
                  renderViewMore={this.renderViewMore}
                  renderViewLess={this.renderViewLess}>
                  <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con</Text>
              </ViewMoreText>
          </Card>


          <Card>
            <CardItem cardBody>
              <Image source={{uri: 'https://www.mediasupport.org/wp-content/uploads/2017/09/Demba-Ali-Jawo_minister-of-Information_the-Gambia_17-August-2017-e1504776184908.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
                <Text style={styles.textName}> Hon Demba Ali Jawo</Text>
              <Text style={{fontSize:20 , paddingTop:10 ,paddingBottom:10}}>Minister of Information & Communications </Text>
              <ViewMoreText
                  style={{padding:10}}
                  numberOfLines={3}
                  renderViewMore={this.renderViewMore}
                  renderViewLess={this.renderViewLess}>
                  <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con</Text>
              </ViewMoreText>
          </Card>


          <Card>
            <CardItem cardBody>
              <Image source={{uri: 'http://www.motie.gov.gm/sites/default/files/styles/flexslider_full/public/slideshow/slide-image-1.jpg?itok=rDasZ8e4'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
               <Text style={styles.textName}> Hon Isatou Touray</Text>
              <Text style={{fontSize:20 , paddingTop:10 ,paddingBottom:10}}> Minister of Trade & Employement</Text>
              <ViewMoreText
                  style={{padding:10}}
                  numberOfLines={3}
                  renderViewMore={this.renderViewMore}
                  renderViewLess={this.renderViewLess}>
                  <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con</Text>
              </ViewMoreText>
          </Card>




          <Card>
            <CardItem cardBody>
              <Image source={{uri: 'http://www.cmf.ch/AffichePhotoCrop3.php?src=uploadz/images/GT9AP2B6EEZCEK66ORDKCZDRB1JPFF.jpg&h=155&w=250&q=65&zc=1'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
               <Text style={styles.textName}>Hon Saffie Lowe-Ceesay</Text>
              <Text style={{fontSize:20 , paddingTop:10 ,paddingBottom:10}}>Minister of Health and Social Welfare</Text>
              <ViewMoreText
                  style={{padding:10}}
                  numberOfLines={3}
                  renderViewMore={this.renderViewMore}
                  renderViewLess={this.renderViewLess}>
                  <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con</Text>
              </ViewMoreText>
          </Card>

          <Card>
            <CardItem cardBody>
              <Image source={{uri: 'https://www.freedomnewspaper.com/wp-content/uploads/2017/02/HENDRY-GOMEZ-MINISTER.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
                <Text style={styles.textName}> Hon Hendry Gomez</Text>
              <Text style={{fontSize:20 , paddingTop:10 ,paddingBottom:10}}>Youth & Sports  Minister</Text>
              <ViewMoreText
                  style={{padding:10}}
                  numberOfLines={3}
                  renderViewMore={this.renderViewMore}
                  renderViewLess={this.renderViewLess}>
                  <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con</Text>
              </ViewMoreText>
          </Card>



          <Card>
            <CardItem cardBody>
              <Image source={{uri: 'http://www.sunugambia.com/wp-content/uploads/2017/08/badara-joof-e1502209242582.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
              <Text style={styles.textName}>Hon Badara Joof</Text>
              <Text style={{fontSize:20 , paddingTop:10 ,paddingBottom:10}}>Minister Of Higher Education</Text>
              <ViewMoreText
                  style={{padding:10}}
                  numberOfLines={3}
                  renderViewMore={this.renderViewMore}
                  renderViewLess={this.renderViewLess}>
                  <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con</Text>
              </ViewMoreText>
          </Card>




          <Card>
            <CardItem cardBody>
              <Image source={{uri:'http://www.showbizwall.com/uploads/6/9/9/0/6990223/published/claudiana-cole2.jpeg?1488224164'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
              <Text style={styles.textName}> Hon Claudiana Cole</Text>
              <Text style={{fontSize:20 , paddingTop:10 ,paddingBottom:10}}>Minister Of Basic and Secondary Education</Text>
              <ViewMoreText
                  style={{padding:10}}
                  numberOfLines={3}
                  renderViewMore={this.renderViewMore}
                  renderViewLess={this.renderViewLess}>
                  <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con</Text>
              </ViewMoreText>
          </Card>



          <Card>
            <CardItem cardBody>
              <Image source={{uri: 'http://media.gettyimages.com/photos/minister-of-energy-and-petroleum-of-gambia-fafa-sanyang-delivers-a-picture-id692881260?k=6&m=692881260&s=612x612&w=0&h=rzBlfPZr4W5wCW3Vh7V6WaSq74S7UX3DBHxIiuYRl9c='}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
              <Text style={styles.textName}> Hon Fafa Sanyang</Text>
              <Text style={{fontSize:20 , paddingTop:10 ,paddingBottom:10}}>Minister Of Energy and Petroleum</Text>
              <ViewMoreText
                  style={{padding:10}}
                  numberOfLines={3}
                  renderViewMore={this.renderViewMore}
                  renderViewLess={this.renderViewLess}>
                  <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con</Text>
              </ViewMoreText>
          </Card>



          <Card>
            <CardItem cardBody>
              <Image source={{uri: 'http://www.sunugambia.com/wp-content/uploads/2017/03/James-FP-Gomez.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
              <Text style={styles.textName}> Hon James FP Gomez</Text>
              <Text style={{fontSize:20 , paddingTop:10 ,paddingBottom:10}}>Minister Fisheries and Water Resources</Text>
              <ViewMoreText
                  style={{padding:10}}
                  numberOfLines={3}
                  renderViewMore={this.renderViewMore}
                  renderViewLess={this.renderViewLess}>
                  <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con</Text>
              </ViewMoreText>
          </Card>




          <Card>
            <CardItem cardBody>
              <Image source={{uri: 'http://thepoint.gm/_library/2017/8/bai_lamin_jobe-1-s.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
              <Text style={styles.textName}>Hon Bai Lamin Jobe</Text>
              <Text style={{fontSize:20 , paddingTop:10 ,paddingBottom:10}}>Minister Work and Infrastructure</Text>
              <ViewMoreText
                  style={{padding:10}}
                  numberOfLines={3}
                  renderViewMore={this.renderViewMore}
                  renderViewLess={this.renderViewLess}>
                  <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con</Text>
              </ViewMoreText>
          </Card>



          <Card>
            <CardItem cardBody>
              <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy0tHWAvEQ2pelzpkb4u59JMgIZmrJbqXg-QZAFKreA4f0NRZLZA'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
              <Text style={styles.textName}>Hon Lamin B. Dibba</Text>
              <Text style={{fontSize:20 , paddingTop:10 ,paddingBottom:10}}>Minister Environment and Forestry</Text>
              <ViewMoreText
                  style={{padding:10}}
                  numberOfLines={3}
                  renderViewMore={this.renderViewMore}
                  renderViewLess={this.renderViewLess}>
                  <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con</Text>
              </ViewMoreText>
          </Card>


          <Card>
            <CardItem cardBody>
              <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMsIy2P8PBB_DBYPa2mWM-hggnoj5W33wM4vyS8MOWzjF2tSiMKA'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
              <Text style={styles.textName}>Hon Lamin M. Dibba</Text>
              <Text style={{fontSize:20 , paddingTop:10 ,paddingBottom:10}}>Minister Local Government and Lands</Text>
              <ViewMoreText
                  style={{padding:10}}
                  numberOfLines={3}
                  renderViewMore={this.renderViewMore}
                  renderViewLess={this.renderViewLess}>
                  <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con</Text>
              </ViewMoreText>
          </Card>


        </Content>
      </Container>
      </View>
      <View>
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
  },
  text:{
    backgroundColor:'#A11C1C',
    color:'white',
    fontSize: 15,
    padding :10,
    textAlign:'center',
    marginTop:20,
  },

  textName:{
    fontSize:25 ,
    paddingTop:10 ,
    paddingBottom:5,
    fontWeight:'bold'
  },
});
