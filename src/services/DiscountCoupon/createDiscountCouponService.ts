import DiscountCouponDTO from "../../dto/DiscountCouponDTO";
import discountCouponRepository from "../../repositories/DiscountCoupon/discountCouponRepository";
import inMemoryDiscountCouponRepository from "../../repositories/DiscountCoupon/inMemoryDiscountCouponRepository";


class CreateDiscountCouponService{


    discountRepo: typeof discountCouponRepository | typeof inMemoryDiscountCouponRepository

    constructor(discountRepo: typeof discountCouponRepository | typeof inMemoryDiscountCouponRepository
        ){
            this.discountRepo = discountRepo
    }
    
    async execute(discountCouponDTO: DiscountCouponDTO){

        const coupon = discountCouponDTO

        if(!coupon.name || !coupon.discountPercentage || !coupon.isActive){
            throw new Error("Preencha todos os Campos")
        }
        if(coupon.discountPercentage <= 0){
            throw new Error("Desconto precisa ser MAIOR que Zero.")
        }
        
        const alreadyHasCoupon = await this.discountRepo.verifyByName(coupon.name)

        if(!alreadyHasCoupon){
            throw new Error("Este cupom já Existe.")
        }

        return await this.discountRepo.add(coupon)

    }


}

export default CreateDiscountCouponService;