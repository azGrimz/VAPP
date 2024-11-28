import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import CustomInput from "../../../components/CustomInputs";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Ionicons } from "@expo/vector-icons";
import { ThemedText } from "@/components/ThemedText";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import blogFetch from '../../../axios/config';
import { useRouter } from 'expo-router';

export default function Settings() {
  const router = useRouter();
  const [name, setname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState("");
  const getUsuario = async () => {
    const id = await AsyncStorage.getItem('@id');
    const token = await AsyncStorage.getItem('@token');

    // Remover aspas extras se existirem
    const sanitizedId = id ? id.replace(/['"]+/g, '') : '';
    const sanitizedToken = token ? token.replace(/['"]+/g, '') : '';

    try {
      const response = await blogFetch.get(`/user/getUser/${sanitizedId}`, {
        headers: {
          Authorization: `Bearer ${sanitizedToken}`,
        },
      });
      
      const data = response.data;
      setname(data.name);
      setEmail(data.email);
    } catch (error) {
      console.log(error);
    }
  }

  const updateUser = async () => {
    const id = await AsyncStorage.getItem('@id');
    const token = await AsyncStorage.getItem('@token'); // Recuperando o token
     // Remover aspas extras se existirem
     const sanitizedId = id ? id.replace(/['"]+/g, '') : '';
     const sanitizedToken = token ? token.replace(/['"]+/g, '') : '';
     console.log(sanitizedToken);
    try {
        const response = await blogFetch.put(`/user/editUser/${sanitizedId}`, { name, email }, {
            headers: {
                Authorization: `Bearer ${sanitizedToken}`  // Passando o token no cabeçalho
            }
        });

        const data = response.data;
        
        alert('Atualizado com sucesso');
        setPassword('');  // Limpar senha após sucesso

    } catch (error) {
        console.log(error);  // Exibe o erro caso a requisição falhe
    }
}
    const deleteUser = async () => {
      const id = await AsyncStorage.getItem('@id');
      const token = await AsyncStorage.getItem('@token'); // Recuperando o token
     // Remover aspas extras se existirem
     const sanitizedId = id ? id.replace(/['"]+/g, '') : '';
     const sanitizedToken = token ? token.replace(/['"]+/g, '') : '';
      try {
          const response = await blogFetch.delete(`/user/deleteUser/${sanitizedId}`,{
            headers: {
              Authorization: `Bearer ${sanitizedToken}`  // Passando o token no cabeçalho
          }
          });
          router.push('/')
          alert('Usuario deletado com sucesso');

      } catch (error) {
          console.log(error);
      }
    }
    const handleLogout = async () => {
      try {
        await AsyncStorage.removeItem('@id')
        await AsyncStorage.removeItem('@token')
        await AsyncStorage.removeItem('@role')
        alert('Você deslogou da sua conta')
        router.push('/')
       // navigation.navigate('App', { screen: 'Login' });
      } catch(e) {
        alert('Não foi possivel fazer o logout')
      }
    
      console.log('Done.')
    } 

  useEffect(() => {
    getUsuario();
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleLogout} style={{width:120,flexDirection:'row',alignContent:'flex-start',justifyContent:'flex-start',padding:5}}>
        <Ionicons name="log-out" size={25} color="white" />
        <Text style={{fontSize:20, color:'#fff'}}>Sair</Text>
        </TouchableOpacity>
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
              marginBottom:10
            }}
          >
            <Ionicons name="people-circle" size={120} color="gray" />
          </View>
          <Text style={{ fontSize: 30, marginLeft: 10 }}>{name}</Text>
        </View>
        <View style={styles.infosContent}>
          <ThemedText type="subtitle" style={{ marginHorizontal: 20 }}>
            Informações pessoais
          </ThemedText>
          <CustomInput
            containerStyle={{ marginHorizontal: 20, marginTop: 10 }}
            placeholder={"Login"}
            value={name}
            onChangeText={setname}
          />
          <CustomInput
            containerStyle={{ marginHorizontal: 20, marginTop: 10 }}
            placeholder={"Email"}
            value={email}
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
            style={styles.changeButton}
            onPress={updateUser}
          >
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.changeButton}
            onPress={deleteUser}
          >
            <Text style={styles.buttonText}>Deletar conta</Text>
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
    height: 500,
    marginBottom: 20,
    backgroundColor: "white",
    padding: 20,
    gap: 8,
    width: Dimensions.get("window").width,
  },
  changeButton: {
    width: 300,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: "#112683",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: "white",
  },
});
