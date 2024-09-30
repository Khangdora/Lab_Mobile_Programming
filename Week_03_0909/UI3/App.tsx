import { StatusBar } from 'expo-status-bar';
import {Button, Image, StyleSheet, Text, TextInput, View} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{flex:2}}>
        <Image src={require('.//assets/1_b.png')}></Image>
      </View>
      <View style={{flex:1}}>
        <Text style={{fontWeight:'bold'}}>FORGET PASSWORD</Text>
      </View>
      <View style={{flex:1}}>
          <Text style={{flexWrap:'wrap'}}>Provide your account's email which you want to reset password</Text>
      </View>
        <View style={{flex:1}}>
            <TextInput placeholder={"Email"} placeholderTextColor={"grey"} style={{color:'grey'}}></TextInput>
        </View>
        <View style={{flex:1}}>
            <Button title={"Send"} color={"yellow"}>NEXT</Button>
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
});
