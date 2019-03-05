/** ***********************************************************************
*
* Copyright 2019 Adobe
* All Rights Reserved.
*
* NOTICE: All information contained herein is, and remains
* the property of Adobe and its suppliers, if any. The intellectual
* and technical concepts contained herein are proprietary to Adobe
* and its suppliers and are protected by all applicable intellectual
* property laws, including trade secret and copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe.
*
* @flow
* @format
*/

'use strict';

const RCTACPAnalytics = require('react-native').NativeModules.ACPAnalytics;

module.exports = {

  extensionVersion(): Promise<string> {
    return Promise.resolve(RCTACPAnalytics.extensionVersion());
  },

  registerExtension() {
    RCTACPAnalytics.registerExtension();
  },

  getTrackingIdentifier(): Promise<string> {
    return RCTACPAnalytics.getTrackingIdentifier();
  },

  getQueueSize(): Promise<number> {
    return RCTACPAnalytics.getQueueSize();
  },

  clearQueue() {
    RCTACPAnalytics.clearQueue();
  },

  sendQueuedHits() {
    RCTACPAnalytics.sendQueuedHits();
  },

  getVisitorIdentifier(): Promise<string> {
    return RCTACPAnalytics.getVisitorIdentifier();
  },

  setVisitorIdentifier(vid?: String) {
    RCTACPAnalytics.setVisitorIdentifier(vid);
  },

};
