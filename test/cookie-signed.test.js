import express from "express";
import request from "supertest";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser("CONTOHRAHASIA"));
app.use(express.json());

app.get('/', (req, res) => {
    const name = req.signedCookies["Login"];
    res.send(`Hallo ${name}`);
});

app.post('/login', (req, res) => {
    const name = req.body.name;
    res.cookie("Login", name, {path: "/", signed: true});
    res.send(`Hallo ${name}`);
});

test("Test Cookie Read", async () => {
    const response = await request(app).get("/")
        .set("Cookie", "Login=s%3AHusni.3H1XU5ZNCkBDD2XUzGsqYycuIgv7RVRr6uaMX3DtVf0; Path=/");
    expect(response.text).toBe("Hallo Husni");
});

test("Test Cookie Write", async () => {
    const response = await request(app).post("/login").send({name: "Husni"});
    console.info(response.get("Set-Cookie"));
    expect(response.get("Set-Cookie").toString()).toContain("Husni");
    expect(response.text).toBe("Hallo Husni");
});