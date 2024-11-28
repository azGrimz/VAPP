import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export const quizzes = [
    {
      id: 1,
      title: 'Conceitos Básicos',
      questions: [
        {
          question: 'A educação financeira é importante porque:',
          options: ['Facilita a compra de bens de alto valor com parcelas longas.',
             'Garante estabilidade financeira e ajuda a tomar decisões mais fundamentadas.',
              'Evita que a pessoa se preocupe com a aposentadoria.',
               'Permite endividamento consciente e estratégico.'],
          correctAnswer: 'Garante estabilidade financeira e ajuda a tomar decisões mais fundamentadas.',
        },
        {
          question: 'Which planet is known as the Red Planet?',
          options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
          correctAnswer: 'Mars',
        },
        // Add more questions here
      ],
    },
    {
      id: 2,
      title: 'Quiz 2',
      questions: [
        // More questions for Quiz 2
      ],
    },
    // Add more quizzes here
  ];
  