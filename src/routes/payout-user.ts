import express from "express";
import authenticate from "../lib/authenticate";

const routes = express();

routes.post("/users/@me/payouts", authenticate(), (req, res) => {
  return res.status(500).json({ message: "Not implemented" });
});

export default routes;
