import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
} from "react-native";
import CustomInput from "../../../components/CustomInputs";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import blogFetch from "../../../axios/config"
import { ThemedText } from "@/components/ThemedText";
export default function Feedback() {
  const [descricao, setDescricao] = useState("");
  const [modalActive, setModalActive] = useState(false)
  const insertFeedback = async () => {
    const id = await AsyncStorage.getItem('@id');
    const token = await AsyncStorage.getItem('@token');

    try {

      const response = await blogFetch.post(`/feedbackAPI/createFeedback/${id}`,{
        descricao: descricao
      }, {
        
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = response.data;
      setModalActive(true)
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <Modal
          animationType="fade"
          transparent={true}
          visible={modalActive} >
          <View style={styles.outerView}>
            <View style={styles.modalView}>
              <ThemedText type="subtitle">
                Muito obrigado pelo seu Feedback, graças a ele podemos melhorar sempre!
              </ThemedText>
              <View style={{flexDirection:'row',width:200, padding:15, justifyContent:'space-between',right:10}}>
                <TouchableOpacity style={styles.cancelButton} 
                onPress={() => {
                  setModalActive(false); // Fecha o modal
                  setDescricao('');           // Limpa o texto
                }}>
                  <Text style={{color:'#fff'}}>Cancelar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>



      <View style={styles.container}>
        <Text style={{ fontSize: 30, textAlign: "center" }}>
          Compartilhe sua opinião conosco e nos ajude a melhorar o App!
        </Text>

        <View style={{ marginTop: 10 }}>
          <TextInput
            underlineColorAndroid="transparent"
            value={descricao} // Vincula o estado ao TextInput
            onChangeText={(value) => setDescricao(value)} // Atualiza o estado ao digitar
            placeholder="Digite aqui"
            placeholderTextColor="grey"
            numberOfLines={10}
            multiline={true}
            style={{
              width: 300,
              height: 300,
              borderWidth: 1,
              borderRadius: 5,
              backgroundColor: "white",
              justifyContent: "flex-start",
            }}
          />
        </View>
        <TouchableOpacity style={styles.feedbackButton} onPress={insertFeedback}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",

    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EBBA2D",
  },
  feedbackButton: {
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
  cancelButton: {
    width: 70,
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: "#e89415",
    alignItems: "center",
    alignSelf: "center",
  },

  outerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)'
  },
  modalView: {
    backgroundColor: 'white',
    width: 250,
    height: 220,
    padding: 30,
    borderRadius: 20
  },
});
