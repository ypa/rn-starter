import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increase':
      return { ...state, count: state.count + 1 };
    case 'decrease':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <View>
      <Button title="Increase" onPress={() => {
        // Don't modify directly, use hook
        // counter++;
        dispatch({ type: 'increase' })
      }} />
      <Button title="Decrease" onPress={() => {
        dispatch({ type: 'decrease' })
      }} />
      <Text>Current Count:{state.count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({})

export default CounterScreen;
