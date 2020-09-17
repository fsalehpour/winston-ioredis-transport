import TransportStream from "winston-transport";
import IORedis from "ioredis";
import {IORedisTransportOptions} from "./IORedisTransportOptions";

export class WinstonIORedisTransport extends TransportStream {
    private redis: IORedis.Redis;
    private channel: string;

    constructor(opts: IORedisTransportOptions) {
        super(opts);
        this.redis = opts.redis;
        this.channel = opts.channel;
    }

    log(info: any, callback: () => void) {
        setImmediate(() => this.emit('logged', info));
        this.redis.publish(this.channel, info.message);
        callback();
    }
}