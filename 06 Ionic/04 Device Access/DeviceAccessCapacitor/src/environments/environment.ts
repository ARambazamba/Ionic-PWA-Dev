// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: "https://localhost:5001/api/",
  firebase: {
    apiKey: "AIzaSyDKOBVweF7puu4P60AiQUFTaspqlVXvFTM",
    authDomain: "skills-5fb49.firebaseapp.com",
    databaseURL: "https://skills-5fb49.firebaseio.com",
    projectId: "skills-5fb49",
    storageBucket: "skills-5fb49.appspot.com",
    messagingSenderId: "1005178568143",
    appId: "1:1005178568143:web:506dadae903b5a79"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
