import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Container } from "native-base";


export default class SecondScreen extends Component {
  render() {
    return (
      <Container  style={styles.container}>
        <Text style={{color: 'red'}}>Hi This is Second Screen</Text> 
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // color: '#fff',
    // top: 50
  }
});