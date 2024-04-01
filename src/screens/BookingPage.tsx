import {View, Pressable, Button} from 'react-native';
import AppScreen from '../components/AppScreen/AppScreen';
import {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import AppText from '../components/AppText/AppText';
import Size from '../utils/useResponsiveSize';
import {COLORS} from '../constants/theme';
import DropDown from '../assets/svg/dropdown.svg';
import {useAppDispatch} from '../hooks/useTypedSelector';
import {saveSessions, selectAllSessions} from '../redux/bookSlice';
import {formatedDate, formatedTime} from '../utils/dateTimeFormat';
import {useSelector} from 'react-redux';

const BookingPage = ({route, navigation}: any) => {
  const sessions = useSelector(selectAllSessions);

  const dispatch = useAppDispatch();
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [dateOpen, setDateOpen] = useState(false);
  const [timeOpen, setTimeOpen] = useState(false);
  const params = route.params;

  const handleBook = () => {
    const nextId =
      sessions.length > 0 ? sessions[sessions.length - 1].id + 1 : 1;

    dispatch(
      saveSessions({
        id: nextId,
        name: params.name,
        location: params.location,
        date: formatedDate(date),
        time: formatedTime(time),
        upcoming: true,
        canceled: false,
      }),
    );
    navigation.navigate('ledger');
  };

  return (
    <AppScreen>
      <AppText
        style={{
          textAlign: 'center',
          fontSize: Size.calcAverage(20),
          fontWeight: '700',
          marginBottom: Size.calcAverage(30),
        }}>
        Book
      </AppText>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <AppText style={{fontSize: Size.calcAverage(16), fontWeight: '700'}}>
          {params.name}
        </AppText>
        <AppText
          style={{fontSize: Size.calcAverage(14), color: COLORS.grayOne}}>
          {params.location}
        </AppText>
      </View>

      <View style={{marginTop: Size.calcHeight(40)}}>
        <Pressable
          onPress={() => setDateOpen(true)}
          style={{
            borderColor: COLORS.whiteOne,
            borderWidth: 1,
            borderRadius: 8,
            marginBottom: Size.calcHeight(20),
            padding: 15,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <AppText>Pick Date</AppText>
          <DropDown width={20} height={20} fill="#ccc" />
        </Pressable>
        <Pressable
          onPress={() => setTimeOpen(true)}
          style={{
            borderColor: COLORS.whiteOne,
            borderWidth: 1,
            borderRadius: 8,
            padding: 15,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <AppText>Select Time</AppText>
          <DropDown width={20} height={20} />
        </Pressable>
      </View>

      <View style={{marginTop: Size.calcHeight(30)}}>
        <Button title="Book" onPress={() => handleBook()} />
      </View>
      <DatePicker
        modal
        open={dateOpen}
        mode="date"
        date={date}
        onConfirm={date => {
          setDateOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setDateOpen(false);
        }}
      />
      <DatePicker
        modal
        open={timeOpen}
        mode="time"
        date={time}
        onConfirm={time => {
          setTimeOpen(false);
          setDate(time);
        }}
        onCancel={() => {
          setTimeOpen(false);
        }}
      />
    </AppScreen>
  );
};

export default BookingPage;
