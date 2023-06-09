import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import bodyParser from 'body-parser'
import mysql from "mysql";

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

var corsOptions = {
  origin: "http://localhost:8080",
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
};

app.use(cors(corsOptions));

// // parse requests of content-type - application/json
// app.use(bodyParser.json());

// // parse requests of content-type - application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "to_do"
});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to server application." });
});

// set port, listen for requests
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

app.get('/status', (req, res) =>
  db.query('SELECT * FROM status', (err, data) => {
    if (data) {
      res.send(data)
    } else console.log(err)
  }
  )
)

app.get('/tasks', (req, res) =>
  db.query(
    'SELECT * FROM tasks', 
  (err, result) => {
    if (result) {
      res.send(result)
    } else console.log(err)
  }
  )
)

app.post("/create", (req, res) => {
  const title = req.body.title;
  const desc = req.body.desc;
  const status = req.body.status;

  db.query(
    "INSERT INTO tasks (task_status, ttle, description) VALUES (?,?,?)",
    [status, title, desc],
    (err, result) => {
      if (result) {
        res.send("Values Inserted")
      } else console.log(err)
    }
  );
});

app.put("/update", (req, res) => {
  const id = req.body.tId;
  console.log(id);
  db.query(
    "UPDATE tasks SET task_status = 2 WHERE id = ?",
    [id],
    (err, result) => {
      if (result) {
        res.send(result);
      } else {
        console.log(err)
      }
    }
  );
});