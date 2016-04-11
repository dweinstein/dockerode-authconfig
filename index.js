function normalize (obj) {
  var auths = obj.auths;
  var normalized = Object.keys(auths).reduce(function (accum, entry) {
    var cur = obj.auths[entry];
    if (cur.auth) {
      var auth = new Buffer(cur.auth, 'base64').toString('utf8');
      var user_pass = auth.split(':');
      accum[entry] = {
        username: user_pass[0],
        password: user_pass[1],
        serveraddress: entry
      };
    } else if (cur.username && cur.password) {
      accum[entry] = {
        username: cur.username,
        password: cur.password,
        serveraddress: entry
      };
    } else {
      accum[entry] = cur;
    }
    return accum;
  }, {});

  return {
    auths: normalized
  };
}

module.exports = normalize;
