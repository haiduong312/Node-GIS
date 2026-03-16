import express, { Express } from "express";

const router = express.Router();

const apiRoutes = (app: Express) => {
  router.post("/add-product-to-cart");
  router.post("/users");
  router.post("/login");

  router.get("/users");
  router.get("/users/:id");

  router.put("/users/:id");

  router.get("account");

  app.use("/api", router);
};

export default apiRoutes;
