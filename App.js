import React, { Component } from "react";
import { Text, StyleSheet, Easing, View } from "react-native";
import LottieView from "lottie-react-native";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <LottieView
          style={styles.lottieStyle}
          source={require("./animations/fireworks.json")}
          autoPlay
          imageAssetsFolder={"lottie/firework"}
        />
        <Text>abcd</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },

  lottieStyle: {
    width: 100,
    height: 100
  }
});
