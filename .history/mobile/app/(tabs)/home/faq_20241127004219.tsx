import React from "react";
import { Link } from "expo-router";
import { Image, View, StyleSheet, Dimensions, ScrollView } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { SafeAreaView } from "react-native-safe-area-context";

export default function faq() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ThemedText style={styles.text}>
          P: O app é totalmente gratuito?
        </ThemedText>

        <View style={styles.stepContainer}>
          <ThemedText style={styles.text}>
            {" "}
            R: Sim! Fornecemos tudo de forma gratuita.
          </ThemedText>

          <ThemedText style={styles.text}>
            P: Como atualizar minhas informações de perfil?
          </ThemedText>
          <ThemedText style={styles.text}>
            {" "}
            R: Acesse o menu, selecione "Perfil" e depois escolha a opção
            "Atualizar Informações"
          </ThemedText>
          <ThemedText style={styles.text}>
            P: PO?
          </ThemedText>
          <ThemedText style={styles.text}>
            {" "}
            R: Acesse o menu, selecione "Perfil" e depois escolha a opção
            "Atualizar Informações"
          </ThemedText>
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
  welcomeText: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 26,
    marginBottom: 40,
  },
});