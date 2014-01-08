var quark = require('./build/Release/quarkhash');

var data = new Buffer('3459083906839048590834983687495679485760485646', 'hex');

var hashed = quark.digest(data);
console.log(hashed.toString('hex'));