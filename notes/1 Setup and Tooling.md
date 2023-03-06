# Course Materials

## Course site

Notes for following along in the course
https://react-v8.holt.courses/

## Example Project

This is each milestone of the the example project in case you need it.
https://github.com/btholt/citr-v8-project

# Setup and Tooling

## npm

Run 'npm init -y'

Generates a package.json to manage dependencies.

## Prettier

Unopinionated library for formatting JS code.

Install prettier: npm i prettier

## ESlint

Helps you catch JS problems.

```
{
  "extends": [
    "eslint:recommended",
    "plugin:import/errors",        // Use the eslint-plugin-import errors
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended", // For accessability errors
    "prettier"
  ],
  "rules": {
    "react/prop-types": 0,          // Turn off prop-types ( use TS or nothing)
    "react/react-in-jsx-scope": 0   // Don't need to import React in JSX files anymore
  },
  "plugins": [ "react", "import", "jsx-a11y" ],
  "parserOptions": {
    "ecmaVersion": 2022,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
  "settings": {
    "react": {
      "version": "detect" // Go look in my package.json for the version
    },
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx"] // Look for .js and .jsx files
      }
    }
  }
}

```

## Vite

This is the build tool. Pronounced "Veet". Means quick in French.

Created by Rich Harris.
