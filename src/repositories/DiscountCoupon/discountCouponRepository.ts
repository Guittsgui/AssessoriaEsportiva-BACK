import DiscountCouponDTO from "../../dto/DiscountCouponDTO";
import { db } from "../../libs/prisma";


class DiscountCounponRepository{

    async add(discountCouponDTO: DiscountCouponDTO){
        const coupon = db.discountCoupon.create({
            data: discountCouponDTO
        })

        return coupon
    }

    verifyByName(name: string){
        const coupon = db.discountCoupon.findUnique({
            where: {
                name
            }
        })
        return coupon
    }

    validateIfCouponIsActivew(name: string){
        
    }


}

export default new DiscountCounponRepository();