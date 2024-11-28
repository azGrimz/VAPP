import React from "react";
import { Link } from "expo-router";
import {
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { LinearProgress } from "@rneui/themed";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <ThemedView style={styles.container}>
          <ThemedView style={styles.titleContainer}>
            <ThemedText type="title" style={styles.welcomeText}>
              BEM VINDO(A)!
            </ThemedText>
          </ThemedView>

          <Link href={"/(tabs)/modulos/m0"}>
            <ThemedView style={styles.item}>
              <Image
                resizeMode="contain"
                source={require("@/assets/images/m0-img.png")}
                style={styles.image}
              />
              <ThemedText style={styles.text}>Conceitos Básicos</ThemedText>
            </ThemedView>
          </Link>

          <ThemedView style={styles.grid}>
            <ThemedView style={styles.row}>
              <Link href={"/(tabs)/modulos/m1"}>
                <ThemedView style={styles.item}>
                  <Image
                    resizeMode="contain"
                    source={require("@/assets/images/m1-img.png")}
                    style={styles.image}
                  />
                  <ThemedText style={styles.text}>Renda</ThemedText>
                </ThemedView>
              </Link>

              <Link href={"/(tabs)/modulos/m2"}>
                <ThemedView style={styles.item}>
                  <Image
                    resizeMode="contain"
                    source={require("@/assets/images/m2-img.png")}
                    style={styles.image}
                  />
                  <ThemedText style={styles.text}>Despesas</ThemedText>
                </ThemedView>
              </Link>

              <Link href={"/(tabs)/modulos/m3"}>
                <ThemedView style={styles.item}>
                  <Image
                    resizeMode="contain"
                    source={require("@/assets/images/m3-img.png")}
                    style={styles.image}
                  />
                  <ThemedText style={styles.text}>Economizar</ThemedText>
                </ThemedView>
              </Link>
            </ThemedView>
            <ThemedView style={styles.row}>
              <Link href={"/(tabs)/modulos/m4"}>
                <ThemedView style={styles.item}>
                  <Image
                    resizeMode="contain"
                    source={require("@/assets/images/m4-img.png")}
                    style={styles.image}
                  />
                  <ThemedText style={styles.text}>Emergências</ThemedText>
                </ThemedView>
              </Link>

              <Link href={"/(tabs)/modulos/m5"}>
                <ThemedView style={styles.item}>
                  <Image
                    resizeMode="contain"
                    source={require("@/assets/images/m5-img.png")}
                    style={styles.image}
                  />
                  <ThemedText style={styles.text}>Outros</ThemedText>
                </ThemedView>
              </Link>

              <Link href={"/(tabs)/modulos/m6"}>
                <ThemedView style={styles.item}>
                  <Image
                    resizeMode="contain"
                    source={require("@/assets/images/m6-img.png")}
                    style={styles.image}
                  />
                  <ThemedText style={styles.text}>Extras</ThemedText>
                </ThemedView>
              </Link>
            </ThemedView>
          </ThemedView>

          <Link href={"/(tabs)/modulos/m7"}>
            <ThemedView style={styles.item}>
              <Image
                resizeMode="contain"
                source={require("@/assets/images/m7-img.png")}
                style={styles.image}
              />
              <ThemedText style={styles.text}>Revisão Final</ThemedText>
            </ThemedView>
          </Link>

          <ThemedView style={styles.barContainer}>
            <ThemedText style={styles.barText}>Progresso</ThemedText>
            <LinearProgress
              color="#112683"
              trackColor="#fff"
              value={1}
              style={styles.bar}
            ></LinearProgress>
          </ThemedView>
        </ThemedView>
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
    padding: 5,
  },
  container: {
    padding: 0,
    margin: 0,
    alignItems: "center",
    alignContent: "center",
    flexGrow: 1,
    height: Dimensions.get("window").height,
    width: "100%",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: 10,
  },
  row: {
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 15,
  },
  bar: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.0593,
    marginBottom: 0,
  },
  barContainer: {
    marginTop:
      Dimensions.get("window").height -
      Dimensions.get("window").height * 0.0915,
    marginBottom: 0,
    position: "absolute",
  },
  barText: {
    marginBottom: 0,
    backgroundColor: "#fff",
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
    width: Dimensions.get("window").width * 0.22,
    height: Dimensions.get("window").height * 0.1,
    marginBottom: 10,
  },
  welcomeText: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 26,
    marginBottom: 40,
  },
});
