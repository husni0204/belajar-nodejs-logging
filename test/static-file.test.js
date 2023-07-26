import express from "express";
import request from "supertest";

const app = express();
// app.use(express.static(__dirname + "/static"));
app.use("/static", express.static(__dirname + "/static"));

app.get('/', (req, res) => {
    res.send("Hallo Dunia");
});

app.get('/contoh.txt', (req, res) => {
    res.send(`Hallo Response`);
});

test("Test Static File", async () => {
    const response = await request(app).get("/");
    expect(response.text).toBe("Hallo Dunia");
});

test("Test Static File Contoh.txt", async () => {
    const response = await request(app).get("/contoh.txt");
    expect(response.text).toContain("Hallo Response");
});

test("Test Static File /static/contoh.txt", async () => {
    const response = await request(app).get("/static/contoh.txt");
    expect(response.text).toContain("Ini contoh text");
});