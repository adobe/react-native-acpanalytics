#!/bin/bash
set -e

echo 'Installing npm packages'
npm install

echo 'Unlinking React Native Module'
react-native unlink @adobe/react-native-acpanalytics

echo 'Copying React Native Module into Sample App'
rm -r node_modules/@adobe/react-native-acpanalytics
mkdir node_modules/@adobe/react-native-acpanalytics
cd ../.. && npm pack
cd sample/ACP*Sample/
cp ../../*.tgz node_modules/@adobe/
tar -xvzf node_modules/@adobe/*.tgz --directory=node_modules/@adobe/
rm node_modules/@adobe/*.tgz
rm -r node_modules/@adobe/react-native-acpanalytics
mv node_modules/@adobe/package node_modules/@adobe/react-native-acpanalytics

echo 'Linking'
react-native link
