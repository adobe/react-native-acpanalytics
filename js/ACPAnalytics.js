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
  /**
   * Returns the version of the ACPAnalytics extension
   * @param  {string} Promise a promise that resolves with the extension verison
   */
  extensionVersion(): Promise<string> {
    return Promise.resolve(RCTACPAnalytics.extensionVersion());
  },

  /**
   * Registers the ACPIdentity extension with ACPCore
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
