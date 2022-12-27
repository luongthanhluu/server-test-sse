const SSE = require("express-sse");

const sse = new SSE(["test data"]);

setInterval(() => {
    let i = 0
    while(i < 50) {
        sse.send({ data: {
            id: i,
            deviceId: `device_${i}`,
            userId: '',
            userName: `device_${i}`,
            reason: 0,
            eventTime: new Date(),
            isSelfTest: true,
            createdTime: new Date(),
        }, state: 'NEW' }, "message");
        i++
    }
}, 10000) 
module.exports = sse;
