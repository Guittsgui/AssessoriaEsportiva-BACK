import { Router } from "express";
import DiscountCouponController from "../controllers/DiscountCoupon/DiscountCouponController";


const discountCouponRouter = Router();

discountCouponRouter.post('/discountcoupon', DiscountCouponController.add) 

export default discountCouponRouter;