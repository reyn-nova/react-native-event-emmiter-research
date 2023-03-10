import React, { useEffect } from 'react';

import { StyleSheet, View, Text, NativeModules, NativeEventEmitter, Platform } from 'react-native';
import { multiply } from 'react-native-test_subscription_2';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  useEffect(() => {
    const eventEmitter = new NativeEventEmitter(Platform.OS === 'ios' ? NativeModules.TestSubscription2 : null);

      let nativeEventListener = eventEmitter.addListener(
        'eventExample',
        (e) => {
        console.log (e);
      })

    return () => {
      eventEmitter.removeSubscription(nativeEventListener)
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text onPress={() => 
    multiply(3, 7).then(setResult)}>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
