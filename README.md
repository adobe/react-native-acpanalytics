
# React Native AEP Analytics Extension

[![npm version](https://badge.fury.io/js/%40adobe%2Freact-native-acpanalytics.svg)](https://badge.fury.io/js/%40adobe%2Freact-native-acpanalytics) [![CircleCI](https://img.shields.io/circleci/project/github/adobe/react-native-acpanalytics/master.svg?logo=circleci)](https://circleci.com/gh/adobe/workflows/react-native-acpanalytics) ![NPM](https://img.shields.io/npm/l/@adobe/react-native-acpanalytics.svg)


`@adobe/react-native-acpanalytics` is a wrapper around the iOS and Android [AEP Analytics SDK](https://aep-sdks.gitbook.io/docs/using-mobile-extensions/adobe-analytics) to allow for integration with React Native applications. Functionality to enable Adobe Analytics is provided entirely through JavaScript documented below.


## Installation

You need to install the SDK with [npm](https://www.npmjs.com/) and configure the native Android/iOS project in your react native project. Before installing the Analytics extension it is recommended to begin by installing the Core extension `@adobe/react-native-acpcore`.

> Note: If you are new to React Native we suggest you follow the [React Native Getting Started](<https://facebook.github.io/react-native/docs/getting-started.html>) page before continuing.

### 1. Create React Native project

First create a React Native project:

```bash
react-native init MyReactApp
```

### 2. Install JavaScript packages

Install and link the `@adobe/react-native-acpanalytics` package:

```bash
cd MyReactApp
npm install @adobe/react-native-acpanalytics
react-native link @adobe/react-native-acpanalytics
```

We also support Cocoapods:

* Add `pod 'RCTACPAnalytics', :path => '../node_modules/@adobe/react-native-acpanalytics'` to your `ios/Podfile`
* Run `pod install` on `/ios`

## Tests
This project contains jest unit tests which are contained in the `__tests__` directory, to run the tests locally:
```
make run-tests-locally
```

## Usage

### [Analytics](https://aep-sdks.gitbook.io/docs/using-mobile-extensions/adobe-analytics)

##### Importing the extension:
```javascript
import {ACPAnalytics} from '@adobe/react-native-acpanalytics';
```

##### Getting the extension version:

```javascript
ACPAnalytics.extensionVersion().then(version => console.log("AdobeExperienceSDK: ACPAnalytics version: " + version));
```

##### Registering the extension with ACPCore:

```javascript
ACPAnalytics.registerExtension();
```

##### Get the tracking identifier

```javascript
ACPAnalytics.getTrackingIdentifier().then(identifier => console.log("AdobeExperienceSDK: Tracking identifier: " + identifier));
```
##### Send queued hits

```javascript
ACPAnalytics.sendQueuedHits();
```

##### Get the queue size

```javascript
ACPAnalytics.getQueueSize().then(size => console.log("AdobeExperienceSDK: Queue size: " + size));
```

##### Clear queued hits

```javascript
ACPAnalytics.clearQueue();
```

##### Set the custom visitor identifier

```javascript
ACPAnalytics.setVisitorIdentifier("yourVisitorId");
```

##### Get the custom visitor identifier

```javascript
ACPAnalytics.getVisitorIdentifier().then(vid => console.log("AdobeExperienceSDK: Visitor identifier: " + vid));
```

##### Track app actions

```javascript
ACPCore.trackAction("action", {"mytest": "action"});
```

##### Track app states

```javascript
ACPCore.trackState("state", {"mytest": "state"});
```

## Contributing
See [CONTRIBUTING](CONTRIBUTING.md)

## License
See [LICENSE](LICENSE)
