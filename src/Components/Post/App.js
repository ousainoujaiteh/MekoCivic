import React from 'react'
import { ApolloProvider, createNetworkInterface, ApolloClient } from 'react-apollo'
import ListPage from './src/Components/Post/ListPage'
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

export default class App extends React.Component {

    render() {
        return ( <ApolloProvider client = { client } >
            <ListPage / >
            </ApolloProvider>
        )
    }

}
