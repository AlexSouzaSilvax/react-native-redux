import React from "react";
import { Button } from 'react-native';

import CounterApp from './CounterApp';

import { Provider } from 'react-redux';
import { store } from './store';

class Detalhe extends React.Component {

    render() {

        return (
            <Provider store={store}>
                <CounterApp />
                <Button title='Tela Detalhe2' onPress={() => { this.props.navigation.navigate('Detalhe2') }}></Button>
            </Provider>
        );
    }
}

export default Detalhe;