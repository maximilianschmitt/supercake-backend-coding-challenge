import express from "express";
import sendTip from "./send-tip";
import getUser from "./get-user";
import getTips from "./get-tips";
import getSentTipsForUser from "./get-tips";
import payoutUser from "./payout-user";
import addFunds from "./add-funds";

function routes() {
  const routes = express();

  routes.use(sendTip);
  routes.use(getUser);
  routes.use(getTips);
  routes.use(getSentTipsForUser);
  routes.use(payoutUser);
  routes.use(addFunds);

  return routes;
}

export default routes;
