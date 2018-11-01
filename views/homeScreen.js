import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Container } from "native-base";
import AddButton from "./addButton";


export default class HomeScreen extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Text style={{color: 'blue'}}>Hi This is Home Screen</Text> 
        <AddButton/>
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

  }
});