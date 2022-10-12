import { Router } from "express";
import * as Controller from "./controller";

const testRouter = Router();

testRouter.route("/").get(Controller.findAll);
testRouter.route("/").post(Controller.create);
testRouter.route("/update/:id").put(Controller.update);
testRouter.route("/delete/:id").delete(Controller.remove);

export default testRouter;
