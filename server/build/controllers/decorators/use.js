"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.use = void 0;
require("reflect-metadata");
var MetadataKeys_1 = require("./MetadataKeys");
function use(middleware) {
    return function (target, key, desc) {
        var middlewares = Reflect.getMetadata(MetadataKeys_1.Metadatakeys.middleware, target, key) || [];
        middlewares.push(middleware);
        Reflect.defineMetadata(MetadataKeys_1.Metadatakeys.middleware, middlewares, target, key);
    };
}
exports.use = use;
