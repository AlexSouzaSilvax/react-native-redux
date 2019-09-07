import React from "react";
import {
    View,
    Text,
    TextInput,
    FlatList
} from "react-native";

import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import axios from 'axios';

import { atualizaId, atualizaNome, atualizaSobrenome, alimentaRedux } from './action';

class Data extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [
                {
                    id: '',
                    nome: ''
                }
            ]
        }

        this.atualizaId = this.atualizaId.bind(this);
        this.atualizaNome = this.atualizaNome.bind(this);
        this.atualizaSobrenome = this.atualizaSobrenome.bind(this);
        this.alimentaRedux = this.alimentaRedux.bind(this);
    }

    atualizaId(id) {
        console.log('Id: ' + this.state.data[0].nome);
        this.props.atualizaId(id);
    }

    atualizaNome(nome) {
        console.log('Nome: ' + nome);
        this.props.atualizaNome(nome);
    }

    atualizaSobrenome(sobrenome) {
        console.log('Sobrenome: ' + sobrenome);
        this.props.atualizaSobrenome(sobrenome);
    }

    alimentaRedux(data) {
        console.log('Data: ' + data);
        this.props.alimentaRedux(data);
    }

    async componentDidMount() {
        await axios.get('') //
            .then((response) => {
                console.log("Lista pessoas: ", response.data)
                this.setState({ data: response.data })

                let id = this.state.data[0].id;
                this.atualizaId(id);
                console.log('ID Data: ' + id);

                let nome = this.state.data[0].nome;
                this.atualizaNome(nome);
                console.log('Nome Data: ' + nome);

                let sobrenome = this.state.data[0].fantasia;
                this.atualizaSobrenome(sobrenome);
                console.log('Sobrenome Data: ' + sobrenome);


            }).catch((err) => {
                console.log("Erro ao listar listaPessoas: ", err)
                console.log("Nenhuma pessoa foi encontrada");
            })

    }


    render() {

        return (

            <View style={{ margin: 30, justifyContent: 'center', alignItems: 'center' }}>

                <TextInput style={{ borderWidth: 1, borderColor: 'black', width: 300 }}
                    onChangeText={this.atualizaId}
                    value={this.props.id}
                />
                <Text />
                <TextInput style={{ borderWidth: 1, borderColor: 'black', width: 300 }}
                    onChangeText={this.atualizaNome}
                    value={this.props.nome}
                />
                <Text />
                <TextInput style={{ borderWidth: 1, borderColor: 'black', width: 300 }}
                    onChangeText={this.atualizaSobrenome}
                    value={this.props.sobrenome}
                />
                <Text />
                <Text>ID: {this.props.id}</Text>
                <Text>NOME: {this.props.nome}</Text>
                <Text>SOBRENOME: {this.props.sobrenome}</Text>
                <Text />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        id: state.dataReducer.id,
        nome: state.dataReducer.nome,
        sobrenome: state.dataReducer.sobrenome
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ atualizaId, atualizaNome, atualizaSobrenome, alimentaRedux }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Data);
