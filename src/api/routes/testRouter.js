import { Router } from "express";

const TestRouter = Router();

TestRouter.get('/v1', (req, res) => {
    res.send("Hello, test!");
})

const testRouter = () => {

    TestRouter.get("/v2", (req, res) => {
        res.send("Hi!")
    });

    TestRouter.get('/v3', (req, res) => {
        res.send("Hello!")

    })
}

export default TestRouter;