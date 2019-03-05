
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

    /**
     * Returns the version for the {@code Analytics} extension
     *
     * @param promise A {@link Promise} invoked with the extension version
     */
    @ReactMethod
    public void extensionVersion(final Promise promise) {
        promise.resolve(Analytics.extensionVersion());
    }

    /**
     * Retrieves the analytics tracking identifier generated for this app/device instance.
     *
     * @param promise {@code Promise} invoked with the analytics identifier {@code String} value
     */
    @ReactMethod
    public void getTrackingIdentifier(final Promise promise) {
        Analytics.getTrackingIdentifier(new AdobeCallback<String>() {
            @Override
            public void call(final String aid) {
                promise.resolve(aid);
            }
        });
    }

    /**
     * Retrieves the total number of analytics hits currently in the tracking queue.
     *
     * @param promise {@code Callback} invoked with the queue size {@code long} value
     */
    @ReactMethod
        public void getQueueSize(final Promise promise) {
        Analytics.getQueueSize(new AdobeCallback<Long>() {
            @Override
            public void call(final Long queueSize) {
                promise.resolve(queueSize);
            }
        });
    }

    /**
     * Clears all unsent analytics hits from the tracking queue.
     * <p>
     * NOTE: Use caution when clearing the queue manually. This process cannot be reversed.
     */
    @ReactMethod
    public void clearQueue() {
        Analytics.clearQueue();
    }

    /**
     * Forces analytics to send all queued hits regardless of current batch options.
     */
    @ReactMethod
    public void sendQueuedHits() {
        Analytics.sendQueuedHits();
    }

    /**
     * Retrieves the visitor identifier
     *
     * @param promise {@code Callback} invoked with the visitor identifier {@code String} value
     */
    @ReactMethod
    public void getVisitorIdentifier(final Promise promise) {
        Analytics.getVisitorIdentifier(new AdobeCallback<String>() {
            @Override
            public void call(final String vid) {
                promise.resolve(vid);
            }
        });
    }

    /**
     * Retrieves the visitor identifier
     *
     * @param visitorID {@code String} new value for visitor identifier
     */
    @ReactMethod
    public void setVisitorIdentifier(final String visitorID) {
        Analytics.setVisitorIdentifier(visitorID);
    }

}
