import express from "express";
import request from "supertest";

const app = express();

app.get('/', (req, res) => {
    const type = req.get("accept")
    res.send(`Hallo ${type}`);
});

test("Test Request Header", async () => {
    const response = await request(app).get("/")
        .set("Accept", "text/plain")
    expect(response.text).toBe("Hallo text/plain");
});