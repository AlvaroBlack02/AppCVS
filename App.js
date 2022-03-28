import React, {useState} from 'react';

import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';




export default function App() {


 //1 passo é criar as variaveis
 var [totalReal, setTotalReal] = useState('');
 var [totalDollar, setTotalDollar] = useState('');
 var [cotacao, setCotacao] = useState('');

 //2 passo - é criar a função que calcular
 function CalcularTotal(){

  //Total Dollar = QuatReal / COTAÇÃO do dia do Dollar
  totalDollar = parseFloat(totalReal) / parseFloat(cotacao);

  alert("O total em Dollar será: " + totalDollar.toFixed(2));



 }



  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Aplicativo Dollar</Text>

      <TextInput style={styles.campo} placeholder="Total em Reais..." 
      keyboardType="numeric"
      onChangeText={(totalReal) => setTotalReal(totalReal)}
      />
      
      <TextInput style={styles.campo} placeholder="Cotação do dia" 
      keyboardType="numeric"
      onChangeText={(cotacao) => setCotacao(cotacao)}
      />

      <TouchableOpacity style={styles.botao} onPress={CalcularTotal}>
      <Text>CALCULAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#97FFFF",
  },
  titulo:{
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 40,
    fontSize: 30,
    color: "#FFF"
  },

  campo:{
    backgroundColor: "#FFF",
    borderRadius: 30,
    margin: 15,
    padding: 10,
    fontSize: 15,
    color: "#00F5FF"
  },
  botao:{
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    backgroundColor: '#54FF9F',
    padding: 10,
  },

});
