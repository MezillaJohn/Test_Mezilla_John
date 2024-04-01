import {
  View,
  StyleSheet,
  Pressable,
  ViewStyle,
  TextStyle,
  Text,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AppText from '../AppText/AppText';
import Size from '../../utils/useResponsiveSize';
import {COLORS} from '../../constants/theme';
import {FONTS} from '../../constants';
import React from 'react';
import {Ionicons} from '@expo/vector-icons';

export interface AppBackHeaderInterface {
  isPaddedHorizontal?: boolean;
  title?: string;
  arrowStyle?: TextStyle;
  style?: ViewStyle;
  titleStyle?: TextStyle;
  handleRightIconPress?: () => void;
  showMoreIcon?: boolean;
  onPress?: () => void;
}

const AppBackHeader = ({
  title,
  style,
  titleStyle,
  isPaddedHorizontal,
  showMoreIcon,
  onPress,
  handleRightIconPress,
}: AppBackHeaderInterface): JSX.Element => {
  const navigation = useNavigation();

  const handleNavigation = () => {
    if (navigation.canGoBack()) navigation.goBack();
  };

  return (
    <SafeAreaView
      style={[
        style,
        {
          backgroundColor: COLORS.secondary,
        },
      ]}>
      <View style={[styles.container]}>
        <Pressable
          hitSlop={Size.calcAverage(20)}
          onPress={onPress ? onPress : handleNavigation}>
          <Ionicons name="chevron-back" size={26} color={COLORS.darkThree} />
        </Pressable>
        <AppText style={[styles.title, titleStyle]}>{title}</AppText>

        {!showMoreIcon && <Text>{'         '}</Text>}

        {showMoreIcon && (
          <Pressable
            hitSlop={Size.calcAverage(20)}
            onPress={handleRightIconPress}>
            ''
          </Pressable>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: Size.calcHeight(70),
    paddingHorizontal: Size.calcWidth(15),
  },

  title: {
    fontSize: Size.calcAverage(16),
    fontFamily: FONTS.Figtree_SemiBold,
    flex: 1,
    textAlign: 'center',
  },
});

export default AppBackHeader;
