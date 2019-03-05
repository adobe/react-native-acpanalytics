
# bourbon-platform-react-native-analytics

https://wiki.corp.adobe.com/display/adms/React+Native


## Setup

`npm install`

#### Andriod

Open `android/build.gradle` in Android studio

#### iOS:

Open `ios/RCTACPAnalytics.xcodeproj`

Note: This the Xcode project does not include all dependencies to build. If you want to build the project you should run `pod install` then open the workspace.


## Installation

You need to install the SDK with [npm](https://www.npmjs.com/) and configure the native Android/iOS project in your react native project.

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

### 3. Configure native projects

#### 3.1 Android project

Navigate to `MainApplication.java` under `app/src/main/java/com/<project name>/` and add a call to `RCTACPCoreModule.setApplication()` inside of `onCreate()`.

```java
import com.adobe.marketing.mobile.reactnative.RCTACPCorePackage; // import the package

@Override
public void onCreate() {
	super.onCreate();
	//...
	RCTACPCoreModule.setApplication(this); // add this line
}
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
ACPCore.trackAction(TODO);
```

##### Track app states

```javascript
ACPCore.trackState(TODO);
```

## License

See LICENSE.md
