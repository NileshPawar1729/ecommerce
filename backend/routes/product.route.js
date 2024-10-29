import express from "express";
import {
  createProducts,
  deleteProduct,
  getAllProducts,
  getFeaturedProducts,
  getProductsByCategory,
  getRecommendedProducts,
  toggleFeatureProduct,
} from "../controller/product.controller.js";
import { adminRoute, protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", protectRoute, adminRoute, getAllProducts);
router.get("/featured", getFeaturedProducts);
router.get("/category/:category", getProductsByCategory);
router.get("/recommendations", getRecommendedProducts);
router.post("/", protectRoute, adminRoute, createProducts);
router.patch("/:id", protectRoute, adminRoute, toggleFeatureProduct); // Changed from PUT to PATCH
router.delete("/:id", protectRoute, adminRoute, deleteProduct);

export default router;
