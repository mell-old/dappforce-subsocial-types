module.exports = {
  moduleNameMapper: {
    '@dappforce/types(.*)$': '<rootDir>/packages/types/src/$1',
    '@dappforce/api(.*)$': '<rootDir>/packages/api/src/$1',
    '@dappforce/jsonrpc(.*)$': '<rootDir>/packages/jsonrpc/src/$1',
    '@dappforce/scanner(.*)$': '<rootDir>/packages/scanner/src/$1',
    '@dappforce/util(.*)$': '<rootDir>/packages/util/src/$1',
    '@dappforce/api-derive(.*)$': '<rootDir>/packages/api-derive/src/$1'
  }
};
