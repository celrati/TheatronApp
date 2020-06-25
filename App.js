import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ChatScreen from './src/screens/ChatScreen';
import HomeScreen from './src/screens/HomeScreen';
import TalkScreen from './src/screens/TalkScreen';
import RolesScreen from './src/screens/RolesScreen';
import EditTheatreScreen from './src/screens/EditTheatreScreen';




const switchNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  theatrePieces: createStackNavigator({
    Talk: TalkScreen,
    Chat: ChatScreen,
    Edit: EditTheatreScreen
  }),
  Roles: RolesScreen,
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
      <App />
  );
};