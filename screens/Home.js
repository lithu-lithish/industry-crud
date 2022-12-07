import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Btn from "../components/Btn";
// v9 compat packages are API compatible with v8 code
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const styles = StyleSheet.create({
  view: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.view}>
      <Text style={{ fontSize: 34, fontWeight: "800", marginBottom: 20 }}>
        Well-done
      </Text>
      <Btn
        title="Customer"
        onClick={() => navigation.navigate("Production_customer")}
      />
      <Btn
        title="Production Unit"
        onClick={() => navigation.navigate("Production_unit")}
      />
      <Btn
        title="Stock Unit"
        onClick={() => navigation.navigate("Stock_unit")}
      />
      <Btn
        title="Sales Unit"
        onClick={() => navigation.navigate("Sales_unit")}
      />
      <br />
      <Btn title="Log Out" onClick={() => firebase.auth().signOut()} />
    </View>
  );
}
