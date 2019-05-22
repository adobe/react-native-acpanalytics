jest.mock('NativeModules', () => ({
  ACPAnalytics: {
    extensionVersion: jest.fn(),
    registerExtension: jest.fn(),
    getTrackingIdentifier: jest.fn(() => new Promise(resolve => resolve())),
    getQueueSize: jest.fn(() => new Promise(resolve => resolve())),
    clearQueue: jest.fn(),
    sendQueuedHits: jest.fn(),
    getVisitorIdentifier: jest.fn(() => new Promise(resolve => resolve())),
    sendQueuedHits: jest.fn(),
    setVisitorIdentifier: jest.fn()
  }
}));
