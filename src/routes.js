import { Router } from "express";

const routes = new Router();

routes.get("/", (req, res) => res.send("Henlo!"));

module.exports = routes;
