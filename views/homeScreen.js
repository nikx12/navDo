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
import { createBottomTabNavigator, BottomTabBar } from "react-navigation";

import TodoAll from './toDoAll'
class AllToDo extends Component {

    render(){
        return(
            <ToDoAll show_new_todo = { true } screen = "All" />
        )
    }

}

class ActiveToDo extends React.Component {
  render() {
    return (
        <ToDoAll show_new_todo = { false } screen = "Active" />
    );
  }
}

class CompletedToDo extends React.Component {
  render() {
    return (
        <ToDoAll show_new_todo = { false } screen = "Completed" />
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
