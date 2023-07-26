import express from "express";
import request from "supertest";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser());
app.use(express.json());

app.get('/', (req, res) => {
    const name = req.cookies["name"];
    res.send(`Hallo ${name}`);
});

app.post('/login', (req, res) => {
    const name = req.body.name;
    res.cookie("Login", name, {path: "/"});
    res.send(`Hallo ${name}`);
});

test("Test Cookie Read", async () => {
    const response = await request(app).get("/")
        .set("Cookie", "name=Husni;author=Remira Studio");
    expect(response.text).toBe("Hallo Husni");
});

test("Test Cookie Write", async () => {
    const response = await request(app).post("/login").send({name: "Husni"});
    expect(response.get("Set-Cookie").toString()).toBe("Login=Husni; Path=/");
    expect(response.text).toBe("Hallo Husni");
});