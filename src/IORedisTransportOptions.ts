import TransportStream from "winston-transport";
import IORedis from "ioredis";

export interface IORedisTransportOptions extends TransportStream.TransportStreamOptions {
    redis: IORedis.Redis;
    channel: string;
}