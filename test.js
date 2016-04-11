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
    },
    'other': {
      pass: 'thru',
      other: 'keys'
    }
  }
};
var res = normalize(orig);
assert.deepEqual(res, {
  auths: {
    'foo.bar.baz': {
      username: '@foo',
      password: 'superduperdo',
      serveraddress: 'foo.bar.baz'
    },
    'already.ready': {
      username: '@ok',
      password: 'okyouwin',
      serveraddress: 'already.ready'
    },
    'other': {
      pass: 'thru',
      other: 'keys'
    }
  }
});
// console.log('----orig----');
// console.log(orig);
// console.log('----norm----');
// console.log(res);
