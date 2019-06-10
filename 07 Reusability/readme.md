# Reusability

## Angular Libraries

[Angular Library Docs](https://angular.io/guide/libraries)

Create Library:

```
ng generate library ng-utils --prefix=my
```

Scaffold item in a library

```
ng generate component navbar --project=ng-utils
```

Build library

```
ng build ng-utils
```

Pubish to npmjs.com:

Logon with an existing npmjs account & upload package

> Note: Make sure the package name is unique

```
npm adduser [USER]
npm publish
```
