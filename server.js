const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let data = [];

app.post("/api/track", (req, res) => {
    data.push(req.body);
    res.send("Saved");
});

app.get("/api/data", (req, res) => {
    res.json(data);
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});