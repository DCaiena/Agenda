import React, {Component} from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
  Text,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Services from '../services';
import logo from '../contact-book.png'
const {width, height} = Dimensions.get('screen');

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
    };
  }

  async login() {
    try {
      let {email, senha} = this.state;
      let item = await Services.post('/login', {email, senha});
      Actions.push('contatos', {item});
      if (resp) {
      } else {
        Alert.alert('Opa', 'Parece que você não pode entrar :>');
      }
    } catch (error) {
      console.log(error);
      alert(error);
    }
  }
  render() {
    let {email, senha} = this.state;
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#E1E2E1',
        }}>
        <View>
            <Image
            source={logo}
            style={{width:100, height:100, alignSelf:'center', marginVertical:10}}
            />
          <View style={{justifyContent:'center'}}>
            <Text style={{fontWeight:'bold'}} >Email</Text>
            <View style={{borderBottomColor:'#000', borderBottomWidth:2, width:width/2}}>
            <TextInput
              placeholder={'email@gmail.com'}
              onChangeText={(email) => this.setState({email})}
              value={email}
            />
            </View>
          </View>
        </View>
          <View style={{justifyContent:'center', marginVertical:10}}>
          <Text style={{fontWeight:'bold'}}>Senha</Text>
          <View style={{borderBottomColor:'#000', borderBottomWidth:2, width:width/2}}>
          <TextInput
            placeholder={'Área de senha'}
            secureTextEntry={true}
            onChangeText={(senha) => this.setState({senha})}
            value={senha}
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
          title={'Entrar!'}
          onPress={() => this.login()}
        />
        <Buttao
          style={{
            padding: 10,
            backgroundColor: '#fff',
            elevation: 5,
            borderRadius: 10,
          }}
          txtStyle={{color: '#ff6f60', fontSize: 18}}
          title={'Cadastrar'}
          onPress={() => Actions.cadastro()}
        />
      </View>
    );
  }
}

export function Buttao(props) {
  return (
    <TouchableOpacity
      style={[{marginVertical: 10}, props.style]}
      onPress={props.onPress}>
      <Text style={[{}, props.txtStyle]} children={props.title} />
    </TouchableOpacity>
  );
}

const estilo = StyleSheet.create({
  main: {
    flex: 1,
  },
  button: {},
  input: {},
});
export default Login;
