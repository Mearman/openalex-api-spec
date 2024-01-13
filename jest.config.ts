import type { JestConfigWithTsJest } from 'ts-jest';

import { jsWithTsESM } from 'ts-jest/presets';
// import { defaults as tsjPreset  } from 'ts-jest/presets'
// import { defaultsESM  } from 'ts-jest/presets';
// import { jsWithTs  } from 'ts-jest/presets';
// import { jsWithTsESM } from 'ts-jest/presets';
// import { jsWithBabel  } from 'ts-jest/presets';
// import { jsWithBabelESM  } from 'ts-jest/presets';

const jestConfig: JestConfigWithTsJest = {
	transform: {
		...jsWithTsESM.transform,
	},
	bail: true,
	verbose: true,
	testEnvironment: 'node'
};

export default jestConfig;
