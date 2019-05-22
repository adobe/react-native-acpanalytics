import { NativeModules } from 'react-native';
import ACPAnalytics from '../js/ACPAnalytics';

describe('ACPAnalytics', () => {

  test('extensionVersion is called', async () => {
    const spy = jest.spyOn(NativeModules.ACPAnalytics, 'extensionVersion');
    await ACPAnalytics.extensionVersion();
    expect(spy).toHaveBeenCalled();
  });

  test('registerExtension is called', async () => {
    const spy = jest.spyOn(NativeModules.ACPAnalytics, 'registerExtension');
    await ACPAnalytics.registerExtension();
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
