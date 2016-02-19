/**
 * @fileoverview ESLint environments for MongoDB
 * @author Ian Springer
 * @copyright 2016 Ian Springer. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// See https://docs.mongodb.org/manual/reference/method/
var commonGlobals = {
    // properties
    "MaxKey": false,
    "MinKey": false,
    
    // functions
    "assert": false,
    "doassert": false,
    "gc": false,
    "hex_md5": false,
    "isNumber": false,
    "isObject": false,
    "isString": false,
    "print": false,
    "printjson": false,
    "printjsononeline": false,
    "sleep": false,
    "tojson": false,
    "tojsononeline": false,
    "tojsonObject": false,
    "version": false,
    
    // constructors
    "BinData": false,
    "Date": false,
    "DBPointer": false,
    "DBRef": false,
    "HexData": false,
    "ISODate": false,
    "Map": false,
    "MD5": false,
    "NumberInt": false,
    "NumberLong": false,
    "ObjectId": false,
    "UUID": false
};

// See https://docs.mongodb.org/manual/reference/operator/query/where/#behavior
var serverSideGlobals = {
    "args": false,
    "emit": false,
    "Timestamp": false
};
merge(serverSideGlobals, commonGlobals);

// See https://docs.mongodb.org/manual/reference/method/
var shellGlobals = {
    // properties
    "Bulk": false,
    "cursor": false,
    "db": false,
    "Mongo": false,
    "PlanCache": false,
    "rs": false,
    "sh": false,

    // functions
    "cat": false,
    "cd": false,
    "clearRawMongoProgramOutput": false,
    "connect": false,
    "copyDbpath": false,
    "resetDbpath": false,
    "fuzzFile": false,
    "getHostName": false,
    "getMemInfo": false,
    "hostname": false,
    "_isWindows": false,
    "listFiles": false,
    "load": false,
    "ls": false,
    "md5sumFile": false,
    "mkdir": false,
    "pwd": false,
    "quit": false,
    "_rand": false,
    "rawMongoProgramOutput": false,
    "removeFile": false,
    "run": false,
    "runMongoProgram": false,
    "runProgram": false,
    "setVerboseShell": false,
    "_srand": false,
    "startMongoProgram": false,
    "stopMongoProgram": false,
    "stopMongoProgramByPid": false,
    "stopMongod": false,
    "waitMongoProgramOnPort": false,
    "waitProgram": false
};
merge(shellGlobals, commonGlobals);

function merge(targetObj, sourceObj) {
    for (var key in sourceObj) {
        if (sourceObj.hasOwnProperty(key)) {
            targetObj[key] = sourceObj[key];
        }
    }
}

module.exports = {
    environments: {
        "server-side": {
            globals: serverSideGlobals
        },
        "shell": {
            globals: shellGlobals
        }
    }
};
