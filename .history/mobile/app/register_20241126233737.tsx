import {
  Image,
  StyleSheet,
  Platform,
  Text,
  TouchableOpacity,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import CustomInput from "../components/CustomInputs";
import { useState } from "react";

export default function RegisterScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");
  const [passwordError, setPasswordError] = useState("");
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#112683", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/vram.png")}
          style={styles.reactLogo}
        />
      }
    >
      <StatusBar translucent backgroundColor="transparent" />
      <ThemedView style={styles.titleContainer}></ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle" style={{ marginHorizontal: 20 }}>
          Cadastre-se
        </ThemedText>
        <CustomInput
          containerStyle={{ marginHorizontal: 20 }}
          placeholder={"Login"}
          onChangeText={setLogin}
        />
        <CustomInput
          containerStyle={{ marginHorizontal: 20, marginTop: 10 }}
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
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <ThemedText style={{ marginHorizontal: 20 }}>
          <Link href={"/"} style={{ fontSize: 14 }}>
            Possui conta?{" "}
            <Text style={{ fontSize: 14, color: "#112683" }}>Login</Text>
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
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 30,
    left: 55,
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
