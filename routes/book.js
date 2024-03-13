import express from "express";



const router = express.Router();

const a =[]

router
  .route("/book")
  .get(function (req, res) {
    res.send(data);
  })
  .post((req, res) => {
    console.log(req.body)
    a.push(req.body);
    res.send(a)
  })
  .put(function (req, res) {
    res.send("Update the book");
  });

export default router;
