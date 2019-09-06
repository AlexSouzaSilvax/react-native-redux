import React from "react";
import {
    View,
    Text,
    TextInput,
    FlatList
} from "react-native";

import { connect } from 'react-redux'
import { bindActionCreators } from "redux";

import { atualizaNome, atualizaSobrenome } from './action';

class Data extends React.Component {

    constructor(props) {
        super(props);

        this.atualizaNome = this.atualizaNome.bind(this);
        this.atualizaSobrenome = this.atualizaSobrenome.bind(this);
    }

    atualizaNome(nome) {
        console.log('obj modificado: ', nome);
        this.props.atualizaNome(nome);
    }

    atualizaSobrenome(sobrenome) {
        console.log('obj modificado: ', sobrenome);
        this.props.atualizaSobrenome(sobrenome);
    }

    render() {

        return (
            <View style={{ margin: 30, justifyContent: 'center', alignItems: 'center' }}>
                <FlatList
                    data={this.props.data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) =>
                        <View>
                            <TextInput style={{ borderWidth: 1, borderColor: 'black', width: 300 }}
                                onChangeText={this.atualizaNome}
                                value={item.nome}
                            />
                            <Text/>
                            <TextInput style={{ borderWidth: 1, borderColor: 'black', width: 300 }}
                                onChangeText={this.atualizaNome}
                                value={item.sobrenome}
                            />
                        </View>
                    }
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.dataReducer.data
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ atualizaNome, atualizaSobrenome }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Data);
