import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeBottomTabNavigation from './HomeBottomTabNavigation';
import BookingPage from '../screens/BookingPage';

const Stack = createNativeStackNavigator();

export default function AppStackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={HomeBottomTabNavigation}
      />

      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="bookingPage"
        component={BookingPage}
      />
    </Stack.Navigator>
  );
}
