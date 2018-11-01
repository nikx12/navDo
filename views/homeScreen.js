import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Container, Content, Header, Title, Body, Text, Icon } from "native-base";
import AddButton from "./addButton";
import AddToDo from "./addToDoList";


export default class HomeScreen extends Component {
  render() {
    return (
      <Container>
        {/* <Text style={{color: 'blue'}}>Hi This is Home Screen</Text>  */}
        <Header><Body><Title>To Do App</Title></Body></Header>
        <Content>  
              <AddToDo />
            </Content>             
        <AddButton/>
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
    top: 20,
  }
});