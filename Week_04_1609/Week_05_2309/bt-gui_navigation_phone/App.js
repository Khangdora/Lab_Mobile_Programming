import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import styles from './assets/styles/styles';

const { widthFull } = Dimensions.get('window');

import { Card } from 'react-native-paper';

import AssetExample from './components/AssetExample';

function DetailsScreen() {

  const [selectedColor, setSelectedColor] = useState(null);

  const getColorName = (color) => {
    switch (color) {
      case '#C5F1FB':
        return 'xanh nhạt';
      case '#F30D0D':
        return 'đỏ';
      case '#000000':
        return 'đen';
      case '#234896':
        return 'xanh dương';
      default:
        return '';
    }
  };

  return (
    <SafeAreaView style={styles.bodyDetails}>
      <View style={styles.ctnInfomation}>
        <Image style={styles.imageDetails} source={require('./assets/img/phone-blue.png')} />
        <View style={[styles.infomationDetails,{width:widthFull-250}]}>
          <Text style={styles.nameProduct}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
          {selectedColor ? (
          <View><Text>Màu: <Text style={styles.fontBold}>{getColorName(selectedColor)}</Text></Text><Text>Cung cấp bởi <Text style={styles.fontBold}>Tiki Trading</Text></Text><Text style={styles.fontBold}>1.790.000 đ</Text></View>
          )
          :''}
        </View>
      </View>
      <View style={styles.ctnChooseColor}>
        <Text>Chọn một màu bên dưới:</Text>
        <View style={styles.chooseColor}>
          <TouchableOpacity style={[styles.btnChooseColor, {backgroundColor:'#C5F1FB'}]} onPress={() => setSelectedColor('#C5F1FB')}></TouchableOpacity>
          <TouchableOpacity style={[styles.btnChooseColor, {backgroundColor:'#F30D0D'}]} onPress={() => setSelectedColor('#F30D0D')}></TouchableOpacity>
          <TouchableOpacity style={[styles.btnChooseColor, {backgroundColor:'#000000'}]} onPress={() => setSelectedColor('#000000')}></TouchableOpacity>
          <TouchableOpacity style={[styles.btnChooseColor, {backgroundColor:'#234896'}]} onPress={() => setSelectedColor('#234896')}></TouchableOpacity>
        </View>
      </View>
      <View style={styles.containerFooter}>
        <TouchableOpacity style={[styles.textBtnFooter,{backgroundColor:'#1952E294',width:'90%'}]}>
          <Text style={styles.textFooter}>CHỌN MUA</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image style={styles.imageProduct} source={require('./assets/img/phone-blue.png')} />
      </View>
      <View style={styles.containerInfomation}>
        <Text style={styles.nameProduct}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
        <View style={styles.ratingProduct}>
          <View style={styles.ratingBar}>
            <Image style={styles.star} source={require('./assets/img/star.png')} />
            <Image style={styles.star} source={require('./assets/img/star.png')} />
            <Image style={styles.star} source={require('./assets/img/star.png')} />
            <Image style={styles.star} source={require('./assets/img/star.png')} />
            <Image style={styles.star} source={require('./assets/img/star.png')} />
          </View>
          <Text style={styles.ratingReview}>(Xem 828 đánh giá)</Text>
        </View>
        <View style={styles.priceProduct}>
          <Text style={styles.priceDeal}>1.790.000 đ</Text>
          <Text style={styles.priceOriginal}>1.790.000 đ</Text>
        </View>
        <View style={styles.noteProduct}>
          <Text style={styles.titleNote}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
            <View style={styles.circle}>
              <Text style={styles.questionMark}>?</Text>
            </View>
        </View>
        <View>
          <TouchableOpacity style={styles.btnColor} onPress={() => navigation.navigate('Details')}>
            <Text style={styles.btnText}>4 MÀU - CHỌN MÀU</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.containerFooterDetails}>
        <View style={styles.textBtnFooter}>
          <Text style={styles.textFooter}>CHỌN MUA</Text>
        </View>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    marginRight: 15,
    marginLeft: 15,
    alignItems: 'center'
  },
  containerImage: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageProduct: {
    resizeMode: 'contain',
    height: 250,
    marginTop: 5
  },
  containerInfomation: {
    marginTop: 10,
    marginBottom: 10
  },
  nameProduct: {
    fontSize: 15,
    fontWeight: 400
  },
  ratingProduct: {
    marginTop: 5,
    flexDirection: 'row',
    gap: 10,
    display: 'flex',
    alignItems: 'center'
  },
  ratingBar: {
    flexDirection: 'row',
    gap: 4,
    display: 'flex',
  },
  star: {
    width: 18,
    height: 18
  },
  ratingReview: {
    fontSize: 13
  },
  priceProduct: {
    marginTop: 5,
    flexDirection: 'row',
    gap: 60,
    display: 'flex',
    alignItems: 'center'
  },
  priceDeal: {
    fontSize: 18,
    fontWeight: 600
  },
  priceOriginal: {
    fontSize: 13,
    color: '#808080',
    textDecorationLine: 'line-through',
  },
  noteProduct: {
    marginTop: 10,
    flexDirection: 'row',
    gap: 15,
    display: 'flex',
    alignItems: 'center'
  },
  titleNote: {
    color: 'red',
    fontWeight: 600
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionMark: {
    color: 'black',
    fontWeight: 700
  },
  btnColor: {
    marginTop: 15,
    borderWidth: 1,
    borderRadius: 10,
    color: '#C4C4C4',
    alignItems: 'center',
    height: 30
  },
  btnText: {
    lineHeight: 30,
    fontSize: 16,
    fontWeight: 400
  },
  containerFooter: {
    bottom: 0,
    width: "100%",
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerFooterDetails: {
    bottom: 0,
    width: "100%",
    position: 'absolute',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBtnFooter: {
    backgroundColor: '#EE0A0A',
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 44
  },
  textFooter: {
    color: 'white',
    fontWeight: 700,
    fontSize: 20
  },
  bodyDetails: {
    flex: 1,
    backgroundColor: '#C4C4C4',
  },
  ctnInfomation: {
    flexDirection: 'row',
    display: 'flex',
    height: 160,
    backgroundColor: 'white',
    padding: 10,
    gap: 10
  },
  imageDetails: {
    width: 112,
    height: 132,
  }, 
  ctnChooseColor: {
    flexDirection: 'column',
    display: 'flex',
    padding: 10,
    gap: 10
  },
  chooseColor: {
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  btnChooseColor: {
    width: 70,
    height: 70,
    shadowColor: '#000', 
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25, 
    shadowRadius: 3.5,
    elevation: 5
  },
  infomationDetails: {
    flexDirection: 'column',
    display: 'flex',
    gap: 3,
    flexWrap: 'wrap'
  },
  fontBold: {
    fontWeight:700
  },
  
})

export default App;