import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import List from '../components/List';
import SearchBar from '../components/SearchBar';

const HomeScreen = () => {
  const { loading, error } = useSelector((state) => state.data);

  return (
    <View style={styles.container}>
      <SearchBar />
      {loading ? (
        <ActivityIndicator color="#999" />
      ) : error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <List />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 20
  },
  error: {
    color: 'red',
    textAlign: 'center'
  }
});

export default HomeScreen;
