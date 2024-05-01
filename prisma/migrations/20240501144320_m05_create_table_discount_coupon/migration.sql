-- AlterTable
ALTER TABLE `User` MODIFY `role` ENUM('ADMIN', 'USER') NOT NULL DEFAULT 'USER';

-- CreateTable
CREATE TABLE `DiscountCoupon` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT false,
    `discountPercentage` INTEGER NOT NULL,

    UNIQUE INDEX `DiscountCoupon_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
