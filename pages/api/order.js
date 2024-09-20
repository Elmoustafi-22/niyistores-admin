import { mongooseConnect } from "@/lib/mongoose";
import { Order } from "@/models/Order";

async function handler(req, res) {
    await mongooseConnect();

    res.json(await Order.find().sort({createdAt: -1}));
}

export default handler;