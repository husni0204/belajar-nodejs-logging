import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send("Hallo Dunia");
});

app.get('/husni', (req, res) => {
    res.send("Hallo Husni");
});

app.listen(3000, () => {
    console.info("Server berjalan di port 3000");
});