import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  ViewProps,
  ScrollView,
  ViewStyle,
  KeyboardAvoidingView,
  Platform,
  StatusBarStyle,
} from 'react-native';

import {COLORS} from '../../constants/theme';
import Size from '../../utils/useResponsiveSize';
import React from 'react';
import AppBackHeader, {
  AppBackHeaderInterface,
} from '../AppBackHeader/AppBackHeader';

interface ScreenProps extends ViewProps {
  containerStyle?: ViewStyle;
  scrollview?: boolean;
  showBackHeader?: boolean;
  backHeaderProps?: AppBackHeaderInterface;
  scrollEnabled?: boolean;
  keyboardAvoiding?: boolean;
  barStyle?: StatusBarStyle;
  statusBackground?: string;
  refreshControl?: any;
}

const AppScreen = (props: ScreenProps): JSX.Element => {
  const {
    children,
    style,
    containerStyle,
    scrollview,
    backHeaderProps = {title: ''},
    showBackHeader,
    scrollEnabled = true,
    keyboardAvoiding,
    barStyle,
    statusBackground,
    refreshControl,
  } = props;

  return (
    <SafeAreaView style={[styles.screen, containerStyle]}>
      <StatusBar
        backgroundColor={statusBackground ? statusBackground : COLORS.secondary}
        barStyle={barStyle ? barStyle : 'dark-content'}
      />
      {showBackHeader && <AppBackHeader {...backHeaderProps} />}
      {scrollview ? (
        <ScrollView
          refreshControl={refreshControl}
          scrollEnabled={scrollEnabled}
          showsVerticalScrollIndicator={false}
          style={[styles.view, style]}>
          {children}
        </ScrollView>
      ) : keyboardAvoiding ? (
        Platform.OS === 'ios' ? (
          <KeyboardAvoidingView
            keyboardVerticalOffset={Size.calcHeight(60)}
            behavior="padding"
            style={[styles.view, style]}>
            {children}
          </KeyboardAvoidingView>
        ) : (
          <View style={[styles.view, style]}>{children}</View>
        )
      ) : (
        <View style={[styles.view, style]}>{children}</View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.secondary,
  },
  view: {
    flex: 1,
    paddingHorizontal: Size.calcWidth(20),
    paddingVertical: Size.calcHeight(20),
  },
});

export default AppScreen;
