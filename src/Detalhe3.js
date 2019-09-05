import React from "react";
import { Button } from 'react-native';

import CounterApp from './CounterApp';

import { Provider } from 'react-redux';
import { store } from './store';

class Detalhe3 extends React.Component {

    render() {

        return (
            <Provider store={store}>
                <CounterApp />
                <Button title='Tela Detalhe 4' onPress={() => { this.props.navigation.navigate('Detalhe4') }}></Button>
            </Provider>
        );
    }
}

export default Detalhe3;