import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import { Container, Header, Content, Card, CardItem, Body ,Item, Input, Icon,Left ,Right, Title, Button,} from 'native-base';
export default class Post extends React.Component {

  state = {
    width: 0,
    height: 0,
  }

  componentDidMount() {
    Image.getSize(this.props.imageUrl, (width, height) => {
      const imageHeight =  250
      const scaleFactor = height / imageHeight
      const imageWidth = width / scaleFactor
      this.setState({width: imageWidth, height: imageHeight})
    })
  }

  render () {
    const {width, height} = this.state
    return (
      <View>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: this.props.imageUrl }}
            style={{width, height}}
            resizeMode='contain'
          />
        </View>
        <Content>
          <Card>
            <CardItem header>
              <Text>{}</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>{this.props.description}</Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>{this.props.createdAt}</Text>
            </CardItem>
         </Card>
        </Content>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.07)'
  },
  title: {
    padding: 22,
    color: 'rgba(0,0,0,.8)',
    fontWeight: '300',
    fontSize: 16,
  },
})
