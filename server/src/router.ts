import * as express from "express";
import controller from "./controller/controller";
const router = express.Router();

router.get("/restaurants", controller.getRestaurants);
router.get("/onerestaurant/:id", controller.Restaurant);
router.post("/addrestaurants", controller.addRestaurants);
router.put("/editrestaurants/:id", controller.editRestaurants);
router.delete("/Restaurants/:id", controller.delRestaurants);
router.post("/review/:id", controller.addReview);

export default router;
