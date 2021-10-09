const os  = require("os");

console.log(" Platform: ",os.platform());
console.log(" Architecture: ",os.arch());
console.log(" Total Memory: ",os.totalmem()/(1024*1024*1024));
console.log(" Free Memory: ",os.freemem()/(1024*1024*1024));
console.log(" Current User Information: ",os.userInfo());