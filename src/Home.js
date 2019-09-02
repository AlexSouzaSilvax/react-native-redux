import React, { Component } from "react";
import { StyleSheet, Button } from "react-native";
import CounterApp from './CounterApp'
import { Provider } from 'react-redux'

import { store } from './store';

class App extends Component {

    render() {

        return (
            <Provider store={store}>
                <CounterApp />
                <Button title='Tela Detalhe' onPress={() => { this.props.navigation.navigate('Detalhe') }}></Button>
            </Provider>
        );
    }
}

export default App

// export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

/**
 * Store - holds our state - THERE IS ONLY ONE STATE
 * Action - State can be modified using actions - SIMPLE OBJECTS
 * Dispatcher - Action needs to be sent by someone - known as dispatching an action
 * Reducer - receives the action and modifies the state to give us a new state
 *  - pure functions
 *  - only mandatory argument is the 'type'
 * Subscriber - listens for state change to update the ui
 */