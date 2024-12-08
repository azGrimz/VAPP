import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router'; 
import { ThemedText } from "@/components/ThemedText";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "@rneui/themed";

export default function ResultScreen() {
  const router = useRouter();
  const { score, total, quizId } = useLocalSearchParams(); // Access score and total from query params

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ThemedText style={styles.titleText}>
          Parabéns!
        </ThemedText>

        <View style={styles.stepContainer}>
      <ThemedText style={styles.result}>You scored {score} out of {total}.</ThemedText>
        </View>
        <View style={styles.stepContainer}>
        <Button
              title="INICIAR QUIZ"
              size="lg"
              color="#1E45B9"
              radius="lg"
              onPress={() => router.push(`./`)}
            />
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
    marginTop: 18,
    padding: 4,
  },
  container: {
    padding: 5,
    margin: 0,
    flexGrow: 1,
    backgroundColor: "#1E45B9",
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