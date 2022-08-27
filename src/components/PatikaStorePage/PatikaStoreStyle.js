import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#e0e0e0e0',
  },
  image: {
    height: Dimensions.get('window').height / 4,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  inner_container: {
    paddingTop: 10,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: '#e0e0e0e0',
  },
  title: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
  },
  stock: {
    fontSize: 16,
    color: 'red',
    fontWeight: 'bold',
  },
});
