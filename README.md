
# React Native AEP Analytics Extension

`react-native-acpanalytics` is a wrapper around the iOS and Android [AEP Analytics SDK](https://aep-sdks.gitbook.io/docs/using-mobile-extensions/adobe-analytics) to allow for integration with React Native applications. Functionality to enable Adobe Analytics is provided entirely through JavaScript documented below.


## Installation

You need to install the SDK with [npm](https://www.npmjs.com/) and configure the native Android/iOS project in your react native project. Before installing the Analytics extension it is recommended to begin by installing the Core extension `react-native-acpcore`.

### 1. Create React Native project

First create a React Native project:

```bash
react-native init MyReactApp
```

### 2. Install JavaScript packages

Install and link the `react-native-acpanalytics` package:

```bash
npm install react-native-acpanalytics
react-native link react-native-acpanalytics
```

## Usage

### [Analytics](https://aep-sdks.gitbook.io/docs/using-mobile-extensions/mobile-core)

##### Importing the extension:
```javascript
import {ACPAnalytics} from 'react-native-acpanalytics';
```

##### Getting the extension version:

```javascript
ACPAnalytics.extensionVersion().then(version => console.log("AMSDK: ACPAnalytics version: " + version));
```

##### Registering the extension with ACPCore:

```javascript
ACPAnalytics.registerExtension();
```

##### Get the tracking identifier

```javascript
ACPAnalytics.getTrackingIdentifier().then(identifier => console.log("AMSDK: Tracking identifier: " + identifier));
```
##### Send queued hits

```javascript
ACPAnalytics.sendQueuedHits();
```

##### Get the queue size

```javascript
ACPAnalytics.getQueueSize().then(size => console.log("AMSDK: Queue size: " + size));
```

##### Set the custom visitor identifier

```javascript
ACPAnalytics.setVisitorIdentifier("yourVisitorId");
```

##### Get the custom visitor identifier

```javascript
ACPAnalytics.getVisitorIdentifier().then(vid => console.log("AMSDK: Visitor identifier: " + vid));
```

##### Track app actions

```javascript
ACPCore.trackAction("action", {"mytest": "action"});
```

##### Track app states

```javascript
ACPCore.trackState("state", {"mytest": "state"});
```

## License

See LICENSE.md
