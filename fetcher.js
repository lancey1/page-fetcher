const request = require("request");
const fs = require("fs");
                                                 //p.argv[2]   p.argv[3]
const url = process.argv[2];    // node fetcher.js ${URL} ${filePath}
const filePath = process.argv[3];

const fetcher = function (url, filePath) {
  if (url === undefined) {
    console.log("Please enter a valid url");
    return;
  }
  if (filePath === undefined) {
    console.log("please enter a valid filePath");
    return;
  }
  request(url, (error, response, body) => {
    if (error) {
      console.log("error:", error);
    }
    fs.writeFile(filePath, body, error => {
      if (error) {
        console.log("Error: failed write to filePath:", error);
      } else {
        console.log(`Downloaded and saved ${response.headers["content-length"]} bytes to ${filePath}`
        );
      }
    });
  });
};

fetcher(url,filePath);
