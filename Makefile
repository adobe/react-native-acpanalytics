PROJECT_NAME = ACPAnalytics

setup:
	(npm install)
	(cd ios && pod repo update || true && pod install)

clean:
	(rm -rf android/build && rm -rf ios/build)
	(cd android && ./gradlew clean)
	(cd ios && xcodebuild clean -workspace RCT${PROJECT_NAME}.xcworkspace -scheme RCT${PROJECT_NAME})

build-android:
	(cd android && ./gradlew build -x lint)

build-ios: setup
	(cd ios && xcodebuild build -workspace RCT${PROJECT_NAME}.xcworkspace -scheme RCT${PROJECT_NAME})

build-android-sample:
	cd sample/ACP*Sample/android && gradle build

build-ios-sample: setup-sample
	xcodebuild  -project sample/ACP*Sample/ios/ACPCoreSample.xcodeproj -scheme ACPCoreSample

copy-to-sample:
	cd sample/ACP*Sample/ && sh copy-changes-to-sample.sh

# fetches the latest iOS SDK and put them in the project
update-ios-lib:
	git clone https://github.com/Adobe-Marketing-Cloud/acp-sdks
	cp -a acp-sdks/iOS/${PROJECT_NAME}/ ios/libs/
	rm -rf acp-sdks
