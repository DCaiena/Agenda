import React, {Component} from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  TextInput,
  Image,
  Text,
  ScrollView
} from 'react-native';
const {width, height} = Dimensions.get('screen');

import logo from '../contact-book.png';
import {Buttao} from './Login';
import Services from '../services';
import { Actions } from 'react-native-router-flux';

class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      email: '',
      numero: '',
      senha: '',
    };
  }

  async cadastrar(){
      try {
          let resp = await Services.post('' ,{...this.state})
          if(resp){
              Actions.pop()
          }
      } catch (error) {
          alert(error)
      }
  }

  render() {
    let {email, senha, numero, nome} = this.state;
    return (
        <ScrollView style={{
          flex: 1,
          backgroundColor: '#E1E2E1',
        }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop:20
        }}>
        <View>
          <Image
            source={logo}
            style={{
              width: 100,
              height: 100,
              alignSelf: 'center',
              marginVertical: 10,
            }}
          />
          <View style={{justifyContent: 'center'}}>
            <Text style={{fontWeight: 'bold'}}>Email</Text>
            <View
              style={{
                borderBottomColor: '#000',
                borderBottomWidth: 2,
                width: width / 2,
              }}>
              <TextInput
                placeholder={'email@gmail.com'}
                onChangeText={(email) => this.setState({email})}
                value={email}
              />
            </View>
          </View>
        </View>
        <View style={{justifyContent: 'center', marginVertical: 10}}>
          <Text style={{fontWeight: 'bold'}}>Senha</Text>
          <View
            style={{
              borderBottomColor: '#000',
              borderBottomWidth: 2,
              width: width / 2,
            }}>
            <TextInput
              placeholder={'Área de senha'}
              secureTextEntry={true}
              onChangeText={(senha) => this.setState({senha})}
              value={senha}
            />
          </View>
        </View>
        <View style={{justifyContent: 'center', marginVertical: 10}}>
          <Text style={{fontWeight: 'bold'}}>Senha</Text>
          <View
            style={{
              borderBottomColor: '#000',
              borderBottomWidth: 2,
              width: width / 2,
            }}>
            <TextInput
              placeholder={'Nome'}
              secureTextEntry={true}
              onChangeText={(nome) => this.setState({nome})}
              value={nome}
            />
          </View>
        </View>
        <View style={{justifyContent: 'center', marginVertical: 10}}>
          <Text style={{fontWeight: 'bold'}}>Senha</Text>
          <View
            style={{
              borderBottomColor: '#000',
              borderBottomWidth: 2,
              width: width / 2,
            }}>
            <TextInput
              placeholder={'Número'}
              secureTextEntry={true}
              onChangeText={(numero) => this.setState({numero})}
              value={numero}
            />
          </View>
        </View>
        <Buttao
          style={{
            padding: 10,
            backgroundColor: '#ff6f60',
            elevation: 5,
            borderRadius: 10,
          }}
          txtStyle={{color: '#fff', fontSize: 18}}
          title={'Cadastrar!'}
          onPress={() => this.cadastrar()}
        />
      </View>
      </ScrollView>
    );
  }
}
const estilo = StyleSheet.create({
  main: {
    flex: 1,
  },
  button: {},
  input: {},
});
export default Cadastro;
