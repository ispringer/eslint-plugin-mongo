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
for (var key in commonGlobals) { 
	serverSideGlobals[key] = commonGlobals[key]; 
}

// See https://docs.mongodb.org/manual/reference/method/
var shellGlobals = {
    // properties
    "db": false,
    "cursor": false,
    "PlanCache": false,
    "Bulk": false,
    "rs": false,
    "sh": false,

    // functions
    "clearRawMongoProgramOutput": false,
    "rawMongoProgramOutput": false,
    "run": false,
    "runMongoProgram": false,
    "runProgram": false,
    "startMongoProgram": false,
    "stopMongoProgram": false,
    "stopMongoProgramByPid": false,
    "stopMongod": false,
    "waitMongoProgramOnPort": false,
    "waitProgram": false
};
for (var key in commonGlobals) { 
	shellGlobals[key] = commonGlobals[key]; 
}

module.exports = {
    environments: {
        "mongo-server-side": {
            globals: serverSideGlobals
        },
        "mongo-shell": {         
            globals: shellGlobals
        }
    }
};
