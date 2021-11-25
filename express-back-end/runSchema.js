require("dotenv").config();

const fs = require("fs");
const db = require("./db");
//db.query('')

// Loads the schema files from db/schema
const runSchemaFiles = function () {
  new Promise((resolve, reject) => {
    fs.readFile(
      "./db/schema/drawings.sql",
      {
        encoding: "utf-8",
      },
      (error, data) => {
        if (error) return reject(error);
        resolve(data);
      }
    );
  }).then((res) => {
    console.log("got a response", res);
  });
};

try {
  runSchemaFiles();
} catch (err) {
  console.error(`Failed due to error: ${err}`);
}
