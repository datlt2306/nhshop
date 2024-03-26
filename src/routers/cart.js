import { Router } from "express";
import {
    addItemToCart,
    getCartByUserId,
    removeFromCart,
    updateProductQuantity,
} from "../controllers/cart";

const router = Router();

router.get("/cart/:userId", getCartByUserId);
router.post("/cart/add-to-cart", addItemToCart);
router.put("/cart/update-product-quantity", updateProductQuantity);
router.delete("/cart/remove-from-cart", removeFromCart);

export default router;
