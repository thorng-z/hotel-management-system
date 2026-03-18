import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Hotel Dashboard</Text>
        <Text style={styles.subtitle}>Welcome back 👋</Text>
      </View>

      {/* Stats Section */}
      <View style={styles.statsContainer}>
        <View style={styles.card}>
          <Text style={styles.cardNumber}>120</Text>
          <Text style={styles.cardText}>Rooms</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardNumber}>80</Text>
          <Text style={styles.cardText}>Bookings</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardNumber}>45</Text>
          <Text style={styles.cardText}>Customers</Text>
        </View>
      </View>

      {/* Navigation Buttons */}
      <View style={styles.menu}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/rooms")}
        >
          <Text style={styles.buttonText}>Manage Rooms</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/bookings")}
        >
          <Text style={styles.buttonText}>View Bookings</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/customers")}
        >
          <Text style={styles.buttonText}>Customers</Text>
        </TouchableOpacity>
      </View>

      {/* Logout */}
      <TouchableOpacity
        style={styles.logout}
        onPress={() => router.replace("/login")}
      >
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6f8",
  },
  header: {
    padding: 20,
    backgroundColor: "#2a9d8f",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitle: {
    fontSize: 14,
    color: "#e0f7f5",
    marginTop: 5,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
    width: 100,
    elevation: 3,
  },
  cardNumber: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2a9d8f",
  },
  cardText: {
    fontSize: 14,
    color: "#555",
  },
  menu: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "#264653",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
  logout: {
    marginTop: 20,
    alignItems: "center",
  },
  logoutText: {
    color: "red",
    fontSize: 16,
    fontWeight: "bold",
  },
});