import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router'; 
import quizzes from './quizData';  // Import quiz data
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function QuizScreen() {
  const router = useRouter();
  const { quizId } = useLocalSearchParams(); // Get quizId from query parameters

  // Initialize quiz state
  const [quiz, setQuiz] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);  // Use state for score

  // Fetch the quiz data on component mount
  useEffect(() => {
    if (quizId) {
      const foundQuiz = quizzes.find((q) => q.id === parseInt(quizId, 10));
      if (foundQuiz) {
        setQuiz(foundQuiz);
      }
    }
  }, [quizId]); // Re-run the effect when quizId changes

  // If quiz data is still loading or invalid, display loading/error message
  if (!quiz) {
    return (
      <View style={styles.container}>
        <ThemedText style={styles.text}>Carregando quiz quiz...</ThemedText>
      </View>
    );
  }

  // Function to handle moving to the next question
  const handleNextQuestion = () => {
    // Check if selected option is correct and update score
    if (selectedOption === quiz.questions[currentQuestionIndex].correctAnswer) {
      setScore(prevScore => prevScore + 1);  // Increment score using the previous state value
    }

    // If there are more questions, move to the next question
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);  // Reset selected option
    } else {
      // If it's the last question, navigate to the result screen
      // Calculate the final score by considering the current question's answer
      const finalScore = selectedOption === quiz.questions[currentQuestionIndex].correctAnswer ? score + 1 : score;
      router.push(`./resultScreen?score=${finalScore}&total=${quiz.questions.length}`);
    }
  };

  // Get the current question
  const question = quiz.questions[currentQuestionIndex];

  return (
    <View style={styles.container}>
      <View style={styles.top}>
      <ThemedText style={styles.question}>{currentQuestionIndex}/5</ThemedText>
      <ThemedText style={styles.welcomeText}>Hora do quiz!</ThemedText>
      </View>

      <ThemedText style={styles.question}>{currentQuestionIndex}. {question.question}</ThemedText>

      {question.options.map((option, index) => (
        <View key={index} style={styles.optionContainer}>
          <Button
            title={option}  // Display option as button
            onPress={() => setSelectedOption(index)}  // Update selected option
            color={selectedOption === index ? '#1E45B9' : 'gray'
            }// Highlight the selected option
              style={styles.questionButton}  
          />
        </View>
      ))}

      <Button
        title="Próxima"
        onPress={handleNextQuestion}
        disabled={selectedOption === null}  // Disable the button if no option is selected
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    margin: 0,
    alignContent: "center",
    flexGrow: 1,
    backgroundColor: "#FFFAE2",
    width: "100%",
  },
  question: {
    fontSize: 18,
    marginBottom: 20,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    color: "#333",
  },
  top: {

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
  questionButton: {
    height: Dimensions.get("window").height * 0.05,
    width: Dimensions.get("window").width,
    borderRadius: 10,
    marginRight: 20,
    marginLeft: 20,
  },
  optionContainer: {
    marginBottom: 10,
  },
  headerText: {
    fontSize: 25,
  },
  welcomeText: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
    marginBottom: 40,
  },
});
