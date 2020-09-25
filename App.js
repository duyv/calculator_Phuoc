import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Result from './components/Result';
import Operation from './components/Operation';

export default function App() {
  const [result,setResult] = useState(0);
  const inputValue = (value) => {
    // if(value.toString().length > 10){
    //   setResult(value.toExponential(4))
    // } else {
      setResult(value);
    // };
  }
  return (
    <View style={styles.container}>
      <Result result={result}></Result>
      <Operation display={inputValue}></Operation>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
