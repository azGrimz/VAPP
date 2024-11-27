import React from "react";
import { ThemedText } from "@/components/ThemedText";
import { Collapsible } from "@/components/Collapsible";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, View, StyleSheet, Dimensions, ScrollView } from "react-native";

export default function faq() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ThemedText style={styles.titleText}>
          Perguntas Frequentas (FAQ)
        </ThemedText>
        <View style={styles.stepContainer}>
        <Collapsible title="O app é totalmente gratuito?">
        <ThemedText style={styles.text}>
            {" "}
            R: Sim! Fornecemos tudo de forma gratuita.
          </ThemedText>
      </Collapsible>



          <ThemedText style={styles.titleText}>
            P: Como atualizar minhas informações de perfil?
          </ThemedText>
          <ThemedText style={styles.text}>
            {" "}
            R: Acesse o menu, selecione "Perfil" e depois escolha a opção
            "Atualizar Informações"
          </ThemedText>
          <ThemedText style={styles.titleText}>
            P: Posso apagar a minha conta?
          </ThemedText>
          <ThemedText style={styles.text}> R: Sim!</ThemedText>
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
    padding: 5,
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
  titleText: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  },
});
