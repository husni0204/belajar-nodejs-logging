import express from "express";
import request from "supertest";

const app = express();

app.get('/', (req, res) => {
    res.set({
        "X-Powered-By": "Remira Studio",
        "X-Author": "Husni"
    });
    res.send(`Hallo Response`);
});

test("Test Response Header", async () => {
    const response = await request(app).get("/");
    expect(response.text).toBe("Hallo Response");
    expect(response.get("X-Powered-By")).toBe("Remira Studio");
    expect(response.get("X-Author")).toBe("Husni");
});