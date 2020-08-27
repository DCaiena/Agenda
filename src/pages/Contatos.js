import React, { Component } from 'react';
import { View, Dimensions, StyleSheet, FlatList, Text ,TouchableOpacity,  } from 'react-native';
const { width, height } = Dimensions.get('screen');
import Service from '../services/index'
import {Buttao} from "./Login";
import { Actions } from 'react-native-router-flux';
class Contato extends Component {
    constructor(props){
        super(props)
        this.state = {
            loading:false,
            contatos:[]
        }
    }   
    async getContatos(){
        try {
            let contatos = await Service.get('/contatos')
            this.setState({contatos})
        } catch (error) {
            console.log(error)   
        }
    }

    componentDidMount(){
        this.getContatos()
    }
render() {
    let { contatos } = this.state
    return(
        <View
        style={{flex:1, alignItems:'center',  backgroundColor:'#E1E2E1'}}>
            <Buttao
            style={{backgroundColor:'#ff6f60', borderRadius:10, elevation:5 ,padding:10}}
            txtStyle={{color:'#fff',  fontSize:18}}
            title={'Adicione contato'}
            onPress ={() => Actions.push('formulario',{})}
            />
            <FlatList
            onRefresh={() => this.getContatos()}
            refreshing={this.state.loading}
            data={contatos}
            keyExtractor = {(item, index) => index.toString()}
            renderItem ={({item, index}) => <Contatinho style={{}} onPress={() => Actions.push('formulario',{ item })} {...item}/> }
            />
            
        </View>
    );
}
}

function Contatinho(props){
    return (
        <TouchableOpacity
        style={[{marginVertical:10, backgroundColor:'#b61825', padding:15, borderRadius:10, marginHorizontal:10}]}
        onPress={props.onPress}
        >
            <Text
            style={{color:'#fff', fontWeight:'bold'}}
           children={'Contato: '+props.numero}
           />
            <Text
            style={{color:'#fff', fontWeight:'bold'}}
            children={'Nome: ' +props.nome}
            />
        </TouchableOpacity>
    )
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
export default Contato;