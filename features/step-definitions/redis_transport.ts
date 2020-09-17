import {Given, Then, When} from "cucumber";
import sinon from 'sinon';
import winston, {Logger} from "winston";
import IORedis from "ioredis";
import TransportStream from "winston-transport";

let redis = <IORedis.Redis> <unknown> { publish: sinon.spy() };

let logger: Logger;
interface IORedisTransportOptions extends TransportStream.TransportStreamOptions {
    redis: IORedis.Redis;
    channel: string;
}

class WinstonIORedisTransport extends TransportStream {
    private redis: IORedis.Redis;
    private channel: string;
    constructor(opts: IORedisTransportOptions) {
        super(opts);
        this.redis = opts.redis;
        this.channel = opts. channel;
    }

    log(info: any, callback: () => void) {
        setImmediate(() => this.emit('logged', info));
        this.redis.publish(this.channel, info.message);
        callback();
    }
}

Given('a winston logger with IORedis is set up for channel {string}', function (channel: string) {
    logger = winston.createLogger({
        transports: [
            new WinstonIORedisTransport({redis, channel})
        ]
    });
});

When('message {string} is logged', function (message: string) {
    logger.info(message);
});

Then('{string} is published on channel {string}', function (message: string, channel: string) {
    sinon.assert.calledOnce(<any> redis.publish);
    sinon.assert.calledWith(<any> redis.publish, channel, message);
});
