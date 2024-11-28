import { Stack } from "expo-router";
import React from "react";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#112683",
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name="index"
        options={{ title: "V-RAM FINANS", headerShown: false }}
      />
      <Stack.Screen name="m0" options={{ title: "Conceitos Básicos" }} />
      <Stack.Screen name="m1" options={{ title: "Renda" }} />
      <Stack.Screen name="m2" options={{ title: "Despesas" }} />
    </Stack>
  );
}
