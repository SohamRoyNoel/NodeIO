var fs = require("fs");

fs.readFile("temp.txt", "utf-8", (err, data) => {
  console.log(data);
});