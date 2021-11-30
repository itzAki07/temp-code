const os = require('os');

// info about current user

const userInfo = os.userInfo();
console.log(userInfo);

// method to get system uptime

console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOs);