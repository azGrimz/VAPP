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

        <Collapsible title="File-based routing">
        <ThemedText>
          This app has two screens:{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> and{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
        </ThemedText>
        <ThemedText>
          The layout file in <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{' '}
          sets up the tab navigator.
        </ThemedText>
      </Collapsible>

        <View style={styles.stepContainer}>
          <ThemedText style={styles.text}>
            {" "}
            R: Sim! Fornecemos tudo de forma gratuita.
          </ThemedText>

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