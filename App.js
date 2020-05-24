import React, {Component} from 'react';
import {Alert, StyleSheet, Text, TouchableHighlight, View, TouchableOpacity} from 'react-native';
import {LoginButton, ShareDialog} from 'react-native-fbsdk';
import ImagePicker from 'react-native-image-crop-picker';

const SHARE_LINK_CONTENT = {
  contentType: 'link',
  contentUrl: 'https://www.facebook.com/',
};

export default class App extends Component<{}> {

  constructor() {
    super();
    this.state = {
      images: null,
      userInfo: {}
    };
  }

  pickMultiple() {
    ImagePicker.openPicker({
      multiple: true
    }).then(images => {
      console.log(images);
    }).catch(e => alert(e));
  }

  _shareLinkWithShareDialog = async () => {
    const canShow = await ShareDialog.canShow(SHARE_LINK_CONTENT);
    if (canShow) {
      try {
        const {isCancelled, postId} = await ShareDialog.show(
          SHARE_LINK_CONTENT,
        );
        if (isCancelled) {
          Alert.alert('Share cancelled');
        } else {
          Alert.alert('Share success with postId: ' + postId);
        }
      } catch (error) {
        Alert.alert('Share fail with error: ' + error);
      }
    }
  };

  render() {
    return (
      <View style={styles.container}>

        <TouchableOpacity onPress={this.pickMultiple.bind(this)} style={{backgroundColor:'green',height:50,width:100,alignContent:'center'}}>
          <Text style={{paddingTop:14}}>Choose photo</Text>
        </TouchableOpacity>
        
        <LoginButton
          onLoginFinished={(error, data) => {
            console.log('AAAA');
            setTimeout(() => {
              Alert.alert(JSON.stringify(error || data, null, 2));
            }, 1000);
          }}
        />
        <TouchableHighlight onPress={this._shareLinkWithShareDialog}>
          <Text style={styles.shareText}>Share link with ShareDialog</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  shareText: {
    fontSize: 20,
    margin: 10,
  },
});
