import express from "express";
import request from "supertest";

const app = express();

app.get('/', (req, res) => {
    res.send("Hallo Husni");
});

test("Test ExpressJS", async () => {
    const response = await request(app).get("/");
    expect(response.text).toBe("Hallo Dunia");
});