import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Router, Scene, Stack } from 'react-native-router-flux'
import Login from './pages/Login';
import Contato from './pages/Contatos';
import Form from './pages/Form';
import Cadastro from './pages/Cadastro';


class component extends Component {
render() {
    return(
        <Router >
            <Stack   navigationBarStyle={{backgroundColor:'#e53935'}} titleStyle={{color:'#fff'}}> 
                <Scene  title={'Agenda App'}   initial  key={'login'} component={Login}/>
                <Scene     backButtonTintColor={'#E1E2E1'}  title={'Contato'}  key={'contatos'} component={Contato} />
                <Scene    backButtonTintColor={'#E1E2E1'}  title={'Formulario'}  key={'formulario'} component={Form}/> 
                <Scene    backButtonTintColor={'#E1E2E1'}  title={'Cadastro de Usuário'}  key={'cadastro'} component={Cadastro}/> 

            </Stack>
        </Router>
    );
}
}
const estilo = StyleSheet.create({
    main:{
        flex:1
        },
    button:{
    },
    input:{
    }
})
export default component;