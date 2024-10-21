import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Button from '../common/Button';
import {strings} from '../../helper/constants';
import {colors} from '../../helper/colorConstant';
import {fontSize, hp, wp} from '../../helper/utilities';

const Timer = ({
  data,
  remainingTime,
  onResetBtnPress,
  onDeleteBtnPress,
  onPlayPauseBtnPress,
}) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.timerText}>
        {strings.timeRemaining}
        <Text
          style={[
            styles.timerText,
            {
              fontWeight: 'bold',
            },
          ]}>
          {remainingTime}
        </Text>
      </Text>
      <View style={styles.btnMainView}>
        <Button
          onPress={onPlayPauseBtnPress}
          title={data.isActive ? strings.pause : strings.play}
          backgroundColor={data.isActive ? colors.yellow : colors.green}
        />
        <Button title={strings.reset} onPress={onResetBtnPress} />
        <Button
          title={strings.delete}
          onPress={onDeleteBtnPress}
          backgroundColor={colors.red}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    shadowOffset: {
      width: wp(2),
      height: wp(2),
    },
    padding: wp(12),
    borderRadius: wp(12),
    shadowOpacity: wp(0.4),
    marginHorizontal: wp(16),
    shadowColor: colors.black,
    backgroundColor: colors.white,
  },
  timerText: {
    textAlign: 'center',
    fontSize: fontSize(18),
  },
  btnMainView: {
    marginTop: hp(12),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

export default Timer;
