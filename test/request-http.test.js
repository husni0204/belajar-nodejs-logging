import express from "express";
import request from "supertest";

const app = express();

app.get('/', (req, res) => {
    res.send(`Hallo ${req.query.name}`);
});

test("Test Query Parameter", async () => {
    const response = await request(app).get("/").query({name: "Dunia"});
    expect(response.text).toBe("Hallo Dunia");
});