import {Request, Response} from 'express'
import CreateDiscountCouponService from '../../services/DiscountCoupon/createDiscountCouponService';
import DiscountCouponDTO from '../../dto/DiscountCouponDTO';
import discountCouponRepository from '../../repositories/DiscountCoupon/discountCouponRepository';

class DiscountCouponController{

    add(req:Request,res:Response){

        const {name, isActive, discountPercentage} = req.body
        const discountCouponDTO = new DiscountCouponDTO(name,isActive,discountPercentage);

        try {
            const createDiscountCouponService = new CreateDiscountCouponService(discountCouponRepository)
            createDiscountCouponService.execute(discountCouponDTO)
        } catch (error) {
            if(error instanceof Error){
                return res.status(400).json({msg: error.message})
            }
        }

    }

    getAll(){

    }

    getById(){
        
    }



}

export default new DiscountCouponController();