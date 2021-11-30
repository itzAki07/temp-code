// Common JS - Every file is module (by degfault)
// Modules - Encapsulated Code (only share minimum)
const {john, peter} = require('./04-names')
const sayHi = require('./05-utils')
const data = require('./06-alternative-flavour')

require('./07-mind-grenade');
sayHi('susan');
sayHi(john);
sayHi(peter);