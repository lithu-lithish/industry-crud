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

export default function Production_customer({ navigation }) {
  return (
    <View style={styles.view}>
      <Text style={{ fontSize: 34, fontWeight: "800", marginBottom: 20 }}>
        Well-done
      </Text>
      <p>Production Customer </p>
      <Btn
        title="New Customer"
        onClick={() => navigation.navigate("New_customer")}
      />
      <Btn
        title="View Customer"
        onClick={() => navigation.navigate("View_customer")}
      />
      <br />
      <Btn title="Back" onClick={() => navigation.navigate("Home")} />
      <Btn title="Log Out" onClick={() => firebase.auth().signOut()} />
    </View>
  );
}
