import React, { useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router'; 
import { ThemedText } from "@/components/ThemedText";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "@rneui/themed";

export default function ResultScreen() {
  const router = useRouter();
  const { score, total, quizId,title } = useLocalSearchParams(); // Access score and total from query params
  
  
  const insertRatingQuiz = async () => {
    const id = await AsyncStorage.getItem('@id');
    const token = await AsyncStorage.getItem('@token');
    const status = "Concluido"
    console.log("a")
    try {
      console.log("c")
      const response = await blogFetch.post(`/moduleAPI/createRating/${id}`,{
        modulo: title,
        porcentagem: score,
        status: status,
      }, {
        
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("d")
      const data = response.data;
      alert("Parabens Você conseguiu")
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    insertRatingQuiz();
  }, []);
  return (
      <View style={styles.container}>
        <ThemedText style={styles.titleText}>
          Parabéns!
        </ThemedText>

        <View style={styles.stepContainer}>
      <ThemedText style={styles.result}>Você acertou {score} / {total} do quiz {title}.</ThemedText>
        </View>
        <View style={styles.stepContainer}>
        <Button
              title="FINALIZAR"
              size="lg"
              color="#1E45B9"
              radius="lg"
              onPress={() => router.push(`./index`)}
            />
        </View>
      </View>
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
