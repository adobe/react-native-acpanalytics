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

#import "RCTACPAnalytics.h"
#import "ACPAnalytics.h"

@implementation RCTACPAnalytics

RCT_EXPORT_MODULE(ACPAnalytics);

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}

RCT_EXPORT_METHOD(extensionVersion: (RCTPromiseResolveBlock) resolve rejecter:(RCTPromiseRejectBlock)reject) {
    resolve([ACPAnalytics extensionVersion]);
}

RCT_EXPORT_METHOD(registerExtension) {
    [ACPAnalytics registerExtension];
}

RCT_EXPORT_METHOD(clearQueue) {
    [ACPAnalytics clearQueue];
}

RCT_EXPORT_METHOD(getQueueSize: (RCTPromiseResolveBlock) resolve rejecter:(RCTPromiseRejectBlock)reject) {
    [ACPAnalytics getQueueSize:^(NSUInteger queueSize) {
        resolve([NSNumber numberWithUnsignedInteger:queueSize]);
    }];
}

RCT_EXPORT_METHOD(getTrackingIdentifier: (RCTPromiseResolveBlock) resolve rejecter:(RCTPromiseRejectBlock)reject) {
    [ACPAnalytics getTrackingIdentifier:^(NSString * _Nullable trackingIdentifier) {
        resolve(trackingIdentifier);
    }];
}

RCT_EXPORT_METHOD(sendQueuedHits) {
    [ACPAnalytics sendQueuedHits];
}

RCT_EXPORT_METHOD(getVisitorIdentifier: (RCTPromiseResolveBlock) resolve rejecter:(RCTPromiseRejectBlock)reject) {
    [ACPAnalytics getVisitorIdentifier:^(NSString * _Nullable visitorIdentifier) {
        resolve(visitorIdentifier);
    }];
}

RCT_EXPORT_METHOD(setVisitorIdentifier: (nonnull NSString*) visitorIdentifier) {
    [ACPAnalytics setVisitorIdentifier:visitorIdentifier];
}

@end

