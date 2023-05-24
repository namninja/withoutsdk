import {StyleSheet, SafeAreaView, Linking} from 'react-native';
import React, {useState, useEffect} from 'react';

import MainScreen from './screens/MainScreen';
import Colors from './utils/constants/colors';
import {iterableAPIKey} from './Config';
import {initializeApp} from 'firebase/app';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    Linking.getInitialURL().then(url => {
      if (url != null) {
        console.log(url);
      }
    });
    Linking.addEventListener('url', event => {
      if (event.url != null) {
        console.log(event.url);
      }
    });
    // ITERABLE:
    this.urlHandler = (url, context) => {
      console.log(`urlHandler, url: ${url}`);
      let match = url.match(/menu\/([^\/]+)/i);
      if (match && match.length > 1) {
        this.myMatch = match[1];
        console.log(`match, match: ${this.myMatch}`);
        return true;
      } else {
        console.log('opening external url');
        return false;
      }
    };

    // TODO: Replace the following with your app's Firebase project configuration
    const firebaseConfig = {
      //...
    };

    const app = initializeApp(firebaseConfig);
  }

  render() {
    let screen = <MainScreen />;
    return <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>;
  }
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
