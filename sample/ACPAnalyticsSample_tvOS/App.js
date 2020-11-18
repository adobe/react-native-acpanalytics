/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.

@flow
@format
*/

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, ScrollView, NativeModules} from 'react-native';
import {ACPCore} from '@adobe/react-native-acpcore';
import {ACPAnalytics} from '@adobe/react-native-acpanalytics';

type Props = {};
export default class App extends Component<Props> {
  render() {
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
