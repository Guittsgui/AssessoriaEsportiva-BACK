import exp from "constants";
import DiscountCouponDTO from "../../../dto/DiscountCouponDTO";
import inMemoryDiscountCouponRepository from "../../../repositories/DiscountCoupon/inMemoryDiscountCouponRepository";
import CreateDiscountCouponService from "../createDiscountCouponService";
import VerifyIfCouponIsValidService from "../verifyIfCouponIsValidService.ts";

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

describe("Test ValidateCouponIsValid Service" , () => {
    const verifyIfCouponIsValidService = new VerifyIfCouponIsValidService(inMemoryDiscountCouponRepository);
    const createDiscountCouponService = new CreateDiscountCouponService(inMemoryDiscountCouponRepository);

    test('should find successfully a cupom that already exists.', async () => {
        const discountCoupon = new DiscountCouponDTO("testeteste", true, 5)
        await createDiscountCouponService.execute(discountCoupon);
        const hasCoupon = await verifyIfCouponIsValidService.execute("testeteste")
        expect(hasCoupon).toHaveProperty("name")
    })

    test('should NOT find a coumpon with no name', async () => {
        await expect(verifyIfCouponIsValidService.execute(""))
            .rejects
            .toEqual(new Error("Insira um cupom válido."))
    })

    test('should NOT find an Inactive Coupom', async () => {
        const newCoupon = new DiscountCouponDTO("inactiveCoupon", false ,20)
        await createDiscountCouponService.execute(newCoupon)  
        await expect(verifyIfCouponIsValidService.execute("inactiveCoupon"))
            .rejects
            .toEqual(new Error("Cupom Inativo."))
    })
})