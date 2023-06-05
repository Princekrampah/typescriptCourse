"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function outputMsg(msg) {
    msg = msg.toUpperCase();
    console.log(msg);
}
outputMsg("Hello world");
outputMsg("45");
function raiseTo(base, power) {
    if (power === void 0) { power = 2; }
    if (power === 0) {
        return false;
    }
    return Math.pow(base, power);
}
var result = raiseTo(2);
function randomFunc(base) { }
;
var sayHello = function (name) {
    return "Hello ".concat(name);
};
function handleError(errorMsg) {
    throw new Error(errorMsg);
}
