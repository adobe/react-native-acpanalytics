//
//  RCTACPAnalyticsTests.m
//  RCTACPAnalyticsTests
//
//  Created by Nick Porter on 6/3/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <XCTest/XCTest.h>
#import "OCMock.h"
#import "ACPAnalytics.h"
#import "RCTACPAnalytics.h"

@interface RCTACPAnalyticsTests : XCTestCase

@property (nonatomic, strong)RCTACPAnalytics *analytics;
@property (nonatomic, strong)id analyticsMock;

@end

@implementation RCTACPAnalyticsTests

- (void)setUp {
    _analytics = [[RCTACPAnalytics alloc] init];
    _analyticsMock = [OCMockObject niceMockForClass:[ACPAnalytics class]];
}


- (void)test_ExtensionVersion {
    [_analytics extensionVersion:^(id result) {
        // nothing
    } rejecter:nil];
    OCMVerify([_analyticsMock extensionVersion]);
}

- (void)test_registerExtension {
    [_analytics registerExtension];
    OCMVerify([_analyticsMock registerExtension]);
}

- (void)test_getTrackingIdentifier {
    OCMStub(ClassMethod([_analyticsMock getTrackingIdentifier:[OCMArg isKindOfClass:[NSString class]]])).andReturn(@"aid");
    [_analytics getTrackingIdentifier:^(id result) {
        // nothing
    } rejecter:nil];
    
    OCMVerify(ClassMethod([_analyticsMock getTrackingIdentifier:[OCMArg any]]));
    [_analyticsMock stopMocking];
}

- (void)test_getGetQueueSize {
    OCMStub(ClassMethod([_analyticsMock getQueueSize:[OCMArg isKindOfClass:[NSNumber class]]])).andReturn(1);
    [_analytics getTrackingIdentifier:^(id result) {
        // nothing
    } rejecter:nil];
    
    OCMVerify(ClassMethod([_analyticsMock getTrackingIdentifier:[OCMArg any]]));
    [_analyticsMock stopMocking];
}

- (void)test_clearQueue {
    [_analytics clearQueue];
    OCMVerify([_analyticsMock clearQueue]);
}

- (void)test_sendQueuedHits {
    [_analytics sendQueuedHits];
    OCMVerify([_analyticsMock sendQueuedHits]);
}

- (void)test_getVisitorIdentifier {
    OCMStub(ClassMethod([_analyticsMock getVisitorIdentifier:[OCMArg isKindOfClass:[NSString class]]])).andReturn(@"vid");
    [_analytics getVisitorIdentifier:^(id result) {
        // nothing
    } rejecter:nil];
    
    OCMVerify(ClassMethod([_analyticsMock getVisitorIdentifier:[OCMArg any]]));
    [_analyticsMock stopMocking];
}

- (void)test_setVisitorIdentifier {
    OCMStub(ClassMethod([_analyticsMock getVisitorIdentifier:[OCMArg isKindOfClass:[NSString class]]]));
    [_analytics setVisitorIdentifier:@"vid"];
    
    OCMVerify(ClassMethod([_analyticsMock setVisitorIdentifier:[OCMArg any]]));
    [_analyticsMock stopMocking];
}


@end
