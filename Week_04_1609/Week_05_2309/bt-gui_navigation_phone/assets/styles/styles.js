import { StyleSheet } from 'react-native';

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
  }
  
})

export default styles;