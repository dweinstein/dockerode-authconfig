# SYNOPSIS

Normalize auth info from `~/.docker/config.json` to the [`authConfig`
format](https://docs.docker.com/engine/reference/api/docker_remote_api/#authentication)
for the docker daemon.

# USAGE

Install: `npm i dockerode-authconfig`

```js
var assert = require('assert');
var normalize = require('.');
var orig = {
  auths: {
    'foo.bar.baz': {
      email: 'foo@bar.com',
      auth: 'QGZvbzpzdXBlcmR1cGVyZG8='
    },
    'already.ready': {
      username: '@ok',
      password: 'okyouwin'
    }
  }
};
var res = normalize(orig);
assert.deepEqual(res, {
  auths: {
    'foo.bar.baz': {
      username: '@foo',
      password: 'superduperdo'
    },
    'already.ready': {
      username: '@ok',
      password: 'okyouwin'
    }
  }
});
console.log('----orig----');
console.log(orig);
console.log('----norm----');
console.log(res);
```
