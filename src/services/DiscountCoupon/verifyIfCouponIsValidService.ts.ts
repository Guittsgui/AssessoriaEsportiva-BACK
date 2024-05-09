import discountCouponRepository from "../../repositories/DiscountCoupon/discountCouponRepository";
import inMemoryDiscountCouponRepository from "../../repositories/DiscountCoupon/inMemoryDiscountCouponRepository";

class VerifyIfCouponIsValidService{

    discountRepo: typeof discountCouponRepository | typeof inMemoryDiscountCouponRepository

    constructor(discountRepo: typeof discountCouponRepository | typeof inMemoryDiscountCouponRepository
        ){
            this.discountRepo = discountRepo
    }

    async execute(name: string){

        if(name === "" || name === null){
            throw new Error("Insira um cupom válido.")
        }

        const hasCoupon = await this.discountRepo.verifyByName(name)

        if(!hasCoupon){
            throw new Error("Não achamos o cupom.")
        }

        if(!hasCoupon.isActive){
            throw new Error("Cupom Inativo.")
        }

        return hasCoupon

    }

}

export default VerifyIfCouponIsValidService;