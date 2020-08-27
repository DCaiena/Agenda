import React, {Component} from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  TextInput,
  Text,
  Alert,
} from 'react-native';
import {Buttao} from './Login';
import Services from '../services';
import {Actions} from 'react-native-router-flux';
const {width, height} = Dimensions.get('screen');

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: '',
      nome: '',
      numero: '',
    };
  }

  componentDidMount() {
    let {item} = this.props;
    this.setState({...item});
  }

  async salvar() {
    try {
      let resp = await Services.put('', {...this.state});
      if (resp) {
        Alert.alert('Sucesso', 'Contato adicionado');
        Actions.pop();
      }
    } catch (error) {
      alert(error);
    }
  }

  render() {
    let {nome, numero} = this.state;
    return (
      <View style={{backgroundColor: '#E1E2E1', flex: 1}}>
        <View style={{margin:30}}>
        <Text style={{fontWeight:'bold'}} >Contato</Text>
          <TextInput
            style={{marginVertical: 10}}
            placeholder={'(00)00000-0000'}
            onChangeText={(nome) => this.setState({nome})}
            value={nome}
          />
            <Text style={{fontWeight:'bold'}} >Nome</Text>

          <TextInput
            style={{marginVertical: 10}}
            placeholder={'nome'}
            onChangeText={(numero) => this.setState({numero})}
            value={numero}
          />
          <Buttao
            style={{
              backgroundColor: '#ff6f60',
              borderRadius: 10,
              elevation: 5,
              padding: 10,
              marginHorizontal: 20,
              marginTop:30
            }}
            txtStyle={{color: '#fff', fontSize: 18, textAlign: 'center'}}
            title={'Salvar'}
            onPress={() => this.salvar()}
          />
        </View>
      </View>
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
export default Form;
