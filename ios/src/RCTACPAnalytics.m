/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

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

RCT_EXPORT_METHOD(getTrackingIdentifier: (RCTPromiseResolveBlock) resolve rejecter:(RCTPromiseRejectBlock)reject) {
    [ACPAnalytics getTrackingIdentifier:^(NSString * _Nullable trackingIdentifier) {
        resolve(trackingIdentifier);
    }];
}

RCT_EXPORT_METHOD(getQueueSize: (RCTPromiseResolveBlock) resolve rejecter:(RCTPromiseRejectBlock)reject) {
    [ACPAnalytics getQueueSize:^(NSUInteger queueSize) {
        resolve([NSNumber numberWithUnsignedInteger:queueSize]);
    }];
}

RCT_EXPORT_METHOD(clearQueue) {
    [ACPAnalytics clearQueue];
}

RCT_EXPORT_METHOD(sendQueuedHits) {
    [ACPAnalytics sendQueuedHits];
}

RCT_EXPORT_METHOD(getVisitorIdentifier: (RCTPromiseResolveBlock) resolve rejecter:(RCTPromiseRejectBlock)reject) {
    [ACPAnalytics getVisitorIdentifier:^(NSString * _Nullable visitorIdentifier) {
        resolve(visitorIdentifier);
    }];
}

RCT_EXPORT_METHOD(setVisitorIdentifier: (nullable NSString*) visitorIdentifier) {
    [ACPAnalytics setVisitorIdentifier:visitorIdentifier];
}

@end
