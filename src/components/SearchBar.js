import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { filterData } from '../actions/dataActions';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = React.useState('');

  const handleSearch = (text) => {
    setQuery(text);
    dispatch(filterData(text));
  };

  return (
    <TextInput
      style={styles.input}
      placeholder="Search..."
      value={query}
      onChangeText={handleSearch}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10
  }
});

export default SearchBar;
