import { Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import { StatusBar } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";
import { useState } from "react";
import CustomInput from "../components/CustomInputs";
import AsyncStorage from "@react-native-async-storage/async-storage";
import blogFetch from "../axios/config";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await blogFetch.post("/auth/login", {
        email: email,
        password: password,
      });
      const data = response.data;
      await AsyncStorage.setItem("@token", data.token);
      await AsyncStorage.setItem("@id", data.id);
      await AsyncStorage.setItem("@role", JSON.stringify(data.role));

      setEmail("");
      setPassword("");
      router.push("/home");
    } catch (error) {
      alert(error);
    }
  };

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
          onChangeText={(text) => setEmail(text)}
        />
        <CustomInput
          containerStyle={{ marginHorizontal: 20, marginTop: 10 }}
          placeholder={"Password"}
          onChangeText={(text) => setPassword(text)}
          error={passwordError}
          secureTextEntry
        />

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            if (password.length < 6) {
              setPasswordError("Senha muito curta");
            } else {
              handleLogin();
              router.push("/home");
            }
          }}
        >
          <Text style={styles.buttonText}>Login</Text>
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
