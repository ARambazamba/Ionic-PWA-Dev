# Ionic Device Access

## Cordova Wrapper

[Ionic Native](https://ionicframework.com/docs/native/overview)

Add a platform

```
ionic cordova platform add browser | android | ios
```

Add a plugin

```
ionic cordova plugin add cordova-plugin-camera
npm install @ionic-native/camera
```

Run

```
ionic cordova run browser | android | ios
```

## Capacitor

Scaffold an Ionic Project using Capacitor:

```
ionic start PROJECTNNAME blank --capacitor
```

Create `www` folder:

```
npm run build | ionic build
```

Add Platform

```
npx cap add android
```

Build the project & copy output to device folder

```
ionic build
npx cap copy
```

Run on android

```
npx cap open android
```

> Note: Instead of running `npx cap add android` you can install Capacitor CLI globally `[npm i -g @capacitor/cli]` and run just `cap add android` or even add a custom deploy script to package.json

```
"scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e",
    "deploy": "ionic build && npx cap copy && npx cap open android"
  }
```

### Reading

[Using Google Maps and Geolocation in Ionic with Capacitor](https://www.joshmorony.com/using-google-maps-and-geolocation-in-ionic-with-capacitor/)
