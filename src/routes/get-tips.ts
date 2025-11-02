import express from "express";

const routes = express();

routes.post("/tips", (req, res) => {
  return res.status(500).json({ message: "Not implemented" });
});

export default routes;
