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
      <Stack.Screen name="quizScreen" options={{ title: "Hora do quiz!" }} />
      <Stack.Screen name="resultScreen" options={{ title: "Resultado" } } />
    </Stack>
  );
}
