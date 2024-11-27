import React, { useState } from "react";
import { Button, Dialog } from "@rneui/themed";
import { ThemedText } from "@/components/ThemedText";
import { Collapsible } from "@/components/Collapsible";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, StyleSheet, Dimensions } from "react-native";

export default function faq() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ThemedText style={styles.titleText}>
          Perguntas Frequentas (FAQ)
        </ThemedText>

        <View style={styles.stepContainer}>
          <ThemedText style={styles.text}>
            Parabéns! Você liberou a planilha. Clique no botão abaixo para fazer
            download dela.
          </ThemedText>
          <Button></Button>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 8,
    paddingTop: 10,
  },
  stepContainer: {
    gap: 12,
    marginBottom: 8,
    marginTop: 8,
    padding: 8,
    backgroundColor: "#EBBA2D",
  },
  container: {
    padding: 5,
    margin: 0,
    flexGrow: 1,
    backgroundColor: "#EBBA2D",
    width: "100%",
    height: Dimensions.get("window").height,
  },
  link: {
    color: "#112683",
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    color: "#333",
  },
  titleText: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  },
});
