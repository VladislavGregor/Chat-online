const express = require('express');
const router = express.Router();

router.get("/", (req,res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");


res.setHeader(
    "Access - Control-Allow-Headers",
    "X-Requested-width, content-type"
);

res.send("Hello!");
});


module.exports = router;

