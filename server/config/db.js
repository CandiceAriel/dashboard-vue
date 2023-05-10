import mysql from "mysql";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "to_do"
});

db.connect((error) => {
  if(!error){
    console.log(error);
  } else console.log()
})

export default db;