const dns = require('dns');

// private module function
function errorHandler(err) {
  // hibakezeles
}

function getIpOf(domain, cb) {
  dns.lookup(domain, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }

    cb(result);
  });
}

const public = {
  getIpOf: getIpOf
}

// varaible
module.exports = public;
