import React from "react";
import { Button } from 'react-native';

import CounterApp from './CounterApp';
import PostNew from './PostNew'

import { Provider } from 'react-redux';
import { store } from './store';

class Detalhe2 extends React.Component {

    render() {

        return (
            <Provider store={store}>
                <PostNew />
                <CounterApp />
                <Button title='Tela Detalhe 3' onPress={() => { this.props.navigation.navigate('Detalhe3') }}></Button>
            </Provider>
        );
    }
}

export default Detalhe2;