import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DetailScreen = ({ route }) => {
  const navigation = useNavigation();
  
  const { item } = route.params;
  item.nodes.map((node) => (
    console.log("check each node", node)
  ))
 
  const handleURL = (url) => {
    // navigation.navigate(url);
    Linking.openURL(url);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.label}</Text>
     
    <Button title={item.url} onPress={() => Linking.openURL(item.url)} />
      <Text style={styles.title}>Nodes:</Text>
      {item.nodes.map((node) =>
      {
        return(
       
        <View 
        key={node.key} 
        style={styles.nodeContainer}>
          <Text style={styles.nodeLabel}>{node.label}</Text>
          <Button title={node.url} onPress={() => Linking.openURL(node.url)} />
   {node.nodes.map((node) =>
      {
        return(
       
        <View 
        key={node.key} 
        style={styles.nodeContainer2}>
          <Text style={styles.nodeLabel}>{node.label}</Text>
          <Button title={node.url} onPress={() => Linking.openURL(node.url)} />
        </View>
      )
      
        }
      )}
        </View>
      )
      
        }
      )}
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  button: {
    padding: 10,
    // borderBottomWidth: 1,
    // borderBottomColor: '#ccc'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  nodeContainer: {
    margin: 3  
  },
  nodeContainer2: {
    marginVertical: 10,
    margin: 5
  },
  nodeLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10
  },
  nodeKey: {
    fontSize: 14,
    marginTop: 5,
    margin: 10
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  nodeUrl: {
    fontSize: 14,
    marginTop: 5
  }
});

export default DetailScreen;
