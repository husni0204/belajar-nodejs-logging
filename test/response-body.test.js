import express from "express";
import request from "supertest";

const app = express();

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html')
    res.send(`<html><body>Hallo Dunia</body></html>`);
});

test("Test Response Body", async () => {
    const response = await request(app).get("/");
    expect(response.get('Content-Type')).toContain('text/html');
    expect(response.text).toBe(`<html><body>Hallo Dunia</body></html>`);
});