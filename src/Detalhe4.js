import React from "react";
import { Button } from 'react-native';

import CounterApp from './CounterApp';
import PostNew from './PostNew'
import { Provider } from 'react-redux';
import { store } from './store';
import Data from './Data'

class Detalhe4 extends React.Component {

    render() {

        return (
            <Provider store={store}>
                <Data />
                <PostNew />
                <CounterApp />
            </Provider>
        );
    }
}

export default Detalhe4;