import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-test_subscription_2' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const TestSubscription2 = NativeModules.TestSubscription2
  ? NativeModules.TestSubscription2
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function multiply(a: number, b: number): Promise<number> {
  return TestSubscription2.multiply(a, b);
}
