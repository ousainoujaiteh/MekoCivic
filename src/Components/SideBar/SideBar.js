import React , {Component} from "react";
import { AppRegistry, Image, StatusBar , StyleSheet } from "react-native";
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon
} from "native-base";
const routes = ["Home", "Laws", "News", "Services", "Government" , "NationalEvents"];
export default class SideBar extends Component {
  render() {
    return (
      <Container>
        <Content  style={{backgroundColor:'#A11C1C'}}>
          <Image
            source={{
              uri: "https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/drawer-cover.png"
            }}
            style={{
              height: 22,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center"
            }}
          >

          </Image>
          <Text  style={styles.menuHead}>MAIN MENU</Text>
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                   style={{backgroundColor:'#A11C1C'}}
                  button
                  onPress={() => this.props.navigation.navigate(data)}
                >
                  <Text  style={{color:'white', fontWeight:'bold',fontSize:15}}>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}



const styles =  StyleSheet.create({

  menuHead:{

    fontWeight:'bold',fontSize:15,
    color:'black' ,
    backgroundColor:'white' ,
    padding:10,
  },
});


/*

  logo
  <Image
    square
    style={{ height: 80, width: 70 }}
    source={{
      uri: "http://facebook.github.io/react/img/logo_og.png"
    }}
  />

*/
