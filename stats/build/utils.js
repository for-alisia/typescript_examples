"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
exports.dateStringToDate = function (dateString) {
    var newDate = dateString
        .split('/')
        .map(function (el) { return parseInt(el); })
        .reverse()
        .join(',');
    return new Date(newDate);
};
