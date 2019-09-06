import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";

import { connect } from 'react-redux'

class CounterApp extends React.Component {

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
