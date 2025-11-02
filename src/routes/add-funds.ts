import express from "express";

const routes = express();

routes.post("/users/@me/funds", (req, res) => {
  return res.status(500).json({ message: "Not implemented" });
});

export default routes;
