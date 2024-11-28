// quizScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router'; // useSearchParams for query params
import { quizzes } from './quizData'; 

// Example quiz data
const quizData = [
  {
    id: 1,
    name: "Basic Concepts",
    questions: [
      {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correctAnswer: 1,
      },
      {
        question: "What is 5 + 3?",
        options: ["7", "8", "9", "10"],
        correctAnswer: 1,
      },
    ],
  },
  // Add other quizzes...
];

export default function QuizScreen() {
  const { quizId } = useSearchParams(); // Get quizId from query parameters
  const [quiz, setQuiz] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);

  // Find the quiz data based on quizId
  useEffect(() => {
    if (quizId) {
      const foundQuiz = quizData.find((q) => q.id === parseInt(quizId, 10));
      if (foundQuiz) {
        setQuiz(foundQuiz);
      }
    }
  }, [quizId]);

  // If quiz data is still loading or invalid, display loading/error message
  if (!quiz) {
    return (
      <View style={styles.container}>
        <Text>Loading quiz...</Text>
      </View>
    );
  }

  // Handle the next question
  const handleNextQuestion = () => {
    if (selectedOption === quiz.questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
    } else {
      // Navigate to result screen (if needed)
      // router.push(`/resultScreen?score=${score}&total=${quiz.questions.length}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{quiz.questions[currentQuestionIndex].question}</Text>
      {quiz.questions[currentQuestionIndex].options.map((option, index) => (
        <Button
          key={index}
          title={option}
          onPress={() => setSelectedOption(index)}
          color={selectedOption === index ? 'blue' : 'gray'}
        />
      ))}
      <Button title="Next" onPress={handleNextQuestion} disabled={selectedOption === null} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  question: {
    fontSize: 18,
    marginBottom: 20,
  },
});
