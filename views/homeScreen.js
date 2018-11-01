import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";
import {
  Container,
  Content,
  Header,
  Title,
  Body,
  Text,
  Icon
} from "native-base";
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation';
import AddButton from "./addButton";
import AddToDo from "./addToDoList";

class AllToDo extends Component {
  render() {
    return (
      <Container>
        {/* <Text style={{color: 'blue'}}>Hi This is Home Screen</Text>  */}
        <Header>
          <Body>
            <Title>To Do App</Title>
          </Body>
        </Header>
        <Content>
          <AddToDo />
        </Content>
        <AddButton />
      </Container>
    );
  }
}
class ActiveToDo extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Active</Title>
          </Body>
        </Header>
        <Content>
          <Text>Active Section</Text>
        </Content>
      </Container>
    );
  }
}

class CompletedToDo extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Completed</Title>
          </Body>
        </Header>
        <Content>
          <Text>Completed Section</Text>
        </Content>
      </Container>
    );
  }
}
export default createBottomTabNavigator(
  {
    All: { screen: AllToDo },
    Active: { screen: ActiveToDo },
    Completed: { screen: CompletedToDo }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "All") {
          iconName = `list`;
        } else if (routeName === "Active") {
          iconName = `unlock`;
        } else {
          iconName = `checkmark`;
        }

        return <Icon name={iconName} color={"red"} active={true} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    },
    tabBarComponent: BottomTabBar,
    tabBarPosition: "bottom",
    animationEnabled: true,
    swipeEnabled: false
  }
);
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//     top: 20
//   }
// });
