import { Router } from "express";
import DiscountCouponController from "../controllers/DiscountCoupon/DiscountCouponController";

class DiscountCouponRouter{

    router: Router

    constructor(){
        this.router = Router();
        this.router.post('/discountcoupon', DiscountCouponController.add) 
        this.router.post('/checkCoupon', DiscountCouponController.getByName)
    }

}

export default new DiscountCouponRouter()