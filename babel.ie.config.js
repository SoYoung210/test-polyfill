const arrayMethodUsesToLength = require("core-js/internals/array-method-uses-to-length");

module.exports = {
  "presets": [
    [
      "@babel/preset-env", {
        "targets": ">= 0.25%, not dead, ie >= 10",
        "useBuiltIns": "entry",
        "corejs":3
      }
    ]
  ]
}
