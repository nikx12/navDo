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
import AddButton from "./addButton";
import AddToDo from "./addToDoList";

class AllToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      new_todo: false
    };
  }
  saveToDoData = todo => {
    this.addNewToDo((show = false));
    console.log(
      "Task is: " +
        todo.title +
        " " +
        (todo.completed ? "completed!" : "not completed!")
    );
  };

  addNewToDo = show => {
    this.setState({
      new_todo: show
    });
  };
  render() {
    const { new_todo } = this.state;
    return (
      <Container>
        {/* <Text style={{color: 'blue'}}>Hi This is Home Screen</Text>  */}
        <Header>
          <Body>
            <Title>To Do App</Title>
          </Body>
        </Header>
        <Content>
        {new_todo && 
                <AddToDo 
                  onPress = { this.saveToDoData }
                  onCancel = { this.addNewToDo }
                />
              }
        </Content>
        <AddButton onAddNewToDo = { this.addNewToDo }  />
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
