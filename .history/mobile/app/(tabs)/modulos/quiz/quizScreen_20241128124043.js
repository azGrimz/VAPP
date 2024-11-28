import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router'; 
import { quizzes } from './quizData';  // Import quiz data

export default function QuizScreen() {
  const router = useRouter();
  const { quizId } = useLocalSearchParams(); // Get quizId from query parameters

  // Initialize quiz state
  const [quiz, setQuiz] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);

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
        <Text>Loading quiz...</Text>
      </View>
    );
  }

  // Function to handle moving to the next question
  const handleNextQuestion = () => {
    if (selectedOption === quiz.questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);  // Increment score if answer is correct
    }

    // If there are more questions, move to the next question
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);  // Reset selected option
    } else {
      // If it's the last question, navigate to the result screen
      router.push(`/resultScreen?score=${score}&total=${quiz.questions.length}`);
    }
  };

  // Get the current question
  const question = quiz.questions[currentQuestionIndex];

  return (
    <
