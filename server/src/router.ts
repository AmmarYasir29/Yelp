import * as express from "express";
import controller from "./controller/controller";
const router = express.Router();

router.get("/restaurants", controller.getRestaurants);
router.get("/onerestaurant/:id", controller.Restaurant);
router.get("/review/:id",controller.getReview)
router.post("/addrestaurants", controller.addRestaurants);
router.post("/review/:id", controller.addReview);
router.put("/editrestaurants/:id", controller.editRestaurants);
router.delete("/Restaurants/:id", controller.delRestaurants);

export default router;
