"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var exchangeDetail_1 = require("./../exchangeDetail");
var map_1 = require("collections/map");
/**
 * Created by ssalvo on 31/08/2017.
 */
var CurrencyInfo = (function () {
    function CurrencyInfo(inp) {
        var _this = this;
        this.err = null;
        this.result = null;
        this.err = inp.error;
        this.result = new map_1.Map();
        inp.result.forEach(function (key, obj) {
            _this.result.add(key, new exchangeDetail_1.ExchangeDetail(obj.altname, obj.base));
        });
    }
    CurrencyInfo.prototype.getResult = function () {
        return this.result;
    };
    return CurrencyInfo;
}());
exports.CurrencyInfo = CurrencyInfo;
