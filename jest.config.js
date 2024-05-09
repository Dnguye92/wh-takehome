module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['./src'],
    testMatch: ['**/__tests__/**/*.(test|spec).(ts|tsx|js)', '**/*.(test|spec).(ts|tsx|js)'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
