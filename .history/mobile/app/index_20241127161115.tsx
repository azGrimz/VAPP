import {
  Image,
  StyleSheet,
  Platform,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import { StatusBar } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";
import { useState } from "react";
import CustomInput from "../components/CustomInputs";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#112683", dark: "#112683" }}
      headerImage={
        <Image
          source={require("@/assets/images/vram.png")}
          style={styles.reactLogo}
        />
      }
    >
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bem Vindo(a)!</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle" style={{ marginHorizontal: 20 }}>
          Login
        </ThemedText>
        <CustomInput
          containerStyle={{ marginHorizontal: 20 }}
          placeholder={"Email"}
          onChangeText={setEmail}
        />
        <CustomInput
          containerStyle={{ marginHorizontal: 20, marginTop: 10 }}
          placeholder={"Password"}
          onChangeText={setPassword}
          error={passwordError}
          secureTextEntry
        />

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            if (password.length < 6) {
              setPasswordError("Senha muito curta");
            } else {
              setPasswordError("");
            }
          }}
        >
          <Link href={"/home"}>
            <Text style={styles.buttonText}>Login</Text>
          </Link>
        </TouchableOpacity>
        <ThemedText style={{ marginHorizontal: 20 }}>
          <Link href={"/register"} style={{ fontSize: 14 }}>
            Não possue conta ?{" "}
            <Text style={{ fontSize: 14, color: "#112683" }}>Cadastre-se</Text>
          </Link>
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginHorizontal: 20,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
    backgroundColor: "#fff",
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 50,
    left: 50,
    position: "absolute",
  },
  loginButton: {
    width: 300,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: "#EBB04F",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: "white",
  },
});
