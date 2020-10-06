## What is special about this app?

- clean, simple, scalable and full theme customizable todo app built with react native and rnfirebase.
- eslint with airbnb configuration and prettier has been used in this project for better code quality.
- react-native-elements has been used for customizing the theme of the app.
- react-form-hooks has been used for client side validation of forms.

## Why i choose rnfirebase over normal firebase dependency?

- Although some features from the Firebase Web SDK will generally work with React Native, it is mainly built for the web and as such has a limited compatible feature set. In contrast rnfirebase use the Firebase Native SDKs - this allows it to provide APIs to a vast majority of Firebase products and services which is divided in separate packages.

## Build and run the app

1. Install React Native as described at [https://facebook.github.io/react-native/docs/getting-started.html#content](https://facebook.github.io/react-native/docs/getting-started.html#content)
2. Clone this repository
3. Run `yarn install` , all required components will be installed automatically

   ### iOS

   1. Run `pod install` from `/ios` folder
   2. Start XCode and open generated `fino.xcworkspace`

   ### Android

   no steps required

4. It is recommended to run `react-native start` command from root project directory.
5. Run your project from XCode (`Cmd+R`) or `npm run ios` for iOS, or use `react-native run-android` to run your project on Android.
6. Done. No extra configuration is required.

## Command to create Android debug apk:

1.  npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
2.  cd android && ./gradlew assembleDebug
