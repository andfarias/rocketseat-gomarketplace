import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Image } from 'react-native';
import Logo from '../assets/logo.png';
import Dashboard from '../pages/Dashboard';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: true,
      cardStyle: { backgroundColor: '#f4f9f9',},
    }}
    initialRouteName="Dashboard"
  >
    <App.Screen
      options={{
        headerShown: true,
        headerTransparent: false,
        headerTitle: () => <Image source={Logo} />,
        headerStyle: {
          backgroundColor: '#ccf2f4',
        },
        headerTitleAlign: 'center',
      }}
      name="Dashboard"
      component={Dashboard}
    />
  </App.Navigator>
);

export default AppRoutes;
