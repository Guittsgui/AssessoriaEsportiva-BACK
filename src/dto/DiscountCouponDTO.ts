class DiscountCouponDTO{

    name: string
    isActive: boolean
    discountPercentage: number


    constructor(name:string,isActive:boolean,discountPercentage:number){
        this.name = name;
        this.isActive = isActive;
        this.discountPercentage = discountPercentage
    }
}

export default DiscountCouponDTO