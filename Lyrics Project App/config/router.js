import React from 'react';
import {
  createDrawerNavigator,
  createStackNavigator,
  DrawerItems
} from 'react-navigation';
import * as Expo from 'expo';

import { Ionicons } from '@expo/vector-icons';

import {
  StyleSheet,
  
} from 'react-native';

import handleShare from '../utils/shareHelper';

import colours from './colours';


import SearchScreen from '../screens/SearchScreen';
import DetailsScreen from '../screens/DetailsScreen';

const { ...extra } = Expo.Constants.manifest.extra;

export const MainStack = createStackNavigator({
  Search: {
    screen: SearchScreen,
    navigationOptions: ({ navigation }) => ({
      title: null,
      headerTransparent: true,
      headerLeft: (
        <Ionicons
          name="md-menu"
          size={26}
          style={{ marginLeft: 10, padding: 10 }}
          color={colours.secondaryGrey}
          onPress={() => navigation.openDrawer()}
        />
      )
    })
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        borderBottomWidth: 0,
        backgroundColor: 'rgba(0,0,0,0.2)',
        elevation: 0
      },
      headerTransparent: true,
      headerTintColor: 'rgba(255,255,255,0.7)',
      headerRight: (
        <Ionicons
          name="md-share"
          title="Share"
          size={24}
          style={{ marginRight: 10, padding: 10 }}
          color="rgba(255,255,255,0.7)"
          onPress={() => handleShare(
            `Check out lyrics for ${navigation.state.params.title} by ${
              navigation.state.params.artist.name
            } on ${extra.appName}!`,
            `${extra.social.expoApp}`,
            `${extra.appName}`,
            'Details'
          )
          }
        />
      )
    })
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 30
  },
  itemStyle: {
    borderLeftWidth: 3,
    borderLeftColor: colours.primaryTeal
  }
});
