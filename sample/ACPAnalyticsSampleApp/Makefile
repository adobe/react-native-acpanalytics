sync:
	(cd ../../ && rm adobe-react-native-acpanalytics-2.0.1.tgz || true)
	(cd ../../ && npm pack)
	(rm -r node_modules/@adobe/react-native-acpanalytics || true)
	(rm package-lock.json || true)
	(npm cache clean --force && npm install)