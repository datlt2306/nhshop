import { Router } from "express";
import {
    createOrder,
    deleteOrder,
    getAllOrders,
    getOrderById,
    updateOrder,
} from "../controllers/orders";

const router = Router();

// Route để tạo mới một đơn hàng
router.post("/orders", createOrder);

// Route để lấy tất cả đơn hàng
router.get("/orders", getAllOrders);

// Route để lấy một đơn hàng theo ID
router.get("/orders/:id", getOrderById);

// Route để cập nhật thông tin của một đơn hàng
router.put("/orders/:id", updateOrder);

// Route để xóa một đơn hàng
router.delete("/orders/:id", deleteOrder);
export default router;
