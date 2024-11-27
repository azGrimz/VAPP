import { createDrawerNavigator } from "@react-navigation/drawer";
import { Drawer } from "expo-router/drawer";
import { Text, View, StyleSheet } from "react-native";
import { Stack } from "expo-router";
const DrawerN = createDrawerNavigator;

export default function Layout() {
  return (
    <Drawer>
      <View style={{ alignItems: "center", marginBottom: 20 }}>
        <Text style={{ textAlign: "center", fontSize: 18, fontWeight: "bold" }}>
          Code With Abdul
        </Text>
      </View>
      <Drawer.Screen
        name="settings"
        options={{
          title: "Perfil",
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#112683" },
        }}
      />
      <Drawer.Screen
        name="index"
        options={{
          title: "Módulos",
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#112683" },
        }}
      />
      <Drawer.Screen
        name="faq"
        options={{
          title: "Perguntas Frequentes",
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#112683" },
        }}
      />
      <Drawer.Screen
        name="feedback"
        options={{
          title: "Enviar feedback",
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#112683" },
        }}
      />
    </Drawer>
  );
}