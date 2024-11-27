import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useState } from "react";
import CustomInput from "../../../components/CustomInputs";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Ionicons } from "@expo/vector-icons";
import { ThemedText } from "@/components/ThemedText";
export default function Settings() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");
  const [passwordError, setPasswordError] = useState("");
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.userContent}>
          <View
            style={{
              width: 120,
              height: 120,
              backgroundColor: "white",
              borderRadius: 100,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons name="people-circle" size={120} color="gray" />
          </View>
          <Text style={{ fontSize: 30, marginLeft: 10 }}>Vitória Stati</Text>
        </View>
        <View style={styles.infosContent}>
          <ThemedText type="subtitle" style={{ marginHorizontal: 20 }}>
            Informações pessoais
          </ThemedText>
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
            <Text style={styles.buttonText}>Mudar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e89415",
  },
  userContent: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  infosContent: {
    flex: 1,
    marginBottom: 60,
    backgroundColor: "white",
    padding: 20,
    gap: 8,
    width: Dimensions.get("window").width,
  },
  loginButton: {
    width: 300,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: #112683,
    alignItems: "center",
    alignSelf: "center",
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: "white",
  },
});
