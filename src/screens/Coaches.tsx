import {ScrollView, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import AppScreen from '../components/AppScreen/AppScreen';
import {coaches} from '../constants/coaches';
import AppText from '../components/AppText/AppText';
import {COLORS} from '../constants/theme';
import Size from '../utils/useResponsiveSize';

const Coaches = ({navigation}: any) => {
  const handleNav = (coach: {name: string; location: string}) => {
    navigation.navigate('bookingPage', {
      name: coach.name,
      location: coach.location,
    });
  };

  return (
    <AppScreen>
      <ScrollView contentContainerStyle={{padding: 7, marginTop: 30}}>
        {coaches.map(coach => {
          return (
            <Pressable
              key={coach.id}
              onPress={() => handleNav(coach)}
              style={styles.wrapper}>
              <AppText style={styles.name}>{coach.name}</AppText>
              <AppText style={styles.location}>{coach.location}</AppText>
            </Pressable>
          );
        })}
      </ScrollView>
    </AppScreen>
  );
};

export default Coaches;

const styles = StyleSheet.create({
  wrapper: {
    elevation: 4,
    backgroundColor: COLORS.secondary,
    flex: 1,
    padding: Size.calcAverage(10),
    marginBottom: Size.calcHeight(30),
  },

  name: {
    fontSize: Size.calcAverage(22),
    fontWeight: '700',
  },

  location: {
    fontSize: Size.calcAverage(16),
    color: COLORS.grayOne,
  },
});
