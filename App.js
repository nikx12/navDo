import React from "react";
import { StyleSheet, View,  SafeAreaView,
  ScrollView, } from "react-native";
import {
  Container,
  // Header,
  // Item,
 
  // Image,
  // Text
} from "native-base";
import Expo from "expo";

import { createDrawerNavigator, DrawerItems } from "react-navigation";
import HomeScreen from "./views/homeScreen";
import SecondScreen from "./views/secondScreen";
// import Navigation from "./Views/Navigation";
export default class App extends React.Component {
  state = {
    fontLoaded: false
  };

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <Container>
        {this.state.fontLoaded ? (
          //
          <AppDrawerNavigator />
        ) : null}
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

const CustomDrawerComponent = (props) => {
  return (<ScrollView>
    <SafeAreaView style={styles.container}>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>);
};

const AppDrawerNavigator = createDrawerNavigator({
    HomeScreen: HomeScreen,
    SecondScreen: SecondScreen 
  },
  {
    contentComponent: CustomDrawerComponent
  }
);