import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../actions/dataActions';
import ListItem from '../components/ListItem';

const ListScreen = () => {
  const dispatch = useDispatch();
  // const { data, loading, error } = useSelector((state) => state.data);
  const { loading, visibleData, error } = useSelector((state) => state);
  const data = useSelector((state) => state.data);
  const [page, setPage] = useState(1);
  console.log("test data",data) 
  useEffect(() => {
    dispatch(fetchData(page));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
      <FlatList
        data={visibleData}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => <ListItem item={item} />}
      />
      <TouchableOpacity style={styles.loadMoreButton} onPress={handleLoadMore}>
        <Text style={styles.loadMoreButtonText}>Load More</Text>
      </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadMoreButton: {
    backgroundColor: '#ccc',
    paddingVertical: 10,
    alignItems: 'center'
  },
  loadMoreButtonText: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default ListScreen;
