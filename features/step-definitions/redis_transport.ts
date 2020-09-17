import {Given, Then, When} from "cucumber";
import sinon from 'sinon';
import winston, {Logger} from "winston";
import IORedis from "ioredis";
import {WinstonIORedisTransport} from "../../src/WinstonIORedisTransport";

let redis = <IORedis.Redis> <unknown> { publish: sinon.spy() };

let logger: Logger;

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
