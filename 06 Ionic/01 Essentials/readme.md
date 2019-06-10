# Getting started with Ionic

[Ionic Documentation](https://ionicframework.com/docs)

[Ionic CLI Documentation](https://ionicframework.com/docs/installation/cli)

### Install Ionic

```
npm install -g ionic
```

### Get Help for CLI

```
ionic --help
ionic start --help
```

### Create an Ionic Project

```
ionic start PROJECTNAME --template=blank --type=angular
```

### Scaffolding

Items are added using [ionic generate](https://ionicframework.com/docs/cli/generate/)

```
ionic generate page PAGE_NAME
```

### Adding Device access

```
ionic capacitor add android
```

```
ionic cordova prepare android
```

### Running

'ionic serve' is a shortcut form 'ionic cordova emulate browser'

```
ionic serve
```

V3

```
ionic cordova emulate browser | ios | android
```

V4

Running with cordova on real device

```
ionic cordova run android -l
```

Running with capacitor on real device

```
ionic capacitor copy android
```
