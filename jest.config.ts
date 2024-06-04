import { Config } from 'jest'

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  rootDir: 'src',
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
}

export default config
