import React, {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

import {strings} from '../../helper/constants';
import {Button, Input, Timer} from '../../components';
import {fontSize, hp, statusBar, wp} from '../../helper/utilities';

const Home = () => {
  const [timers, setTimers] = useState([]);
  const [inputHours, setInputHours] = useState('');
  const [inputMinutes, setInputMinutes] = useState('');
  const [inputSeconds, setInputSeconds] = useState('');

  // Add timer button press event
  const onAddTimerBtnPress = () => {
    if (timers.length < 5) {
      const totalSeconds =
        (parseInt(inputHours) || 0) * 3600 +
        (parseInt(inputMinutes) || 0) * 60 +
        (parseInt(inputSeconds) || 0);
      if (totalSeconds > 0) {
        setTimers(prevTimers => [
          ...prevTimers,
          {
            isActive: false,
            time: totalSeconds,
            inputTime: totalSeconds,
            id: Date.now().toString(),
          },
        ]);
        resetInputs();
      } else {
        alert('Please enter a valid time.');
      }
    } else {
      alert('Maximum of 5 timers allowed.');
    }
  };

  // Reset inputs function
  const resetInputs = () => {
    setInputHours('');
    setInputMinutes('');
    setInputSeconds('');
  };

  // Toggle (play/pause) timer button event
  const toggleTimer = id => {
    setTimers(prevTimers =>
      prevTimers.map(timer =>
        timer.id === id ? {...timer, isActive: !timer.isActive} : timer,
      ),
    );
  };

  // Reset timer button event
  const resetTimer = id => {
    setTimers(prevTimers =>
      prevTimers.map(timer =>
        timer.id === id
          ? {...timer, time: timer.inputTime, isActive: false}
          : timer,
      ),
    );
  };

  // Delete timer button event
  const deleteTimer = id => {
    setTimers(prevTimers => prevTimers.filter(timer => timer.id !== id));
  };

  useEffect(() => {
    const intervals = timers.map(timer => {
      if (timer.isActive && timer.time > 0) {
        return setInterval(() => updateTimer(timer.id), 1000);
      }
      return null;
    });

    return () => {
      intervals.forEach(interval => {
        if (interval) clearInterval(interval);
      });
    };
  }, [timers]);

  // Update timer function
  const updateTimer = id => {
    setTimers(prevTimers =>
      prevTimers.map(t => (t.id === id ? {...t, time: t.time - 1} : t)),
    );
  };

  const renderItem = ({item}) => {
    return (
      <Timer
        data={item}
        onResetBtnPress={() => resetTimer(item.id)}
        onDeleteBtnPress={() => deleteTimer(item.id)}
        onPlayPauseBtnPress={() => toggleTimer(item.id)}
        remainingTime={`${Math.floor(item.time / 3600)}h ${Math.floor(
          (item.time % 3600) / 60,
        )}m ${item.time % 60}s`}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Input
        value={inputHours}
        placeholder={strings.hours}
        onChangeText={setInputHours}
      />
      <Input
        value={inputMinutes}
        placeholder={strings.minutes}
        onChangeText={setInputMinutes}
      />
      <Input
        value={inputSeconds}
        placeholder={strings.seconds}
        onChangeText={setInputSeconds}
      />
      <Button
        title={strings.addTimer}
        onPress={onAddTimerBtnPress}
        mainContainer={styles.addTimerBtnViewStyle}
      />
      <FlatList
        data={timers}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.flatListContainer}
        ListFooterComponent={() => <View style={styles.listFooterStyle} />}
        ItemSeparatorComponent={() => <View style={styles.listSepratorStyle} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: hp(24) + statusBar,
  },
  addTimerBtnViewStyle: {
    flex: 0,
    marginTop: hp(8),
    alignSelf: 'center',
    marginBottom: hp(16),
  },
  flatListContainer: {
    marginVertical: wp(16),
  },
  listFooterStyle: {
    height: wp(60),
  },
  listSepratorStyle: {
    height: wp(16),
  },
  timerText: {
    textAlign: 'center',
    fontSize: fontSize(18),
  },
});

export default Home;
