import express from "express";
import request from "supertest";

const app = express();

app.get('/', (req, res) => {
    res.send(`Hallo ${req.query.firstName} ${req.query.lastName}`);
});

test("Test Query Parameter", async () => {
    const response = await request(app).get("/").query({firstName: "Husni", lastName: "Mubarok"});
    expect(response.text).toBe("Hallo Husni Mubarok");
});