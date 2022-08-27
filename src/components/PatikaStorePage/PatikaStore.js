import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './PatikaStoreStyle';

const PatikaStore = ({store}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.image} source={{uri: store.imgURL}} />
      <View style={styles.inner_container}>
        <Text style={styles.title}>{store.title}</Text>
        <Text style={styles.price}>{store.price}</Text>
        <Text style={styles.stock}>
          {store.inStock === true ? '' : 'STOKTA YOK'}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PatikaStore;
