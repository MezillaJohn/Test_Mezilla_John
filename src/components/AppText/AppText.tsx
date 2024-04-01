import {Platform, Text, TextProps} from 'react-native';
import {COLORS} from '../../constants/theme';
import Size from '../../utils/useResponsiveSize';
import {FONTS} from '../../constants';
import React from 'react';

/**
 * @default fontsize-16
 * @default color-colors.black
 * @default fontfamily-inter_400
 */

const AppText = ({children, style, ...otherProps}: TextProps) => {
  return (
    <Text
      allowFontScaling={false}
      style={[
        {
          fontWeight: 'normal',
          fontSize:
            Platform.OS === 'android'
              ? Size.calcAverage(14)
              : Size.calcAverage(15),
          color: COLORS.dark,
          fontFamily: FONTS.Figtree_Regular,
        },
        style,
      ]}
      {...otherProps}>
      {children}
    </Text>
  );
};

export default AppText;
