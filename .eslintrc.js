module.exports = {
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "react-hooks",
    "@typescript-eslint"
  ],
  "extends": [
    "airbnb",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "rules": {
    "@typescript-eslint/explicit-function-return-type": "error",
    "react/prop-types": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "import/no-unresolved": "off",
    "import/no-extraneous-dependencies": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".jsx", ".tsx"]}],
    "no-underscore-dangle": "off",
    "max-len": ["error", { "code": 120 }],
    "@typescript-eslint/camelcase": "off",
    "lines-between-class-members": "off",
    "arrow-parens": [2, "as-needed", { "requireForBlockBody": true }],
    "react/jsx-props-no-spreading": "off"
  }
}

