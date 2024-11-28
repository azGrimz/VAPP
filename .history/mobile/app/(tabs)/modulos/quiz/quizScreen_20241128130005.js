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
        <Text>Loading quiz...</Text>
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
      setCurrentQuestionIndex(
