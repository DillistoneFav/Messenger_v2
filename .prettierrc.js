module.exports = {
   "printWidth": 100,
   "tabWidth": 4,
   "useTabs": false,
   "semi": true,
   "singleQuote": true,
   "quoteProps": "as-needed",
   "jsxSingleQuote": false,
   "trailingComma": "es5",
   "bracketSpacing": true,
   "bracketSameLine": false,
   "arrowParens": "always",
   "endOfLine": "auto",
   "overrides": [
      {
         "files": "*.js",
         "options": {
            "tabWidth": 3,
            "trailingComma": "none"
         }
      },
      {
         "files": [
            "*.less",
            "*.css"
         ],
         "options": {
            "tabWidth": 3
         }
      }
   ]
};