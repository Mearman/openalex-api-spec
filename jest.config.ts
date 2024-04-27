import type { JestConfigWithTsJest } from 'ts-jest';

// import { defaults as tsjPreset  } from 'ts-jest/presets'
// import { defaultsESM } from 'ts-jest/presets';
import { jsWithTsESM } from 'ts-jest/presets';
// import { jsWithTs  } from 'ts-jest/presets';
// import { jsWithTsESM } from 'ts-jest/presets';
// import { jsWithBabel  } from 'ts-jest/presets';
// import { jsWithBabelESM  } from 'ts-jest/presets';

const jestConfig: JestConfigWithTsJest = {
	// ...defaultsESM,
	maxConcurrency: 1,
	testEnvironment: 'node',
	transform: {
		...jsWithTsESM.transform,
	},
	verbose: true,
};

export default jestConfig;
