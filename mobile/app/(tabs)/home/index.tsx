import { Text, View, SafeAreaView, StyleSheet } from "react-native";
export default function Home() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text >Bem Vindo(a)</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,

        backgroundColor: '#e89415'
    },

});
