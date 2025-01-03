//quizzes em ordem.
//Ordem das questões: 0, 1, 2, 3.

const quizzes = [
    {
      id: 0,
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
              'Eliminar completamente a necessidade de planejamento financeiro.',
               'Reduzir o custo de investimentos de alto risco.'],
          correctAnswer: 0,
        },
        {
          question: 'Qual é a principal causa do endividamento de 77% das famílias brasileiras?',
          options: ['Falta de controle nos gastos e falta de metas financeiras claras.',
             'Crescimento do desemprego e aumento da informalidade no trabalho.',
              'Alta dos preços de bens e serviços essenciais, como alimentação e energia.',
               'Uso frequente de crédito fácil e cartões de crédito sem planejamento.'],
          correctAnswer: 3,
        },
      ],
    },
    {
      id: 1,
      title: 'Renda',
      questions: [
        {
          question: 'Qual é a diferença principal entre renda bruta e renda líquida?',
          options: ['A renda bruta inclui apenas investimentos, enquanto a renda líquida inclui salários.',
             'A renda bruta é o valor total antes de deduções, enquanto a renda líquida é o que sobra após deduções.',
              'A renda líquida é maior que a renda bruta.',
               'Um imposto pago apenas por empresas que têm lucro.'],
          correctAnswer: 1,
        },
        {
          question: 'O que é o Imposto de Renda?',
          options: ['Um imposto municipal sobre salários e aluguéis.',
             'Um imposto federal pago por pessoas físicas e jurídicas que têm lucro acima de um determinado montante.',
              'Um imposto estadual que incide sobre o lucro obtido apenas de investimentos.',
               'Uso frequente de crédito fácil e cartões de crédito sem planejamento.'],
          correctAnswer: 1,
        },
        {
          question: 'Qual das seguintes características define a renda fixa?',
          options: ['O investidor empresta dinheiro a instituições financeiras ou ao governo em troca de uma remuneração.',
             'O investidor compra ações de empresas para obter retornos.',
              'A remuneração da renda fixa é sempre pré-fixada.',
               'A renda fixa é sempre mais arriscada que a renda variável.'],
          correctAnswer: 0,
        },
        {
          question: 'Qual das seguintes alternativas não é uma forma de aumentar sua renda mencionada no texto?',
          options: ['Desenvolver novas habilidades.',
             'Buscar promoções.',
              'Pagar menos impostos.',
               'Trabalhar mais horas.'],
          correctAnswer: 2,
        },
        {
          question: 'Qual das estratégias a seguir é uma forma de aumentar a renda sem necessariamente aumentar a carga de trabalho?',
          options: ['Trabalhar mais horas em um segundo emprego.',
             'Reduzir despesas pessoais ao invés de focar na renda.',
              'Realizar mais horas extras regularmente.',
               'Buscar promoções no trabalho atual.'],
          correctAnswer: 3,
        },
      ],
    },
    {
      id: 2,
      title: 'Despesas',
      questions: [
        {
          question: 'Qual é a definição de receitas?',
          options: ['São os gastos mensais que uma família tem.',
             'São todas as entradas de dinheiro, como salários e vendas.',
              'São despesas que não têm um padrão definido.',
               'São os investimentos realizados pela família.'],
          correctAnswer: 1,
        },
        {
          question: 'Quais são as três categorias de despesas?',
          options: ['Despesas fixas, variáveis e extraordinárias.',
             'Despesas operacionais, administrativas e de capital.',
              'Despesas fixas, variáveis e eventuais ou extraordinárias.',
               'Despesas mensais, anuais e ocasionais.'],
          correctAnswer: 2,
        },
        {
          question: 'Qual das seguintes características define a renda fixa?',
          options: ['O investidor empresta dinheiro a instituições financeiras ou ao governo em troca de uma remuneração.',
             'O investidor compra ações de empresas para obter retornos.',
              'A remuneração da renda fixa é sempre pré-fixada.',
               'A renda fixa é sempre mais arriscada que a renda variável.'],
          correctAnswer: 0,
        },
        {
          question: 'Qual das seguintes alternativas não é uma forma de aumentar sua renda mencionada no texto?',
          options: ['Desenvolver novas habilidades.',
             'Buscar promoções.',
              'Pagar menos impostos.',
               'Trabalhar mais horas.'],
          correctAnswer: 2,
        },
        {
          question: 'Qual das estratégias a seguir é uma forma de aumentar a renda sem necessariamente aumentar a carga de trabalho?',
          options: ['Trabalhar mais horas em um segundo emprego.',
             'Reduzir despesas pessoais ao invés de focar na renda.',
              'Realizar mais horas extras regularmente.',
               'Buscar promoções no trabalho atual.'],
          correctAnswer: 3,
        },
      ],
    },
  ];
  
  export default quizzes;