import React from "react";
import { Link } from "expo-router";
import { Image, View, StyleSheet, Dimensions, ScrollView } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { Button } from "@rneui/themed";
import { Header } from "@rneui/base";
import { SafeAreaView } from "react-native-safe-area-context";

export default function m0() {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <Header
            backgroundColor="#EBBA2D"
            centerComponent={
              <ThemedText style={styles.headerText}>
                Conceitos Básicos
              </ThemedText>
            }
            leftComponent={
              <Image
                resizeMode="contain"
                source={require("@/assets/images/m0-img.png")}
                style={styles.image}
              />
            }
            containerStyle={styles.header}
          />
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

            <ThemedText style={styles.text}>
              O primeiro passo é o planejamento financeiro, essencial para
              controlar gastos, identificar prioridades e definir metas para o
              futuro. Ao planejar, a pessoa se torna mais consciente sobre como
              e onde utiliza seus recursos, criando uma estrutura que facilita a
              tomada de decisões. Parte desse planejamento inclui fazer uma
              poupança. Esse hábito não apenas ajuda a acumular dinheiro para o
              futuro, mas também cria uma reserva de emergência, protegendo a
              pessoa em momentos de necessidade e evitando o endividamento.
            </ThemedText>

            <ThemedText style={styles.text}>INVESTIR</ThemedText>

            <ThemedText style={styles.text}>
              A educação financeira também ensina a investir com conhecimento.
              Saber onde aplicar o dinheiro e compreender o perfil de risco de
              cada investimento permite decisões informadas e estratégicas,
              possibilitando o crescimento do capital de forma consciente e
              planejada. Outro ponto crucial é avaliar o custo-benefício de cada
              compra. Esse princípio nos ensina a considerar o valor agregado
              dos bens e serviços, evitando gastos desnecessários e focando em
              itens que realmente trazem benefícios à nossa vida.
            </ThemedText>

            <ThemedText style={styles.text}>APRENDIZADO CONSTANTE</ThemedText>
            <ThemedText style={styles.text}>
              Por fim, a educação financeira é um aprendizado constante. Novos
              produtos financeiros, oportunidades de investimento e mudanças no
              mercado exigem que as pessoas se mantenham atualizadas. Esse
              contínuo aprendizado ajuda a construir uma relação mais saudável e
              segura com o dinheiro, contribuindo para decisões cada vez mais
              fundamentadas. Em resumo, a educação financeira é um caminho que
              permite alcançar estabilidade e autonomia, sendo um processo que
              acompanha cada fase da vida. Adotá-la como parte do dia a dia traz
              benefícios não só imediatos, mas também duradouros, permitindo uma
              vida financeira mais segura e tranquila.
            </ThemedText>

            <ThemedText style={styles.text}>
              Assista este vídeo para entender mais sobre o assunto:{" "}
              <Link
                style={styles.link}
                href={"https://youtu.be/CB5zuxQl5ro?si=djMI7OdKRETlRFL9"}
              >
                Clique aqui!
              </Link>
            </ThemedText>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="INICIAR QUIZ"
              size="lg"
              color="#1E45B9"
              radius="lg"
            />
          </View>{" "}
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
    padding: 5,
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
  buttonContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    color: "#333",
  },
  image: {
    width: Dimensions.get("window").width * 0.2,
    height: Dimensions.get("window").height * 0.08,
    marginBottom: 10,
  },
  header: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.1,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 25,
    align;Text: center,
  },
});
