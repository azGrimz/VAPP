import React from "react";
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
          <Collapsible title="O que é V-RAM?">
            <ThemedText style={styles.text}>
              V-RAM é o nome da nossa equipe de TCC, e é composto pelas inicias
              dos membros dela. V de Vitória, R de Rebeca, A de Ana Júlia e M de
              Matheus e Murillo.
            </ThemedText>
          </Collapsible>
        </View>

        <View style={styles.stepContainer}>
          <Collapsible title="O que levou vocês a criarem o V-RAM Finans?">
            <ThemedText style={styles.text}>
              É incontestável a importância da educação financeira,
              especialmente no contexto brasileiro, onde 61% da população não
              consegue economizar, aponta uma pesquisa do Instituto Ipsos. A
              falta de ensino sobre finanças nas escolas e a cultura evasiva
              quando o assunto é discutir dinheiro com jovens contribuem para
              esse cenário. Para enfrentar esse desafio, a equipe V-RAM
              desenvolveu o V-RAM Finans, um aplicativo destinado a jovens do
              Ensino Médio. O diferencial do V-RAM Finans é sua abordagem:
              utiliza uma linguagem mais jovial e acessível, tornando o
              aprendizado sobre finanças menos intimidador e mais atraente para
              os adolescentes.
            </ThemedText>
          </Collapsible>
        </View>

        <View style={styles.stepContainer}>
          <Collapsible title="Como atualizar minhas informações de perfil?">
            <ThemedText style={styles.text}>
              {" "}
              Acesse o menu, selecione "Perfil" e depois escolha a opção
              "Atualizar Informações"
            </ThemedText>
          </Collapsible>
        </View>

        <View style={styles.stepContainer}>
          <Collapsible title="O app é totalmente gratuito?">
            <ThemedText style={styles.text}>
              {" "}
              Sim! Fornecemos tudo de forma gratuita e acessível.
            </ThemedText>
          </Collapsible>
        </View>

        <View style={styles.stepContainer}>
          <Collapsible title="Quero enviar feedback sobre o app. É possível fazer isso?">
            <ThemedText style={styles.text}>
              {" "}
              É sim! Nós recebemos feedback através da aba "Enviar Feedback" do
              menu, onde você pode escrever o que achar necessário e enviar para
              nós.
            </ThemedText>
          </Collapsible>
        </View>

        <View style={styles.stepContainer}>
          <Collapsible title="É possível deletar a minha conta?">
            <ThemedText style={styles.text}>
              {" "}
              Claro que sim! É só acessar as configurações e clicar em "Deletar
              conta".
            </ThemedText>
          </Collapsible>
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
    alignItems: "left",
    alignContent: "left",
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
