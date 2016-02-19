# eslint-plugin-mongo

ESLint environments for MongoDB

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install [`eslint-plugin-mongo`](https://www.npmjs.com/package/eslint-plugin-mongo):

```
$ npm install eslint-plugin-mongo --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-mongo` globally.

## Usage

Add `mongo` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "mongo"
    ]
}
```
