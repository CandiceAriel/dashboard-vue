import express from "express";
import db from '../config/db.js'

const router = express.Router();

//import db
const conn = db;

router.get('/', (req, res) => {
  conn.query('SELECT * FROM tasks', (err, data) => {
    if (err) {
      return res.status(500).json({
          status: false,
          message: 'Internal Server Error',
      })
      } else {
          return res.status(200).json({
              status: true,
              message: 'List Task Status',
              data: data
          })
      }
  })
});

export default router ;