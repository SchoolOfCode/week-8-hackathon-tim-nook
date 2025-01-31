import sqlite3 from "sqlite3";

//connect to database
const db = new sqlite3.Database(
  "./postbox.db",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) return console.error(err.message);
  }
);

// create table
// const createQuery = `CREATE TABLE postboxes (
//   postboxId INTEGER PRIMARY KEY,
//   owner TEXT
// )`;

// db.run(createQuery);

// Drop table
db.run(`DROP TABLE users`);

//Insert data

const insertQuery = `INSERT INTO users(postboxId)`;
