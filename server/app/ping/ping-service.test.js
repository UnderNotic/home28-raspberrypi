const test = require('ava');
const ping = require('../ping/ping-service');

// test('single *', t => {
//     const result = ping("192.168.0.*");
//     t.is(result.length, 254);
//     t.pass();
// });

test('two *', t => {
    const result = ping("192.168.*.*");
    t.is(result.length, 254 * 254);
    t.pass();
})


test('zero *', t => {
    const result = ping("192.168.0.1");
    t.is(result.length, 1);
    t.deepEqual(result, ["192.168.0.1"]);
    t.pass();
})