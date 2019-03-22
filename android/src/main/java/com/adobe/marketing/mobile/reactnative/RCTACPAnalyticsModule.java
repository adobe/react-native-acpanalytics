
package com.adobe.marketing.mobile.reactnative;

import com.adobe.marketing.mobile.AdobeCallback;
import com.adobe.marketing.mobile.Analytics;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;

public class RCTACPAnalyticsModule extends ReactContextBaseJavaModule {

    private final ReactApplicationContext reactContext;

    public RCTACPAnalyticsModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    // Required for RN modules
    @Override
    public String getName() {
        return "ACPAnalytics";
    }

    @ReactMethod
    public void extensionVersion(final Promise promise) {
        promise.resolve(Analytics.extensionVersion());
    }

    @ReactMethod
    public void registerExtension() throws Exception {
      Analytics.registerExtension();
    }

    @ReactMethod
    public void getTrackingIdentifier(final Promise promise) {
        Analytics.getTrackingIdentifier(new AdobeCallback<String>() {
            @Override
            public void call(final String aid) {
                promise.resolve(aid);
            }
        });
    }

    @ReactMethod
        public void getQueueSize(final Promise promise) {
        Analytics.getQueueSize(new AdobeCallback<Long>() {
            @Override
            public void call(final Long queueSize) {
                promise.resolve(queueSize);
            }
        });
    }

    @ReactMethod
    public void clearQueue() {
        Analytics.clearQueue();
    }

    @ReactMethod
    public void sendQueuedHits() {
        Analytics.sendQueuedHits();
    }

    @ReactMethod
    public void getVisitorIdentifier(final Promise promise) {
        Analytics.getVisitorIdentifier(new AdobeCallback<String>() {
            @Override
            public void call(final String vid) {
                promise.resolve(vid);
            }
        });
    }

    @ReactMethod
    public void setVisitorIdentifier(final String vid) {
        Analytics.setVisitorIdentifier(vid);
    }

}
