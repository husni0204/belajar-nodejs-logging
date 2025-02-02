import express from "express";
import request from "supertest";

const app = express();

app.get('/', (req, res) => {
    if (req.query.name) {
        res.status(200);
        res.send(`Hallo ${req.query.name}`);
    } else {
        res.status(400);
        res.end();
    }
});

test("Test Response Status", async () => {
    let response = await request(app).get("/").query({name: "Husni"});
    expect(response.status).toBe(200);
    expect(response.text).toBe("Hallo Husni");

    response = await request(app).get("/");
    expect(response.status).toBe(400);
});