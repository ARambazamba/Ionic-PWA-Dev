# Accessing Device

## Native Device Access using Cordova

### Cordova Native App

[Cordova Home](https://cordova.apache.org/)

Install Cordova CLI:

```
npm install -g cordova
```

Scaffold project:

```
cordova create PROJECTNAME
```

Add a platform:

```
cordova platform add ios | android | browser | elektron
```

Run a platform

```
cordova run ios | android
```

### Manage Plugins

- [Find Plugin using Cordova Plugin Search](https://cordova.apache.org/plugins/)
- Add Plugin:

```
cordova plugin add [plugin]
cordova plugin add cordova-device-plugin
cordova plugin add cordova-plugin-camera
```

## Build & Deploy App

- [Enalble Developer Featues on Device](https://developer.android.com/studio/debug/dev-options)

- Build, Deploy & Run App using adb

```
cordova build android | ios --debug
adb install -r platforms\android\app\build\outputs\apk\debug\app-debug.apk
cordiva run android
```

## Configure Debugging

- Browser Based Debugging - open Chrome - Go to:

```
chrome://inspect/#devices
```

[Cordova Debug Tools](https://github.com/Microsoft/vscode-cordova)

### Cordova Simulate

[Cordova Simulate](https://cordova.apache.org/howto/2018/02/02/cordova-simulate.html)

```
npm install -g cordova-simulate
```

### Cordova Wrap Angular

Add Cordova to a new folder

```
cordova create smart-sammler-cordova at.yourdomain.sammler SmartSammler
```

Merge the two projects & and copy Cordova-section to `package.json`

```
 "cordova": {
    "plugins": {
      "cordova-plugin-whitelist": {},
    },
    "platforms": [
      "browser",
      "android",
      "ios"
    ]
  }
}
```

Test on device

```
cordova run ios | android
```

> Note: Make sure you have to `ANDROID_HOME` env. var. set to `C:\Users\%USER%\AppData\Local\Android\Sdk`

## HTML APIs

[HTLM Apis Collection](https://girliemac.com/presentation-slides/html5-mobile-approach/deviceAPIs.html)

## Native Script

[Native Script](https://www.nativescript.org/)

Install Native Script

```
npm install -g nativescript
```

Project Setup

```
tns create nsCamera --ng
cd nsCamera
tns platform add ios
tns platform add android
```

Run Project

```
tns preview
```
