import React, { useState } from 'react';
import {Text, View, Image, StyleSheet, SafeAreaView, TouchableOpacity, TextInput} from 'react-native';

const YourApp = () => {

  const [value, setValue] = useState(1);
  const unitPrice = 141800;

  const increment = () => {
    setValue(prevValue => prevValue + 1);
  };

  const decrement = () => {
    setValue(prevValue => (prevValue > 0 ? prevValue - 1 : 0));
  };

  const totalPrice = unitPrice * value;

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.infomation}>
        <View style={styles.infomationThumbnail}>
          <Image style={styles.image} source={{uri:"https://i.imgur.com/ms1tu5t.png"}} />
        </View>
        <View style={styles.infomationDetails}>
            <Text style={styles.title}>Nguyên hàm tích phân và ứng dụng</Text>
            <Text style={[styles.title, styles.mt2]}>Cung cấp bởi Tiki Trading</Text>
            <Text style={styles.price}>141.800 đ</Text>
            <Text style={styles.priceDeal}>141.800 đ</Text>
            <View style={styles.quantityContainer}>
              <View style={styles.quantity}>
                <TouchableOpacity style={styles.button} onPress={decrement}>
                  <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
                <TextInput
                  style={styles.input}
                  value={value.toString()}
                  editable={false}
                />
                <TouchableOpacity style={styles.button} onPress={increment}>
                  <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.buyLater}>
                Mua sau
              </Text>
            </View>
        </View>
        <View style={styles.infomationDeal}>
          <Text style={styles.dealSave}>Mã giảm giá đã lưu</Text>
          <Text style={styles.dealSaveMore}>Xem tại đây</Text>
        </View>
        <View style={styles.promotionContainer}>
            <TextInput
              style={styles.inputPromotion}
              value={""}
              editable={true}
            />
            <TouchableOpacity style={styles.buttonPromotion}>
              <Text style={styles.buttonText}>Áp dụng</Text>
            </TouchableOpacity>
        </View>
      </View>
      <View style={styles.containerMain}>
        <View style={styles.giftContainer}>
          <Text style={[styles.fontStrong, styles.colorBlueDark]}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
          <Text style={[styles.fontStrong, styles.colorBlue]}>Nhận tại đây?</Text>
        </View>
      </View>
      <View style={styles.containerMain}>
        <Text style={styles.textTitleTempPrice}>Tạm tính</Text>
        <Text style={styles.textTempPrice}>{formatPrice(totalPrice)} đ</Text>
      </View>
      <View style={styles.containerFooter}>
        <Text style={styles.textTitlePrice}>Thành tiền</Text>
        <Text style={styles.textTempPrice}>{formatPrice(totalPrice)} đ</Text>
      <TouchableOpacity style={styles.buttonBuy}>
        <Text style={styles.buttonTextBuy}>TIẾN HÀNH ĐẶT HÀNG</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#C4C4C4',
  },
  infomation: {
    backgroundColor: '#FFFFFF',
    position: 'relative',
    padding: 14
  },
  infomationThumbnail: {
    position: 'absolute',
    left: 13,
    width: 104,
    height: 140
  },
  infomationDeal: {
    marginTop: 20,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  infomationDetails: {
    position: 'relative',
    left: 115,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
  },
  mt2: {
    marginTop: 14,
  },
  price: {
    marginTop: 14,
    fontSize: 21,
    fontWeight: '800',
    color: '#EE0D0D',
  },
  priceDeal: {
    fontSize: 13,
    color: '#808080',
    textDecorationLine: 'line-through',
  },
  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    marginTop: 12,
    alignItems: 'center',
  },
  quantity: {
    flexDirection: 'row',
    gap: 10,
    display: 'flex',
  },
  button: {
    backgroundColor: '#808080',
    width: 18,
    height: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 18,
    height: 18,
    fontSize: 14,
    textAlign: 'center', 
  },
  buttonText: {
    color: '#FFFFFF',
  },
  buyLater: {
    color: '#134FEC',
    fontSize: 12,
    fontWeight: '800',
  },
  dealSave: {
    color: '#011627',
    fontSize: 12,
    fontWeight: '500',
  },
  dealSaveMore: {
    position: 'absolute',
    left: 115,
    fontSize: 12,
    color: '#134FEC'
  },
  promotionContainer: {
    marginTop: 20,
    flexDirection: 'row',
    gap: 10,
  },
  giftContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  inputPromotion: {
    width: '50%',
    height: 30,
    fontSize: 14,
    textAlign: 'center', 
    borderWidth: 1,
    borderColor: '#808080',
  },
  buttonPromotion: {
    backgroundColor: '#0A5EB7',
    width: '45%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerMain: {
    marginTop: 15,
    backgroundColor: '#FFFFFF',
    position: 'relative',
    padding: 14
  },
  fontStrong: {
    fontWeight: 600
  },
  colorBlue: {
    color: '#134FEC'
  },
  colorBlueDark: {
    color: '#011627'
  },
  textTitleTempPrice: {
    fontSize: 18,
    fontWeight: 700
  },
  textTitlePrice: {
    fontSize: 18,
    fontWeight: 700,
    color: '#808080'
  },
  textTempPrice: {
    position: 'absolute',
    right: 50,
    color: '#EE0D0D',
    fontSize: 18,
    fontWeight: 700
  },
  containerFooter: {
    bottom: 0,
    width: "100%",
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    padding: 14
  },
  buttonBuy: {
    marginTop: 20,
    backgroundColor: '#E53935',
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTextBuy: {
    color: "white",
    fontWeight: 800,
    fontSize: 20
  }
});

export default YourApp;