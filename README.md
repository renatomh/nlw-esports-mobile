<h1 align="center"><img alt="NLW eSports Mobile" title="NLW eSports Mobile" src=".github/logo.svg" width="250" /></h1>

# NLW eSports Mobile

## 💡 Project's Idea

This project was developed during the RocketSeat's Next Level Week - eSports event. It aims to provide a mobile application for finding other players to play online games with.

## 🔍 Features

* Available games listing;
* Connecting to other players;

## 💹 Extras

*

## 🛠 Technologies

During the development of this project, the following techologies were used:

- [React Native](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Expo](https://expo.dev/)
- [Phosphor Icons](https://phosphoricons.com/)
- [TypeScript](https://www.typescriptlang.org/)

## 💻 Project Configuration

### First, install the dependencies for the project

```bash
$ yarn
```

## 🌐 Setting up config files

...

## ⏯️ Running

To run the project in a development environment, execute the following command on the root directory.

```bash
$ yarn start
```

## 🔨 Project's *Build* for *Deploy*

In order to publish the app for the app stores of different kinds of devices (Play Store, App Store), there are some steps to be done.

### Android
Aside from [configuring for app publishing with React Native](https://reactnative.dev/docs/signed-apk-android), we should execute the following commands to generate the *.aab* (Android App Bundle) file:

```bash
$ cd android
$ ./gradlew bundleRelease
```

The generated file will be located at ```android/app/build/outputs/bundle/release/```.

### Documentation:
* [Publishing to Google Play Store](https://reactnative.dev/docs/signed-apk-android)
* [Publishing to Apple App Store](https://reactnative.dev/docs/publishing-to-app-store)
* [Rocketseat Docs | Ambiente React Native](https://react-native.rocketseat.dev/)
* [Internacionalização em React Native](https://medium.com/reactbrasil/internacionaliza%C3%A7%C3%A3o-em-react-native-77fb1a56f8e9)
* [Cannot use JSX unless the '--jsx' flag is provided](https://stackoverflow.com/questions/50432556/cannot-use-jsx-unless-the-jsx-flag-is-provided)
* [React Native Init vs Expo 2022: What Are the Differences?](https://fulcrum.rocks/blog/react-native-init-vs-expo)
* [What is the difference between Expo and React Native?](https://stackoverflow.com/a/49324689)

## 📄 License

This project is under the **MIT** license. For more information, access [LICENSE](./LICENSE).
