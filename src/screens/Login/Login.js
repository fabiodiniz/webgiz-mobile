import React from 'react'
import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'

export default props => {
  return (
    <ImageBackground
      source={ require('../../assets/background.png') }
      style={ styles.imageBackground }
    >
      <Image source={ require('../../assets/logo.png') } />

      <View style={{
        alignItems: 'center',
        width: '100%'
      }}>
        <Text style={{
          color: '#212121',
          fontWeight: 'bold'
        }}>ACESSO À PLATAFORMA</Text>
        {separator}

        <View style={ styles.inputContainer }>
          <TextInput
            style={ styles.textInput }
            placeholder="RA"
          />
          <TextInput
            style={ styles.textInput }
            placeholder="Senha"
          />
        </View>

        <TouchableOpacity
          onPress={ () => {} }
          style={ styles.button }
        >
          <Text style={ styles.buttonText }>ACESSAR</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <Text>Esqueci minha senha</Text>
      </TouchableOpacity>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  imageBackground: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 60,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 60 + 22,
  },
  button: {
    backgroundColor: '#9BCB64',
    borderRadius: 4,
    marginBottom: 30,
    marginTop: 30,
    padding: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  inputContainer: {
    width: '100%',
  },
  textInput: {
    backgroundColor: 'white',
    borderColor: '#E3F2FD',
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 10,
    marginTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
  }
})

const separator = (
  <View style={{
    alignItems: 'center',
    width: '100%'
  }}>
    <View style={{
      borderBottomWidth: 3,
      borderColor: '#AED581',
      width: 180,
      marginTop: 10
    }} />
    <View style={{
      borderBottomWidth: 1,
      borderColor: '#DBDBDB',
      width: '100%',
      marginBottom: 30
    }} />
  </View>
)
