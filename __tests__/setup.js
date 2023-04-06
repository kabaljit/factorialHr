// Any of code to setup the test


console.log = jest.fn();
console.warn = jest.fn();
console.error = jest.fn();


jest.mock('react-native-safe-area-context', () => ({
  useSafeAreaInsets(){ return {top: 0}}
}));

jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'));

// jest.mock('reanimated-bottom-sheet');