import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import PatikaStore from './components/PatikaStorePage';
import patika_store_data from './patika_store_data.json';

function App() {
  const renderStore = ({item}) => <PatikaStore store={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header_text}>PATIKASTORE</Text>
      <TextInput style={styles.input} placeholder="Ara...🔎" />
      <FlatList
        numColumns={2}
        keyExtractor={item => item.id}
        data={patika_store_data}
        renderItem={renderStore}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header_text: {
    color: 'purple',
    fontWeight: 'bold',
    fontSize: 40,
    marginLeft: 10,
  },
  input: {
    height: 40,
    margin: 10,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#e0e0e0e0',
  },
});

export default App;
