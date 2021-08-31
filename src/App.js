import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  Button,
  SafeAreaView,
  Platform,
  Dimensions
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation
} from "@react-native-community/hooks";
import WelcomeScreen from "../app/screens/WelcomeScreen";
import ViewImageScreen from "../app/screens/ViewImageScreen";

function App() {
  return <ViewImageScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

export default App;
