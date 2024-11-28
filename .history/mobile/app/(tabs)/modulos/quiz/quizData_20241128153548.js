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
          correctAnswer: 1,
        },
        {
          question: 'O primeiro passo da educação financeira é:',
          options: ['Fazer uma poupança para o futuro.',
             'Avaliar os produtos financeiros disponíveis.',
              'Jupiter', 'Saturn'],
          correctAnswer: 1,
        },

      ],
    },
    {
      id: 2,
      title: 'Quiz 2',
      questions: [
      ],
    },

  ];
  