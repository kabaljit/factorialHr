
const tsconfig = require('./tsconfig.json');

const rawAlias = tsconfig.compilerOptions.paths;
const alias = {};
if (rawAlias) {
  for (const x in rawAlias) {
    alias[x.replace('/*', '')] = rawAlias[x].map((p) => p.replace('/*', ''));
  }
}

module.exports = function (api) {

  
  api.cache(true);
  return {
    presets: ["babel-preset-expo", "@babel/preset-typescript"], 
    plugins: [
      require.resolve("expo-router/babel"),
       [
        'module-resolver',
        {
          root: ['./'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias,
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
