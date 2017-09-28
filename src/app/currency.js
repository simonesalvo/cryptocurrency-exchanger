"use strict";
/**
 * Created by ssalvo on 29/08/2017.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var map_1 = require("collections/map");
var Currency = (function () {
    function Currency(l) {
        this.label = l;
        this.convertible = new map_1.Map();
    }
    Currency.prototype.getConvertibles = function () {
        return this.convertible;
    };
    Currency.prototype.getLabel = function () {
        return this.label;
    };
    return Currency;
}());
exports.Currency = Currency;
