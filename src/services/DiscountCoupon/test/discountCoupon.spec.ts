import exp from "constants";
import DiscountCouponDTO from "../../../dto/DiscountCouponDTO";
import inMemoryDiscountCouponRepository from "../../../repositories/DiscountCoupon/inMemoryDiscountCouponRepository";
import CreateDiscountCouponService from "../createDiscountCouponService";

describe("Test CreateDiscountCoupon Service", () => {

    const createDiscountCouponService = new CreateDiscountCouponService(inMemoryDiscountCouponRepository);

    test("Shoud add Successfully an DiscountCoupon", async () => {
        const discountCoupon = new DiscountCouponDTO("letsGoBaby", true, 5)
        const response = await createDiscountCouponService.execute(discountCoupon)
        expect(response).toHaveProperty('name')
    })

    test("Shoud NOT add an DiscountCoupon with a value less than or equal to zero", async () => {

        const discountCoupon = new DiscountCouponDTO("mariateste", true, -2)
        await expect(createDiscountCouponService.execute(discountCoupon))
            .rejects
            .toEqual(new Error("Desconto precisa ser MAIOR que Zero."))
    })

    test("Shoud NOT add an DiscountCoupon with name that already exists", async() => {
        const discountCoupon = new DiscountCouponDTO("fififi", true, 2)
        await createDiscountCouponService.execute(discountCoupon)
        await expect(createDiscountCouponService.execute(discountCoupon))
            .rejects
            .toEqual(new Error("Este cupom já Existe."))
    })


})