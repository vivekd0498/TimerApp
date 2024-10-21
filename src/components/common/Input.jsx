import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

import {colors} from '../../helper/colorConstant';
import {fontSize, hp, wp} from '../../helper/utilities';

const Input = ({value, placeholder, onChangeText}) => {
  return (
    <TextInput
      value={value}
      keyboardType="numeric"
      style={styles.inputStyle}
      placeholder={placeholder}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    shadowOffset: {
      width: wp(2),
      height: wp(2),
    },
    padding: wp(14),
    color: colors.black,
    marginBottom: hp(12),
    borderRadius: wp(12),
    fontSize: fontSize(14),
    shadowOpacity: wp(0.4),
    marginHorizontal: wp(16),
    shadowColor: colors.black,
    backgroundColor: colors.white,
  },
});

export default Input;
