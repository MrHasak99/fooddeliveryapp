import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Logo({ size = "medium" }) {
  const styles = StyleSheet.create({
    container: {
      width: size === "large" ? 120 : size === "medium" ? 80 : 40,
      height: size === "large" ? 120 : size === "medium" ? 80 : 40,
      backgroundColor: "#00a082",
      borderRadius: size === "large" ? 60 : size === "medium" ? 40 : 20,
      justifyContent: "center",
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    text: {
      fontSize: size === "large" ? 40 : size === "medium" ? 30 : 16,
      color: "#fff",
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>🍽️</Text>
    </View>
  );
}
