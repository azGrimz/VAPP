// QuizScreen.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { quizzes } from './quizData'; // Import quiz data

const QuizScreen = ({ route, navigation }) => {
  const { quizId } = route.params;  // Get the quizId from the route
  const quiz = quizzes.find((q) => q.id === quizId);  // Find the quiz by ID

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);

  const handleNextQuestion = () => {
    if (selectedOption === quiz.questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
    } else {
      navigation.navigate('Result', { score, total: quiz.questions.length });
    }
  };

  const question = quiz.questions[currentQuestionIndex];

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question.question}</Text>
      {question.options.map((option, index) => (
        <View key={index} style={styles.optionContainer}>
          <RadioButton
            value={index}
            status={selectedOption === index ? 'checked' : 'unchecked'}
            onPress={() => setSelectedOption(index)}
          />
          <Text>{option}</Text>
        </View>
      ))}
      <Button title="Next" onPress={handleNextQuestion} disabled={selectedOption === null} />
    </View>
  );
};

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
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default QuizScreen;