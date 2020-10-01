import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import PrivacyPolicy from './pages/PrivacyPolicy';
import MainTime from './pages/MainTime';
import InfoApp from './pages/InfoApp';

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: '#f0f0f5',
          },
        }}>
        <AppStack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <AppStack.Screen name="MainTime" component={MainTime} />
        <AppStack.Screen name="InfoApp" component={InfoApp} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
