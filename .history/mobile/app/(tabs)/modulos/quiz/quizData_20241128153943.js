import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

//quizzes em ordem.
//Ordem das questões: 0, 1, 2, 3.

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
              'Comprar ações no mercado de capitais.',
               'Planejar financeiramente para controlar gastos e definir metas.'],
          correctAnswer: 3,
        },
        {
          question: 'A educação financeira ensina a avaliar o custo-benefício de uma compra, focando em:',
          options: ['Gastar com itens de luxo.',
             'Maximizar o uso de cartão de crédito em todas as compras.',
              'Comprar somente produtos que tragam valor e benefício à vida.',
               'Evitar gastos com qualquer produto.'],
          correctAnswer: 2,
        },
        {
          question: 'Um dos benefícios do hábito de poupar é:',
          options: ['Acumular dinheiro para o futuro e criar uma reserva de emergência.',
             'Aumentar o capital de forma rápida e arriscada.',
              'Aumentar o capital de forma rápida e arriscada.',
               'Planejar financeiramente para controlar gastos e definir metas.'],
          correctAnswer: 0,
        },
        {
          question: 'O primeiro passo da educação financeira é:',
          options: ['Fazer uma poupança para o futuro.',
             'Avaliar os produtos financeiros disponíveis.',
              'Comprar ações no mercado de capitais.',
               'Planejar financeiramente para controlar gastos e definir metas.'],
          correctAnswer: 3,
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
  