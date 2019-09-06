import React from "react";
import { Button } from 'react-native';

import CounterApp from './CounterApp';
import PostNew from './PostNew'
import { Provider } from 'react-redux';
import { store } from './store';

class Detalhe3 extends React.Component {

    render() {

        return (
            <Provider store={store}>
                <PostNew />
                <CounterApp />
                <Button title='Tela Detalhe 4' onPress={() => { this.props.navigation.navigate('Detalhe4') }}></Button>
            </Provider>
        );
    }
}

export default Detalhe3;