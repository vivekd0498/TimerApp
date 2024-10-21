import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

import {colors} from '../../helper/colorConstant';
import {fontSize, hp, wp} from '../../helper/utilities';

const Button = ({title, onPress, backgroundColor, mainContainer}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.mainContainer,
        {
          backgroundColor: backgroundColor || colors.blue,
        },
        mainContainer,
      ]}>
      <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    shadowOffset: {
      width: wp(2),
      height: wp(2),
    },
    alignItems: 'center',
    borderRadius: wp(12),
    shadowOpacity: wp(0.4),
    marginHorizontal: wp(4),
    paddingVertical: hp(12),
    paddingHorizontal: wp(22),
    shadowColor: colors.black,
    backgroundColor: colors.blue,
  },
  textStyle: {
    fontWeight: 'bold',
    color: colors.white,
    fontSize: fontSize(14),
  },
});

export default Button;
