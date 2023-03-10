package com.testsubscription2;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;

import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.Arguments;

@ReactModule(name = TestSubscription2Module.NAME)
public class TestSubscription2Module extends ReactContextBaseJavaModule {
  public static final String NAME = "TestSubscription2";

  ReactApplicationContext reactContext;

  public TestSubscription2Module(ReactApplicationContext reactContext) {
    super(reactContext);

    this.reactContext = reactContext;
  }

  @Override
  @NonNull
  public String getName() {
    return NAME;
  }


  // Example method
  // See https://reactnative.dev/docs/native-modules-android
  @ReactMethod
  public void multiply(double a, double b, Promise promise) {
    WritableMap payload = Arguments.createMap();

    payload.putString("status", "An event has been sent from Android");

    this.reactContext
      .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
      .emit("eventExample", payload);
    
    promise.resolve(a * b);
  }
}
