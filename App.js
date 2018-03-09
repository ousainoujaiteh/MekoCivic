import Expo from 'expo';
import React, { Component } from 'react';
import { Root , Drawer} from './config/router';
import {
  Asset,
  AppLoading,
} from 'expo';
import { ApolloProvider, createNetworkInterface, ApolloClient } from 'react-apollo'
import {
    View,
    TextInput,
    Button,
    Image,
    Text,
    StyleSheet,
    TouchableHighlight
} from 'react-native'


// __SIMPLE_API_ENDPOINT_ looks similar to: `https://api.graph.cool/simple/v1/<PROJECT_ID>`
const networkInterface = createNetworkInterface({ uri: 'https://api.graph.cool/simple/v1/cj69ojt6p08690196b7qwi1h2' })
const client = new ApolloClient({ networkInterface })

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      isReady:false
    };
  }
  async componentWillMount() {
   await Expo.Font.loadAsync({
     Roboto: require("native-base/Fonts/Roboto.ttf"),
     Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
     Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
   });

   this.setState({ isReady: true });
 }
  render() {
     if (!this.state.isReady) {
       return <AppLoading />;
     }

     return ( <ApolloProvider client = { client } >
         <Root />
         </ApolloProvider>
     )
  }
}




/*import React from 'react'
import { ApolloProvider, createNetworkInterface, ApolloClient } from 'react-apollo'
import ListPage from './src/Components/Post/ListPage'
import CreatePage from './src/Components/Post/CreatePage';
import {
    View,
    TextInput,
    Button,
    Image,
    Text,
    StyleSheet,
    TouchableHighlight
} from 'react-native';
import {
  Asset,
  AppLoading,
} from 'expo';


// __SIMPLE_API_ENDPOINT_ looks similar to: `https://api.graph.cool/simple/v1/<PROJECT_ID>`
const networkInterface = createNetworkInterface({ uri: 'https://api.graph.cool/simple/v1/cj69ojt6p08690196b7qwi1h2' })
const client = new ApolloClient({ networkInterface })

export default class App extends React.Component {


  constructor(){
    super();
    this.state = {
      isReady:false
    };
  }
  async componentWillMount() {
   await Expo.Font.loadAsync({
     Roboto: require("native-base/Fonts/Roboto.ttf"),
     Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
     Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
   });

   this.setState({ isReady: true });
 }

    render() {
      if (!this.state.isReady) {
        return <AppLoading />;
      }
        return ( <ApolloProvider client = { client } >
            <ListPage / >
            </ApolloProvider>
        )
    }

}

*/
