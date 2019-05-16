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

'use strict';

const RCTACPAnalytics = require('react-native').NativeModules.ACPAnalytics;

module.exports = {
  /**
   * Returns the version of the ACPAnalytics extension
   * @param  {string} Promise a promise that resolves with the extension verison
   */
  extensionVersion(): Promise<string> {
    return Promise.resolve(RCTACPAnalytics.extensionVersion());
  },

  /**
   * Registers the ACPAnalytics extension with ACPCore
   */
  registerExtension() {
    RCTACPAnalytics.registerExtension();
  },

  /**
   *  @brief Retrieves the analytics tracking identifier.
   *
   *  @param callback invoked with the analytics identifier value
   */
  getTrackingIdentifier(): Promise<string> {
    return RCTACPAnalytics.getTrackingIdentifier();
  },

  /**
   *  @brief Retrieves the number of hits currently in the tracking queue
   *
   *  @param callback invoked with the queue size value
   */
  getQueueSize(): Promise<number> {
    return RCTACPAnalytics.getQueueSize();
  },

  /**
   *  @brief Clears all hits from the tracking queue and removes them from the database.
   *  @warning Use caution when clearing the queue manually. This process cannot be reversed.
   */
  clearQueue() {
    RCTACPAnalytics.clearQueue();
  },

  /**
   *  @brief Forces analytics to send all queued hits regardless of current batch options
   */
  sendQueuedHits() {
    RCTACPAnalytics.sendQueuedHits();
  },

  /**
   *  @brief Retrieves the visitor identifier.
   *
   *  @param callback invoked with the visitor identifier value
   */
  getVisitorIdentifier(): Promise<string> {
    return RCTACPAnalytics.getVisitorIdentifier();
  },

  /**
   *  @brief Sets the visitor identifier.
   *
   *  @param visitorIdentifier the new value for visitor identifier
   */
  setVisitorIdentifier(vid?: String) {
    RCTACPAnalytics.setVisitorIdentifier(vid);
  },
};
