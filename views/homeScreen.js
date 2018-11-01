import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Container } from "native-base";


export default class HomeScreen extends Component {
  render() {
    return (
      <Container style={{ display: 'flex'}}>
        <Text style={styles.container}>Hi This is Home Screen</Text> 
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    color: '#f00',
    top: 50
  }
});