import * as path from 'path';
import { copySync, removeSync } from 'fs-extra';

import { runTests } from 'vscode-test';

async function main() {
	try {
		// The folder containing the Extension Manifest package.json
		// Passed to `--extensionDevelopmentPath`
		const extensionDevelopmentPath = path.resolve(__dirname, '../../');

		// The path to test runner
		// Passed to --extensionTestsPath
		const extensionTestsPath = path.resolve(__dirname, './suite/index');

		// Copy across fixtures for testing
		removeSync(path.join(extensionTestsPath, 'test-fixtures'));
		copySync(path.join(extensionDevelopmentPath, 'test-fixtures'), path.join(extensionTestsPath, 'test-fixtures'));

		// Download VS Code, unzip it and run the integration test
		await runTests({ extensionDevelopmentPath, extensionTestsPath });
	} catch (err) {
		console.log("ERROR: ", {err});
		console.error('Failed to run tests');
		process.exit(1);
	}
}

main();