const SSE = require("express-sse");

const sse = new SSE(["test data"]);
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

setInterval(() => {
        let i = 0
        while(i < 50) {
            const room = randomIntFromInterval(1, 5)
            sse.send({
                "type":"Location",
                "time":1670747871108,
                "deviceId":`device_${i}`,
                "location":`Room ${room}`,
                "locationTime":1670637446278,
                "locationSources":["WiFi"],
                "key": `device_${i}`
            }, "message");
            i++
        }
}, 10000) 
module.exports = sse;
