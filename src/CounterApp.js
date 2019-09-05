import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Button
} from "react-native";

import { connect, bindActionCreators } from 'react-redux'

import alterarNome from '../src/action';

class CounterApp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            nome: 'Sou foda'
        }

        this._alterarNome = this._alterarNome.bind(this);
    }

    _alterarNome = (nome) => {
        this.props.alterarNome(nome);
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', width: 250, justifyContent: 'space-around' }}>
                    <TouchableOpacity style={[styles.btn, { left: 0 }]} onPress={() => this.props.aumentarContador()}>
                        <Text style={styles.sinalBtn}>+</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 50 }}>{this.props.counter}</Text>
                    <TouchableOpacity style={styles.btn} onPress={() => this.props.diminuirContador()}>
                        <Text style={[styles.sinalBtn, { fontSize: 45 }]}>-</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ margin: 20 }}>
                    <TextInput style={{ borderWidth: 1, borderColor: 'black', width: 300 }}
                        value={this.props.nome}
                        onChangeText={this._alterarNome}
                    />
                    <Text></Text>
                    <Button title='Alterar Nome' onPress={() => this.props.alterarNome(nome)} />
                    <Text></Text>
                    <Text style={{ fontSize: 30, justifyContent: 'center', alignItems: 'center' }}>{this.props.nome}</Text>
                </View>


            </View>
        );
    }
}

const mapStateToProps = state => ({
    counter: state.contadorReducer.counter,
    nome: state.contadorReducer.nome
});

const mapDispatchToProps = dispatch => {
    return {
        aumentarContador: () => dispatch({ type: 'AUMENTAR_CONTADOR' }),
        diminuirContador: () => dispatch({ type: 'DIMINUIR_CONTADOR' }),
        alterarNome: () => dispatch({ type: 'ALTERAR_NOME' }),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterApp);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn: {
        bottom: 0,
        right: 0,
        position: 'absolute',
        height: 70,
        width: 70,
        backgroundColor: '#00aced',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    sinalBtn: {
        fontSize: 35,
        color: 'white'
    }
});

//https://youtube.com/watch?v=E3VXQOK2QOM&list=PLUbb2i4BuuzATHuKoP6BcSHLxnXN4dzj6&index=13 assite essa merda dessa playlist