# ESLint plugin for MongoDB

This plugin includes two ESLint environments:

- `mongo/server-side` - for Mongo server-side scripts (i.e. mapReduce, eval, or $where)
- `mongo/shell` - for Mongo shell scripts

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm install eslint --save-dev
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

For Mongo server-side scripts, add the `mongo/server-side` environment to `.eslintrc`:

```json
{
    "env": {
        "mongo/server-side": true
    }
}
```

For Mongo shell scripts, add the `mongo/shell` environment to `.eslintrc`:

```json
{
    "env": {
        "mongo/shell": true
    }
}
```
