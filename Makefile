PROJECT_NAME = RCTACPAnalytics

setup:
	(npm install)
	(cd ios && pod repo update || true && pod install)

clean:
	(rm -rf android/build && rm -rf ios/build)
	(cd android && ./gradlew clean)
	(cd ios && xcodebuild clean -workspace ${PROJECT_NAME}.xcworkspace -scheme ${PROJECT_NAME})

build-android:
	(cd android && ./gradlew build -x lint)

build-ios: setup
	(cd ios && xcodebuild build -workspace ${PROJECT_NAME}.xcworkspace -scheme ${PROJECT_NAME})
	
