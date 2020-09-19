# winston-ioredis-transport

[![NPM](https://nodei.co/npm/winston-ioredis-transport.png?compact=true)](https://nodei.co/npm/winston-ioredis-transport/)
[![GitHub issues](https://img.shields.io/github/issues/fsalehpour/winston-ioredis-transport)](https://github.com/fsalehpour/winston-ioredis-transport/issues)
[![GitHub forks](https://img.shields.io/github/forks/fsalehpour/winston-ioredis-transport)](https://github.com/fsalehpour/winston-ioredis-transport/network)
[![GitHub stars](https://img.shields.io/github/stars/fsalehpour/winston-ioredis-transport)](https://github.com/fsalehpour/winston-ioredis-transport/stargazers)
[![GitHub license](https://img.shields.io/github/license/fsalehpour/winston-ioredis-transport)](https://github.com/fsalehpour/winston-ioredis-transport)
[![Twitter](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2Ffsalehpour%2Fwinston-ioredis-transport)](https://twitter.com/intent/tweet?text=A%20transport%20to%20use%20with%20winston%20logging%20library%20to%20publish%20logs%20on%20a%20pubsub%20channel%20on%20Redis.%0A&url=https%3A%2F%2Fgithub.com%2Ffsalehpour%2Fwinston-ioredis-transport)
[![Twitter Follow](https://img.shields.io/twitter/follow/fsalehpour?style=social)](https://twitter.com/fsalehpour?ref_src=twsrc%5Etfw)

A transport to use with [winston logging library](https://github.com/winstonjs/winston) to publish logs on a pubsub channel on Redis.

There are other transports available for Redis, this one uses [ioredis](https://github.com/luin/ioredis). So, if you already have it as a dependency in your project
you won't need to introduce another redis package just to log.

## Install

```
npm install winston-ioredis-transport
```

## Example

JavaScript:

```javascript
const Redis = require('ioredis');
const winston = require('winston');
const {WinstonIORedisTransport} = require('winston-ioredis-transport');

let redis = new Redis();
let logger = winston.createLogger({
    transports: [
        new WinstonIORedisTransport({redis, channel: 'logs'})
    ]
});

logger.info('my new message', {abc: 123, ts: new Date(), colour: "purple"});
```

TypeScript:

```typescript
import Redis from 'ioredis';
import winston from 'winston';
import {WinstonIORedisTransport} from 'winston-ioredis-transport';

let redis = new Redis();
let logger = winston.createLogger({
    transports: [
        new WinstonIORedisTransport({redis, channel: 'logs'})
    ]
});

logger.info('my new message', {abc: 123, ts: new Date(), colour: "purple"});
```

## Run Tests

The tests are written in [Gherkin](https://cucumber.io/docs/gherkin/reference/) with [cucumber](https://cucumber.io/) and [Sinon.js](https://sinonjs.org/)

```
npm test
```

**Author:** [Faramarz Salehpour](https://github.com/fsalehpour)
