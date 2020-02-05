import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const list = require('./hot.json');

const Detail: () => React$Node = () => {
  console.log(list);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        
          
          <TouchableOpacity>
            <View style={styles.container}>
              <Image
                style={{
                  paddingVertical: 30,
                  width: 150,
                  height: 150,
                  borderRadius: 75
                }}
                resizeMode='cover'
                source={{
                  uri: 'https://cdn.pixabay.com/photo/2017/08/17/10/47/paris-2650808_960_720.jpg'
                }}
              />
            </View>
          </TouchableOpacity>
        
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    backgroundColor: 'white',
  },

});

export default Detail;