import DiscountCouponDTO from "../../dto/DiscountCouponDTO";

class InMemoryDiscountCouponRepository{

    discountCouponList: DiscountCouponDTO[]

    constructor(){
        this.discountCouponList = []
    }

    add(discountCouponDTO: DiscountCouponDTO){
        this.discountCouponList.push(discountCouponDTO)
        return discountCouponDTO
    }

    verifyByName(name: string){
        const hasDiscount = this.discountCouponList.find(item => item.name === name)
        return hasDiscount
    }


}

export default new InMemoryDiscountCouponRepository();