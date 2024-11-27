import React, { useState } from "react";
import {
Button,
Dialog
} from '@rneui/themed';
import { ThemedText } from "@/components/ThemedText";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, StyleSheet, Dimensions } from "react-native";

export default function faq() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ThemedText style={styles.titleText}>
          Perguntas Frequentas (FAQ)
        </ThemedText>

        <View style={styles.stepContainer}>
            <ThemedText style={styles.text}>
              V-RAM é o nome da nossa equipe de TCC, e é composto pelas inicias
              dos membros dela. V de Vitória, R de Rebeca, A de Ana Júlia e M de
              Matheus e Murillo.
            </ThemedText>
            <View style={styles.buttonContainer}>
      <Button
        title="Open Simple Dialog"
        onPress={toggleDialog1}
        buttonStyle={styles.button}
      />
      </View>
        </View>
        </View>
    </SafeAreaView>
  );
}
type DialogComponentProps = {};

const Dialogs: React.FunctionComponent<DialogComponentProps> = () => {
const [visible1, setVisible1] = useState(false);

const toggleDialog1 = () => {
  setVisible1(!visible1);
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 8,
    paddingTop: 10,
  },
  stepContainer: {
    gap: 12,
    marginBottom: 8,
    marginTop: 8,
    padding: 8,
    backgroundColor: "#EBBA2D",
  },
  container: {
    padding: 5,
    margin: 0,
    flexGrow: 1,
    backgroundColor: "#EBBA2D",
    width: "100%",
    height: Dimensions.get("window").height,
  },
  link: {
    color: "#112683",
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    color: "#333",
  },
  titleText: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  },
});
