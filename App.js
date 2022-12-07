import React, { useState, useEffects } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
// import { firebase } from "./config";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import LoginScreen from "./screens/Login";
import HomeScreen from "./screens/Home";
import SignUpScreen from "./screens/SignUp";
import firebase from "firebase/compat/app";
import Production_customer from "./screens/Production_customer";
import Sales_unit from "./screens/Sales_unit";
import Stock_unit from "./screens/Stock_unit";
import Production_unit from "./screens/Production_unit";
import New_customer from "./screens/New_customer";
import New_customer_tbl from "./screens/New_customer_tbl";
// import firestore from "@react-native-firebase/firestore";

const Stack = createNativeStackNavigator();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const firebaseConfig = {
    apiKey: "AIzaSyB7a1to1zEUaq18b2dB9IPkhoNFqPFkM0o",
    authDomain: "newreactnative-25856.firebaseapp.com",
    projectId: "newreactnative-25856",
    storageBucket: "newreactnative-25856.appspot.com",
    messagingSenderId: "295925615142",
    appId: "1:295925615142:web:4434aeddcf030baa86b4e7",
    measurementId: "G-CWYJ5ZKVX3",
  };

  //Checking if firebase has been initialized
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }

  firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  });

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Production_customer"
            component={Production_customer}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Production_unit"
            component={Production_unit}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Sales_unit"
            component={Sales_unit}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Stock_unit"
            component={Stock_unit}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="New_customer"
            component={New_customer}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="New_customer_tbl"
            component={New_customer_tbl}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Sign Up"
            component={SignUpScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default App;

// https://github.com/lithu-lithish/industry-crud
