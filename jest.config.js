module.exports = {
  clearMocks: false,
  collectCoverage: true,
  coverageDirectory: './coverage',
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageThreshold: {
    global: {
      branchesb: 90,
      functions: 90,
      lines: 90,
    },
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
};
