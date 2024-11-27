import React from "react";
import { Link } from "expo-router";
import { Image, View, StyleSheet, Dimensions, ScrollView } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { Button } from "@rneui/themed";
import { SafeAreaView } from "react-native-safe-area-context";

export default function m0() {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <ThemedText style={styles.text}>EDUCAÇÃO FINANCEIRA</ThemedText>

          <View style={styles.stepContainer}>
            <ThemedText style={styles.text}>
              {" "}
              Educação financeira é mais do que apenas um conjunto de conteúdo.
              De acordo com a OCDE, ela é um "processo" que visa ajudar os
              indivíduos a melhorar sua compreensão sobre conceitos e produtos
              financeiros, possibilitando decisões mais conscientes e
              responsáveis. Esse processo busca não apenas oferecer
              conhecimentos técnicos, mas também desenvolver competências e
              habilidades para que cada pessoa tome decisões financeiras que
              levem ao aumento do bem-estar próprio e de outros.
            </ThemedText>

            <ThemedText style={styles.text}>PRIMEIRO PASSO</ThemedText>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingTop: 10,
  },
  stepContainer: {
    gap: 12,
    marginBottom: 8,
  },
  container: {
    padding: 16,
    margin: 0,
    alignItems: "center",
    alignContent: "center",
    flexGrow: 1,
    backgroundColor: "#FFFAE2",
    width: "100%",
  },
  link: {
    color: "#112683",
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    color: "#333",
  },
  welcomeText: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 26,
    marginBottom: 40,
  },
});
