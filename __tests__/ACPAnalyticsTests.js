/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.

@format
*/

import { NativeModules } from 'react-native';
import ACPAnalytics from '../js/ACPAnalytics';

describe('ACPAnalytics', () => {

  test('extensionVersion is called', async () => {
    const spy = jest.spyOn(NativeModules.ACPAnalytics, 'extensionVersion');
    await ACPAnalytics.extensionVersion();
    expect(spy).toHaveBeenCalled();
  });

  test('getTrackingIdentifier is called', async () => {
    const spy = jest.spyOn(NativeModules.ACPAnalytics, 'getTrackingIdentifier');
    await ACPAnalytics.getTrackingIdentifier();
    expect(spy).toHaveBeenCalled();
  });

  test('getQueueSize is called', async () => {
    const spy = jest.spyOn(NativeModules.ACPAnalytics, 'getQueueSize');
    await ACPAnalytics.getQueueSize();
    expect(spy).toHaveBeenCalled();
  });

  test('clearQueue is called', async () => {
    const spy = jest.spyOn(NativeModules.ACPAnalytics, 'clearQueue');
    await ACPAnalytics.clearQueue();
    expect(spy).toHaveBeenCalled();
  });

  test('sendQueuedHits is called', async () => {
    const spy = jest.spyOn(NativeModules.ACPAnalytics, 'sendQueuedHits');
    await ACPAnalytics.sendQueuedHits();
    expect(spy).toHaveBeenCalled();
  });

  test('getVisitorIdentifier is called', async () => {
    const spy = jest.spyOn(NativeModules.ACPAnalytics, 'getVisitorIdentifier');
    await ACPAnalytics.getVisitorIdentifier();
    expect(spy).toHaveBeenCalled();
  });

  test('setVisitorIdentifier is called with correct parameters', async () => {
    const spy = jest.spyOn(NativeModules.ACPAnalytics, 'setVisitorIdentifier');
    let vid = 'vid'
    await ACPAnalytics.setVisitorIdentifier(vid);
    expect(spy).toHaveBeenCalledWith(vid);
  });

});
