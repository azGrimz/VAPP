// resultScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function ResultScreen() {
  const router = useRouter();
  const { score, total } = useGlobalSearchParams(); // Access score and total from query params

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz Completed!</Text>
      <Text style={styles.result}>You scored {score} out of {total}.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  result: {
    fontSize: 18,
    marginTop: 10,
  },
});
