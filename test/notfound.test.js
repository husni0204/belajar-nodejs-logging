import express from "express";
import request from "supertest";

const app = express();

app.get('/', (req, res) => {
    res.send(`Hallo Response`);
});

app.use((req, res, next) => {
    res.status(404).send(`404 Ora ketemu luh`);
});

test("Test Response", async () => {
    const response = await request(app).get("/");
    expect(response.text).toBe("Hallo Response");
});

test("Test Response Not Found", async () => {
    const response = await request(app).get("/halaman-tidak-ada");
    expect(response.text).toBe("404 Ora ketemu luh");
});