import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import TextBox from "../components/TextBox";
import Btn from "../components/Btn";
import { addDoc, collection } from "firebase/firestore";
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

export default function New_customer({ navigation }) {
  const [values, setValues] = useState({
    // email: "",
    // pwd: "",
    customer_name: "",
    product: "",
    quantity: "",
    price: "",
    doo: "",
    deldate: "",
  });

  function handleChange(text, eventName) {
    setValues((prev) => {
      return {
        ...prev,
        [eventName]: text,
      };
    });
  }

  // function Login() {
  //   const { email, pwd } = values;

  //   firebase
  //     .auth()
  //     .signInWithEmailAndPassword(email, pwd)
  //     .then(() => {})
  //     .catch((error) => {
  //       alert(error.message);
  //       // ..
  //     });
  // }

  function Addcustomer() {
    const { customer_name, product, quantity, price, doo, deldate } = values;

    firebase

      .firestore()
      .collection("industry")
      .add({
        customer_name,
        product,
        quantity,
        price,
        doo,
        deldate,
      })

      // .await; addDoc( collection(db, "Your_Collections_Name_in_firebase"))
      .then(() => {})
      .catch((error) => {
        alert(error.message);
        // ..
      });
  }

  return (
    <View style={styles.view}>
      <Text style={{ fontSize: 34, fontWeight: "800", marginBottom: 20 }}>
        New Customer
      </Text>
      <TextBox
        placeholder="Customer Name"
        onChangeText={(text) => handleChange(text, "customer_name")}
      />
      <TextBox
        placeholder="Quantity"
        onChangeText={(text) => handleChange(text, "quantity")}
      />
      <TextBox
        placeholder="Product"
        onChangeText={(text) => handleChange(text, "product")}
      />
      <TextBox
        placeholder="Price"
        onChangeText={(text) => handleChange(text, "price")}
      />
      <TextBox
        placeholder="Date of order"
        onChangeText={(text) => handleChange(text, "doo")}
      />
      <TextBox
        placeholder="Delivery Date"
        onChangeText={(text) => handleChange(text, "deldate")}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "92%",
        }}
      >
        <Btn
          onClick={() => Addcustomer()}
          title="Add Customer"
          type="submit"
          style={{ width: "48%" }}
        />
        <Btn
          onClick={() => navigation.navigate("New_customer_tbl")}
          title="View Customer"
          style={{ width: "48%", backgroundColor: "#344869" }}
        />
      </View>
    </View>
  );
}
