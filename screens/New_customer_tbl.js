// import React, { useState, useEffect } from "react";
// import { StyleSheet, Text, SafeAreaView, View } from "react-native";
// import firebase from "firebase/compat";

// export default function New_customer_tbl() {
//   return (
//     <View>
//       <h1>hello</h1>
//     </View>
//   );
// }

import React, { useState, useEffect } from "react";
import { Button, StyleSheet } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

import firebase from "../database/firebase";

const New_customer_tbl = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    firebase.db.collection("industry").onSnapshot((querySnapshot) => {
      const users = [];
      querySnapshot.docs.forEach((doc) => {
        const { customer_name, product, quantity, price, doo, deldate } =
          doc.data();
        users.push({
          id: doc.id,
          customer_name,
          product,
          quantity,
          price,
          doo,
          deldate,
        });
      });
      setUsers(users);
    });
  }, []);

  return (
    <ScrollView>
      <Button
        onPress={() => props.navigation.navigate("New_customer")}
        title="Create User"
      />
      {users.map((user) => {
        return (
          <ListItem
            key={user.id}
            bottomDivider
            onPress={() => {
              props.navigation.navigate("HomeScreen", {
                userId: user.id,
              });
            }}
          >
            <ListItem.Chevron />
            <ListItem.Content>
              <ListItem.Title>customer name</ListItem.Title>
              <ListItem.Title>product</ListItem.Title>
              <ListItem.Title>Quantity</ListItem.Title>
              <ListItem.Title>Price</ListItem.Title>
              <ListItem.Title>Date of Order</ListItem.Title>
              <ListItem.Title>Delivery Date</ListItem.Title>
            </ListItem.Content>
            <ListItem.Content>
              <ListItem.Title>{user.customer_name}</ListItem.Title>
              <ListItem.Title>{user.product}</ListItem.Title>
              <ListItem.Title>{user.quantity}</ListItem.Title>
              <ListItem.Title>{user.price}</ListItem.Title>
              <ListItem.Title>{user.doo}</ListItem.Title>
              <ListItem.Title>{user.deldate}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        );
      })}
    </ScrollView>
  );
};

export default New_customer_tbl;
