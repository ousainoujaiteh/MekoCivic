import React from 'react'
import Post from './Post'
import { graphql, gql } from 'react-apollo'
import {
  View,
  TouchableHighlight,
  ListView,
  Modal,
  StyleSheet,
  Text
} from 'react-native'
import CreatePage from './CreatePage'
import { Container, Header, Content, List, ListItem, Separator ,Right,Icon, Button, Title,Left,Body} from 'native-base';
const allPostsQuery = gql`
  query {
    allPosts(orderBy: createdAt_DESC) {
      id
      imageUrl
      description
      createdAt
      authors {
        id
        firstName
        lastName
      }
    }
  }`

const createAuthorMutation = gql`
    mutation createAuthor($firstName: String! , $lastName: String!){
      createAuthor(firstName : $firstName, lastName : $lastName){
        id
        firstName
        lastName
      }
    }`

class ListPage extends React.Component {

  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows([]),
      modalVisible: false,
      user: undefined,
    }

  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.allPostsQuery.loading && !nextProps.allPostsQuery.error) {
      const {dataSource} = this.state
      this.setState({
        dataSource: dataSource.cloneWithRows(nextProps.allPostsQuery.allPosts),
      })
    }
  }

  render () {

    const { goBack} = this.props.navigation;

    if (this.props.allPostsQuery.loading) {
      return (<Text>Loading</Text>)
    }

    return (
      <View style={styles.container}>
      <Header style={{ backgroundColor:'#A11C1C'}}>
          <Left>
            <Button transparent
            onPress={ () => goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Post</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
        <Modal
          animationType='slide'
          transparent={true}
          visible={this.state.modalVisible}
        >
          <CreatePage
            onComplete={() => {
              this.props.allPostsQuery.refetch()
              this.setState({modalVisible: false})
          }}/>
        </Modal>

        <ListView
          enableEmptySections={true}
          dataSource={this.state.dataSource}
          renderRow={(post) => (
            <Post
              description={post.description}
              imageUrl={post.imageUrl}
              createdAt={post.createdAt}
            />
          )}
        />
        <TouchableHighlight
          style={styles.createPostButtonContainer}
          onPress={this._createPost}
        >
          <Text style={styles.createPostButton}>Create Post</Text>
        </TouchableHighlight>
      </View>
    )
  }

  _createPost = () => {
    // this.props.router.push('/create');
    this.setState({modalVisible: true})

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  createPostButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  createPostButton: {
    backgroundColor:'#A11C1C',
    color: 'white',
    textAlign: 'center',
    fontSize: 22,
    height: 60,
    width: 480,
    paddingTop: 18,
  }
})
const ListPageWithData = graphql(allPostsQuery, {name: 'allPostsQuery'})(ListPage)
export default ListPageWithData
