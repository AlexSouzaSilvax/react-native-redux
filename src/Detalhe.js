import React from "react";
import { Button } from 'react-native';

import CounterApp from './CounterApp';
import PostNew from './PostNew'
import Data from './Data'
import { Provider } from 'react-redux';
import { store } from './store';

class Detalhe extends React.Component {

    render() {

        return (
            <Provider store={store}>
                <Data />
                <PostNew />
                <CounterApp />                
                <Button title='Tela Detalhe2' onPress={() => { this.props.navigation.navigate('Detalhe2') }}></Button>
            </Provider>
        );
    }
}

export default Detalhe;