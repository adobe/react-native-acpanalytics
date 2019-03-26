/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, ScrollView, NativeModules} from 'react-native';
import {ACPCore, ACPLifecycle, ACPSignal, ACPIdentity, ACPMobileLogLevel, ACPMobilePrivacyStatus, ACPMobileVisitorAuthenticationState, ACPVisitorID, ACPExtensionEvent} from 'react-native-acpcore';
import {ACPAnalytics} from 'react-native-acpanalytics';

type Props = {};
export default class App extends Component<Props> {
  render() {
    this.initSDK();
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ marginTop: 75 }}>
        <Text style={styles.welcome}>ACPAnalytics Test App</Text>
        <Button title="ACPCore::extensionVersion()" onPress={() => this.coreExtensionVersion()}/>
        <Button title="ACPAnalytics::extensionVersion()" onPress={() => this.analyticsExtensionVersion()}/>
        <Button title="ACPAnalytics::getTrackingIdentifier()" onPress={() => this.getTrackingIdentifier()}/>
        <Button title="ACPAnalytics::getQueueSize()" onPress={() => this.getQueueSize()}/>
        <Button title="ACPAnalytics::clearQueue()" onPress={() => this.clearQueue()}/>
        <Button title="ACPAnalytics::sendQueuedHits()" onPress={() => this.sendQueuedHits()}/>
        <Button title="ACPAnalytics::getVisitorIdentifier()" onPress={() => this.getVisitorIdentifier()}/>
        <Button title="ACPAnalytics::setVisitorIdentifier(testID)" onPress={() => this.setVisitorIdentifier()}/>
        <Button title="ACPCore::trackState(...)" onPress={() => this.trackState()}/>
        <Button title="ACPCore::trackAction(...)" onPress={() => this.trackAction()}/>

        </ScrollView>
      </View>
    );
  }

  initSDK() {
    console.log("AdobeExperienceSDK IMPORT: ACPAnalytics = " + ACPAnalytics);
    ACPCore.setLogLevel(ACPMobileLogLevel.VERBOSE);
    ACPCore.setPrivacyStatus(ACPMobilePrivacyStatus.OPT_IN);
    ACPCore.configureWithAppId("launch-ENdd92076b6d40443284824b50647ac784");
    ACPLifecycle.registerExtension();
    ACPIdentity.registerExtension();
    ACPSignal.registerExtension();
    ACPAnalytics.registerExtension();
    ACPCore.start();
  }

  coreExtensionVersion() {
    ACPCore.extensionVersion().then(version => console.log("AdobeExperienceSDK: ACPCore version: " + version));
  }

  analyticsExtensionVersion() {
    ACPAnalytics.extensionVersion().then(version => console.log("AdobeExperienceSDK: ACPAnalytics version: " + version));
  }

  getTrackingIdentifier() {
    ACPAnalytics.getTrackingIdentifier().then(id => console.log("AdobeExperienceSDK: ACPAnalytics tracking identifier: " + id));
  }

  getQueueSize() {
    ACPAnalytics.getQueueSize().then(size => console.log("AdobeExperienceSDK: ACPAnalytics queue size: " + size));
  }

  clearQueue() {
    ACPAnalytics.clearQueue();
  }

  sendQueuedHits() {
    ACPAnalytics.sendQueuedHits();
  }

  getVisitorIdentifier() {
    ACPAnalytics.getVisitorIdentifier().then(vid => console.log("AdobeExperienceSDK: ACPAnalytics visitor id: " + vid));
  }

  setVisitorIdentifier() {
    ACPAnalytics.setVisitorIdentifier("testID");
  }

  trackState() {
    ACPCore.trackState("state", {"mytest": "state"});
  }

  trackAction() {
    ACPCore.trackAction("action", {"mytest": "action"});
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 22,
    textAlign: 'center',
    margin: 10,
  }
});
