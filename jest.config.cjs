module.exports = {
  setupFilesAfterEnv: ["<rootDir>/setupTest.ts"],
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"]
};
