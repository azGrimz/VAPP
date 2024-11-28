import React from "react";
import { Link } from "expo-router";
import { Image, View, StyleSheet, Dimensions, ScrollView } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { Button } from "@rneui/themed";
import { Header } from "@rneui/base";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function m0() {
  const router = useRouter();

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
            containerStyle={styles.centerContainer}
            leftContainerStyle={styles.item}
            centerContainerStyle={styles.header}
          />
          <ThemedView style={styles.stepContainer}>
          <ThemedText>Renda Variável</ThemedText>

<ThemedText>Por outro lado, a Renda Variável envolve investimentos cujo valor pode oscilar ao longo do tempo, oferecendo potencialmente maiores retornos, mas com riscos mais elevados:</ThemedText>

<ThemedText>Ações: Investir em ações significa adquirir uma fração da empresa. Os investidores podem receber dividendos e vender suas ações conforme as flutuações do mercado.</ThemedText>

<ThemedText>Fundos Imobiliários: Ao adquirir cotas desses fundos, o investidor participa dos lucros provenientes dos aluguéis dos imóveis que o fundo detém.</ThemedText>

 

<ThemedText>Como Aumentar sua Renda</ThemedText>

<ThemedText>Para aqueles que desejam incrementar sua renda, diversas estratégias podem ser adotadas:</ThemedText>

<ThemedText>Trabalhar Mais Horas: Uma alternativa imediata para quem já está empregado; no entanto, é crucial considerar o impacto sobre a qualidade de vida.</ThemedText>

<ThemedText>Buscar Promoções: Demonstrar comprometimento e desenvolver habilidades relevantes pode abrir portas para promoções que aumentem a renda sem a necessidade de trabalhar mais horas.</ThemedText>

<ThemedText>Empreender: Iniciar um negócio pode ser desafiador, mas também extremamente gratificante; um planejamento cuidadoso e uma pesquisa aprofundada são essenciais antes de dar esse passo.</ThemedText>

<ThemedText>Investir: Aplicar recursos em ações ou imóveis pode gerar uma renda passiva significativa ao longo do tempo.</ThemedText>

<ThemedText>Desenvolver Novas Habilidades: Aprender novas competências pode aumentar as chances de conseguir empregos melhor remunerados ou aprimorar o desempenho empresarial.</ThemedText>

<ThemedText>O Imposto de Renda é um imposto federal pago por pessoas físicas e jurídicas cujo lucro trabalhista excede um determinado montante. Os contribuintes obrigam legalmente a declarar sua receita anual por meio da Declaração de Ajuste Anual que contém alguma dívida ou crédito, que reembolse pendente ou saldos pendentes a pagar. As Pessoas Físicas – empregados, trabalhadores autônomos e empresários – pagam o Imposto de Renda da Pessoa Física ou IRPF. Por outro lado, empresas com personalidade legal pagam o IRPJ, ou seja Imposto de Renda da Pessoa Jurídica. Portanto, o foco deste trabalho é a IRPF. O valor de referência ao cálculo do IRPF é a renda do contribuinte; a receita eleva o montante devido ao imposto. No entanto, existem deduções legítimas e até mesmo despesas que o contribuinte fez, tais como dependentes e obrigações, despesas médicas e educacionais, descontadas diretamente do imposto, frequentemente deduzido na fonte – o empregador.</ThemedText>

            <ThemedText style={styles.text}>
              Assista este vídeo para entender mais sobre o assunto:{" "}
              <Link
                style={styles.link}
                href={"https://youtu.be/CB5zuxQl5ro?si=djMI7OdKRETlRFL9"}
              >
                Clique aqui!
              </Link>
            </ThemedText>

            <ThemedText style={styles.text}>
              Texto retirado do livro: Educação Financeira comportamental:
              aprendendo e refletindo em família
            </ThemedText>
            <ThemedText style={styles.text}>
              Texto retirado do site:
              https://dicadeteatro.com.br/veja-conceitos-basicos-de-educacao-financeira-que-voce-deveria-conhecer/
            </ThemedText>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="INICIAR QUIZ"
              size="lg"
              color="#1E45B9"
              radius="lg"
              onPress={() => router.push(`./quiz/quizScreen?quizId=${1}`)}
            />
          </View>
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
  item: {
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#EBBA2D",
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
    flex: 1,
    flexDirection: "row",
    marginBottom: 10,
  },
  centerContainer: {
    height: Dimensions.get("window").height * 0.1,
    width: "100%",
  },
  headerText: {
    fontSize: 25,
  },
});
