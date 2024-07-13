module.exports = {
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
    setupFiles: ['<rootDir>/jest.setup.js'],
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
    testEnvironment: 'jest-environment-jsdom',
    transform: {
      '^.+\\.[tj]sx?$': ['babel-jest', { configFile: './babel-jest.config.js' }],
      '^.+\\.css$': 'jest-transform-stub',
    },
    moduleNameMapper: {
        '^@components/(.*)$': '<rootDir>/components/$1',
        '^@lib/(.*)$': '<rootDir>/lib/$1'
      },
  };
  