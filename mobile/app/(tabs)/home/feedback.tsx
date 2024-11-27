import { Text, View, SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import CustomInput from '../../../components/CustomInputs'
import { useState } from "react";
export default function Feedback() {
    const [feedback, setFeedback] = useState('');
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={{ fontSize: 30, textAlign: "center" }}>Compartilhe sua opinião conosco e nos ajude a melhorar o App!</Text>
               
               <View style={{marginTop:10}}>
               <TextInput
                
                underlineColorAndroid="transparent"
                placeholder="Digite aqui"
                placeholderTextColor="grey"
                numberOfLines={10}
                multiline={true}
                    style={{
                        width:300,
                        height:300,
                        borderWidth: 1,
                        borderRadius: 5,
                        backgroundColor:'white',
                        justifyContent: "flex-start",
                    }}
                />
               </View>
               <TouchableOpacity
          style={styles.feedbackButton}
        >
          <Text style={styles.buttonText}>Enviar</Text>
          
        </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e89415'
    },
    feedbackButton: {
        width: 300,
        paddingVertical: 10,
        borderRadius: 5,
        backgroundColor: '#112683',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 20,
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
    },
});
