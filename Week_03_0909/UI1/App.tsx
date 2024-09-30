import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Image, Button} from 'react-native';
import React from "react";


export default function App() {
    return (
    <View style={styles.container}>
      <View style={{flex: 2}}>
          <Image style={{width: 140, height: 140}} src={require('.//assets/Ellipse 8.png')}></Image>
      </View>
      <View style={{flex:1}}>
        <Text style={{fontWeight: 'bold', flexWrap: 'wrap', justifyContent:'center'}}>GROW YOUR BUSINESS</Text>
      </View>
      <View style={{flex:1}}>
        <Text style={{fontWeight: 'bold', flexWrap: 'wrap', justifyContent:'center'}}>We will help you to grow your business using
          online server</Text>
      </View>
      <View style={{flex:1, justifyContent:'space-around', flexDirection: 'row'}}>
              <Button color={"yellow"} title={'Login'}>
                  <Text style={styles.btnText}>Login</Text>
              </Button>
              <Button color={'yellow'} title={'Signup'}>
                  <Text style={styles.btnText}>Signup</Text>
              </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00CCF9',
    alignItems: 'center',
    justifyContent: 'center',
  },
    btnText: {
      color: 'black'
    }
});
