const path = require("path");
console.log(path.sep);

const filePath = path.join("tutorial/", "1-intro.js", "5-utils.js");

console.log(filePath);

const absolute = path.resolve(__dirname, "8-osmodule.js");

console.log(absolute);
