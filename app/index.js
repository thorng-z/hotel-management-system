import { useEffect } from "react";
import { View, Text } from "react-native";
import { useRouter } from "expo-router";
import Register from "../register";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace("/register");
      router.replace("/login");
    }, 2000);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24 }}>Hotel App</Text>
    </View>
  );
  
}