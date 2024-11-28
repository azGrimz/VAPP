import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { Drawer } from "expo-router/drawer";
import { Text, View, StyleSheet } from "react-native";
import { Stack } from "expo-router";
const DrawerN = createDrawerNavigator;

export default function Layout() {
  return (
    <Drawer screenOptions={{
      drawerStyle: {

        backgroundColor: '#112683',
        width: 240,
      },
      drawerLabelStyle: {
        color: '#fff',
        fontSize: 15,
        fontFamily: 'Georgia',
      },
      drawerActiveTintColor: 'white',
      drawerActiveBackgroundColor: '#003CB3',
    }}
    >
      <Drawer.Screen
        name="index"
        options={{
          title: "Home",
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#112683" },
        }}
      />
      <Drawer.Screen
        name="profile"
        options={{
          title: "Perfil",
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
