import express from "express";
import request from "supertest";

const app = express();

app.get('/hallo/dunia', (req, res) => {
    res.json({
        path: req.path,
        originalUrl: req.originalUrl,
        hostname: req.hostname,
        protocol: req.protocol,
        secure: req.secure,
    })
});

test("Test Reuest Url", async () => {
    const response = await request(app).get("/hallo/dunia").query({name: "Husni"});
    expect(response.body).toEqual({
        path: "/hallo/dunia",
        originalUrl: "/hallo/dunia?name=Husni",
        hostname: "127.0.0.1",
        protocol: "http",
        secure:false,
    });
});