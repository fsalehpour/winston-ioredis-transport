# winston-ioredis-transport

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

**Author:** [Faramarz Salehpour](https://github.com/fsalehpour)
