/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
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
 **************************************************************************/
package com.adobe.marketing.mobile.reactnative.analytics;

import android.util.Log;

import com.adobe.marketing.mobile.AdobeCallback;
import com.adobe.marketing.mobile.Analytics;
import com.adobe.marketing.mobile.InvalidInitException;
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
    public void registerExtension() {
        try {
            Analytics.registerExtension();
        } catch (InvalidInitException e) {
            Log.d(getName(), "Registering Analytics extension failed with error: " + e.getMessage());
        }
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
