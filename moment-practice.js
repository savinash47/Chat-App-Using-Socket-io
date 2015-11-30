var moment = require('moment');
var now = moment();

console.log(now.format());
console.log(now.format('X'));
console.log(now.valueOf());

var timestamp = 1448853958526;

var timestampMoment = moment.utc(timestamp);

c//onsole.log(timestampMoment.local().format(''));
console.log(timestampMoment.local().format('h:mm a'));
// now.subtract(1,'y');
// console.log(now.format('YYYY'));

// console.log(now.format("MMM Do YYYY, h:mma X  x")); 