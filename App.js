/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Platform,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  ActivityIndicator,
  FlatList,
  TouchableHighlight, 
  ListView
} from 'react-native';

import {WebView} from 'react-native-webview';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';




const list = require('./hot.json');
const db = list.data.children;

export default class App extends React.Component {

  
  state = {
    WEBVIEW_REF: "weViewRef",
    flag: true,
    url: ''
  };
  
  
 
  FlatListItemSeparator = () => {
    return(
      <View
        style = {{
          alignSelf: "center",
          height: .5,
          width: "90%",
          backgroundColor: "grey",
        }}
      />
    );
  }
  
  
  
  callFun = (item) => {
    this.setState({flag: false});
    this.setState({url: item.data.permalink});
    
  }

  goback = () => {
    this.setState({flag: true});
  }
  
  

  render(){
    console.log(this.state.flag);
    //console.log(db);
    
    if(this.state.flag) {
    return (
    <>
      
      <FlatList
       
        data={ list.data.children }
        
        ItemSeparatorComponent = {this.FlatListItemSeparator}
 
        renderItem={({item}) => 
        
          <TouchableHighlight  activeOpacity = {.5} onPress = {() => this.callFun(item)}>
            <View style={{flex:1, flexDirection: 'row'}}>
    
              <Image style={{
                  width: '30%',
                  height: 100 ,
                  margin: 10,
                  borderRadius : 10
                }}
                source = {{ uri: item.data.url }} />
            
              <Text style={styles.textView} style = {styles.textViewContainer}>{item.data.title}</Text>
 
            </View>
          </TouchableHighlight>
        
        }
 
        keyExtractor={(item, index) => index.toString()}
        
        />
      <StatusBar barStyle="dark-content" />
      
    </>
  )}
  else {
    console.log(this.state.url);
    const str = 'https://reddit.com' + this.state.url;
    console.log(str);
    return(
      <>
      <WebView  source={{uri: str}}
        style={{marginTop: 20}}
      
        // source={{html: '<img src='+ '"' + this.state.url+ '"' + 'alt="Smiley face" height="60%" width="42%">'}}
        // style={{height: '20%', width: '233%',borderRadius : '1000'}}
      />
      <TouchableHighlight onPress = {this.goback}>
        <Text style = {styles.icon}>⬅️</Text>
      </TouchableHighlight>
      </>
    )
  }
}
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
  icon: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
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
  textViewContainer: {
 
    textAlignVertical:'center',
    width:'60%', 
    padding:20
   
  }

});


