import Order from "../models/order";

// Controller để tạo mới một đơn hàng
export const createOrder = async (req, res) => {
    try {
        const { userId, items, totalPrice, status } = req.body;
        const order = new Order({ userId, items, totalPrice, status });
        const savedOrder = await order.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller để lấy tất cả đơn hàng
export const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller để lấy một đơn hàng theo ID
export const getOrderById = async (req, res) => {
    const orderId = req.params.id;
    try {
        const order = await Order.findById(orderId);
        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller để cập nhật thông tin của một đơn hàng
export const updateOrder = async (req, res) => {
    const orderId = req.params.id;
    try {
        const { userId, items, totalPrice, status } = req.body;
        const updatedOrder = await Order.findByIdAndUpdate(
            orderId,
            { userId, items, totalPrice, status },
            { new: true }
        );
        if (!updatedOrder) {
            return res.status(404).json({ message: "Order not found" });
        }
        res.status(200).json(updatedOrder);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller để xóa một đơn hàng
export const deleteOrder = async (req, res) => {
    const orderId = req.params.id;
    try {
        const deletedOrder = await Order.findByIdAndDelete(orderId);
        if (!deletedOrder) {
            return res.status(404).json({ message: "Order not found" });
        }
        res.status(200).json({ message: "Order deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
