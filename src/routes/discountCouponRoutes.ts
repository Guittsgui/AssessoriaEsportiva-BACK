import { Router } from "express";
import DiscountCouponController from "../controllers/DiscountCoupon/DiscountCouponController";

class DiscountCouponRouter{

    router: Router

    constructor(){
        this.router = Router();
        this.router.post('/discountcoupon', DiscountCouponController.add) 
    }

}

export default new DiscountCouponRouter()