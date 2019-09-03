import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './src/Home';
import Detalhe from './src/Detalhe';
import Detalhe2 from './src/Detalhe2';
import Detalhe3 from './src/Detalhe3';
import Detalhe4 from './src/Detalhe4';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  Detalhe: {
    screen: Detalhe,
    navigationOptions: {
      title: 'Detalhe'
    }
  },
  Detalhe2: {
    screen: Detalhe2,
    navigationOptions: {
      title: 'Detalhe2'
    }
  },
  Detalhe3: {
    screen: Detalhe3,
    navigationOptions: {
      title: 'Detalhe3'
    }
  },
  Detalhe4: {
    screen: Detalhe4,
    navigationOptions: {
      title: 'Detalhe4'
    }
  }
});

export default createAppContainer(AppNavigator);


