require "json"
package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name         = "RCTACPAnalytics"
  s.version      = package["version"]
  s.summary      = "Use Adobe Experience SDKs with React Native"
  s.author       = "Adobe"

  s.homepage     = "https://github.com/adobe/react-native-acpanalytics"

  s.license      = "Apache License"
  s.platform     = :ios

  s.source       = { :git => "https://github.com/adobe/react-native-acpanalytics.git", :tag => "#{s.version}" }

  s.source_files  = "ios/**/*.{h,m}"
  s.requires_arc = true

  s.dependency "React"
end
