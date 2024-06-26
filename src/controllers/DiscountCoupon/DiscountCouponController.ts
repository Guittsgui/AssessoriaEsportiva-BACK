import {Request, Response} from 'express'
import CreateDiscountCouponService from '../../services/DiscountCoupon/createDiscountCouponService';
import DiscountCouponDTO from '../../dto/DiscountCouponDTO';
import discountCouponRepository from '../../repositories/DiscountCoupon/discountCouponRepository';
import VerifyIfCouponIsValidService from '../../services/DiscountCoupon/verifyIfCouponIsValidService.ts';


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

    async getByName(req:Request, res:Response){
        const {name} = req.body;
        try {
            const verifyIfCouponIsValidService = new VerifyIfCouponIsValidService(discountCouponRepository);
            const coupon = await verifyIfCouponIsValidService.execute(name);
            return res.status(200).json({msg: "Cupom Aplicado com Sucesso", coupon})
        } catch (error) {
            if(error instanceof Error){
                return res.status(400).json({msg: error.message})
            }
        }
    }




}

export default new DiscountCouponController();