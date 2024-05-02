import { Router } from "express";
import DiscountCouponController from "../controllers/DiscountCoupon/DiscountCouponController";

class DiscountCouponRouter{

    router: Router

    constructor(){
        this.router = Router();
        this.router.post('/discountcoupon', DiscountCouponController.add) 
        this.router.get('discountcoupon', DiscountCouponController.getAll)
        this.router.get('discountcoupon/:id' , DiscountCouponController.getById)
    }

}

export default new DiscountCouponRouter()