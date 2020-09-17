"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinstonIORedisTransport = void 0;
var winston_transport_1 = __importDefault(require("winston-transport"));
var triple_beam_1 = require("triple-beam");
var WinstonIORedisTransport = /** @class */ (function (_super) {
    __extends(WinstonIORedisTransport, _super);
    function WinstonIORedisTransport(opts) {
        var _this = _super.call(this, opts) || this;
        _this.redis = opts.redis;
        _this.channel = opts.channel;
        return _this;
    }
    WinstonIORedisTransport.prototype.log = function (info, callback) {
        var _this = this;
        setImmediate(function () { return _this.emit('logged', info); });
        this.redis.publish(this.channel, "" + info[triple_beam_1.MESSAGE]);
        callback();
    };
    return WinstonIORedisTransport;
}(winston_transport_1.default));
exports.WinstonIORedisTransport = WinstonIORedisTransport;
