import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {cancelSession, selectAllSessions} from '../redux/bookSlice';
import AppScreen from '../components/AppScreen/AppScreen';
import AppText from '../components/AppText/AppText';
import Size from '../utils/useResponsiveSize';
import {COLORS} from '../constants/theme';

const AppointmentList = () => {
  const sessions = useSelector(selectAllSessions);

  const dispatch = useDispatch();

  const handleCancle = (id: number) => {
    dispatch(cancelSession(id));
  };

  const filteredAppointment = sessions?.filter(
    session => session.upcoming === true && session.canceled === false,
  );

  console.log(sessions);

  return (
    <AppScreen scrollview>
      <AppText
        style={{
          fontSize: Size.calcAverage(18),
          fontWeight: '700',
          textAlign: 'center',
          marginBottom: Size.calcHeight(60),
        }}>
        Upcoming Sessions
      </AppText>
      {sessions?.length === 0 ? (
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <AppText
            style={{fontSize: Size.calcAverage(16), color: COLORS.danger}}>
            You have not booked any session
          </AppText>
        </View>
      ) : filteredAppointment?.length === 0 ? (
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <AppText style={{color: COLORS.primary}}>
            You have No Upcoming Appointment
          </AppText>
        </View>
      ) : (
        <View>
          {filteredAppointment?.map((session, index) => {
            return (
              <View key={session.id}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderColor: '#ccc',
                    borderWidth: 1,
                    marginBottom: Size.calcHeight(20),
                    padding: Size.calcAverage(15),
                    borderRadius: 10,
                  }}>
                  <View>
                    <AppText
                      style={{
                        fontSize: Size.calcAverage(18),
                        fontWeight: '700',
                      }}>
                      {session.name}
                    </AppText>
                    <AppText
                      style={{
                        fontSize: Size.calcAverage(16),
                        color: COLORS.grayOne,
                        marginBottom: 3,
                      }}>
                      {session.location}
                    </AppText>
                    <AppText
                      style={{
                        fontSize: Size.calcAverage(16),
                        color: COLORS.grayOne,
                        marginBottom: 3,
                      }}>
                      {session.date}
                    </AppText>
                    <AppText
                      style={{
                        fontSize: Size.calcAverage(16),
                        color: COLORS.grayOne,
                        marginBottom: 3,
                      }}>
                      {session.time}
                    </AppText>
                  </View>
                  <Pressable onPress={() => handleCancle(session.id)}>
                    <AppText style={{color: COLORS.danger}}>Cancle</AppText>
                  </Pressable>
                </View>
              </View>
            );
          })}
        </View>
      )}
    </AppScreen>
  );
};

export default AppointmentList;
