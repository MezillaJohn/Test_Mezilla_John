import {Platform} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS} from '../constants/theme';
import Size from '../utils/useResponsiveSize';
import {Ionicons} from '@expo/vector-icons';
import BookSession from '../screens/CancledSessions';
import AppointmentList from '../screens/AppointmentList';
import Coaches from '../screens/Coaches';
import CancledSessions from '../screens/CancledSessions';
import {FontAwesome5} from '@expo/vector-icons';
import {FontAwesome6} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const HomeBottomTabNavigation = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: COLORS.whiteOne},
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.darkTwo,
          headerTitle: '',
          headerShadowVisible: false,
          headerShown: true,

          tabBarIconStyle: {
            marginTop: Size.calcHeight(4),
          },
          tabBarStyle: {
            backgroundColor: COLORS.whitePrimary,
            height: Platform.OS === 'android' ? 90 : 120,
            paddingTop: 15,
            alignItems: 'center',
          },
          tabBarLabelStyle: {
            fontSize: Size.calcAverage(12),
            marginBottom: Platform.OS === 'android' ? 9 : 0,
          },
        }}>
        <Tab.Screen
          options={{
            tabBarIcon: ({color, size, focused}) => {
              return (
                <Ionicons name="person" size={28} color={COLORS.grayOne} />
              );
            },
            tabBarLabel: 'Coaches',
            headerShown: false,
          }}
          name="coach"
          component={Coaches}
        />

        <Tab.Screen
          options={{
            tabBarIcon: ({color, size, focused}) => {
              return (
                <FontAwesome5
                  name="list-alt"
                  size={28}
                  color={COLORS.grayOne}
                />
              );
            },
            tabBarLabel: 'Appointment',
            headerShown: false,
          }}
          name="ledger"
          component={AppointmentList}
        />

        <Tab.Screen
          options={{
            tabBarIcon: ({color, size, focused}) => {
              return (
                <FontAwesome6 name="cancel" size={28} color={COLORS.grayOne} />
              );
            },
            tabBarLabel: 'Cancled',
            headerShown: false,
          }}
          name="cancled"
          component={CancledSessions}
        />
      </Tab.Navigator>
    </>
  );
};

export default HomeBottomTabNavigation;
