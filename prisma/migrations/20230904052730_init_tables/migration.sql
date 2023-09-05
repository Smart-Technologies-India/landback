-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `password` VARCHAR(191) NOT NULL,
    `contact` VARCHAR(191) NULL,
    `pic_url` VARCHAR(191) NULL,
    `department` ENUM('NONE', 'PDA', 'EOCS', 'LANDSECTION', 'MAMLATDAR', 'COLLECTOR', 'DYCOLLECTOR') NOT NULL DEFAULT 'NONE',
    `role` ENUM('NONE', 'SYSTEM', 'ADMIN', 'COLLECTOR', 'DYCOLLECTOR', 'SUPERITENDANT', 'HEADCLERK', 'MAMLATDAR', 'ATP', 'CITYSURVEY', 'COURTCLERK', 'USER') NOT NULL DEFAULT 'NONE',
    `otp` VARCHAR(191) NULL,
    `status` ENUM('NONE', 'ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'NONE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `village` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `survey` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `villageId` INTEGER NOT NULL,
    `survey_no` VARCHAR(191) NOT NULL,
    `sub_division` VARCHAR(191) NULL,
    `owner_name` VARCHAR(191) NOT NULL,
    `area` VARCHAR(191) NOT NULL,
    `zone` VARCHAR(191) NULL,
    `status` ENUM('NONE', 'ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'NONE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `query` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `stage` ENUM('NONE', 'SALE', 'GIFT', 'PARTITION', 'MORTGAGE', 'NA', 'SUBDIVISON', 'AMALGAMATION', 'LEASE', 'COURT', 'RTI', 'GRANTGOVTLAND', 'ACQUISITION') NOT NULL DEFAULT 'NONE',
    `form_id` INTEGER NOT NULL,
    `form_status` INTEGER NOT NULL,
    `to_user_id` INTEGER NOT NULL,
    `from_user_id` INTEGER NOT NULL,
    `query_type` ENUM('NONE', 'INTRA', 'INTER', 'PUBLIC') NOT NULL DEFAULT 'NONE',
    `doc_url` VARCHAR(191) NULL,
    `remark` VARCHAR(191) NOT NULL,
    `query_status` ENUM('NONE', 'SENT', 'RECEIVED', 'REPLIED', 'RESOLVED') NOT NULL DEFAULT 'NONE',
    `status` ENUM('NONE', 'ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'NONE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `common` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `form_type` ENUM('NONE', 'SALE', 'GIFT', 'PARTITION', 'MORTGAGE', 'NA', 'SUBDIVISON', 'AMALGAMATION', 'LEASE', 'COURT', 'RTI', 'GRANTGOVTLAND', 'ACQUISITION') NOT NULL DEFAULT 'NONE',
    `form_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,
    `auth_user_id` VARCHAR(191) NULL,
    `focal_user_id` VARCHAR(191) NULL,
    `intra_user_id` VARCHAR(191) NULL,
    `inter_user_id` VARCHAR(191) NULL,
    `village` VARCHAR(191) NULL,
    `name` VARCHAR(191) NOT NULL,
    `number` VARCHAR(191) NOT NULL,
    `form_status` INTEGER NULL,
    `query_status` ENUM('NONE', 'SUBMIT', 'INPROCESS', 'QUERYRAISED', 'APPROVED', 'REJECTED', 'PAYMENTPENDING', 'CERTIFICATEGRANT', 'COMPLETED') NOT NULL DEFAULT 'NONE',
    `status` ENUM('NONE', 'ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'NONE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rti_form` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `user_uid` VARCHAR(191) NULL,
    `name` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `mobile` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `subject_info` VARCHAR(191) NULL,
    `from_date` DATETIME(3) NULL,
    `to_date` DATETIME(3) NULL,
    `description` VARCHAR(191) NULL,
    `information` VARCHAR(191) NULL,
    `proverty_line_url` VARCHAR(191) NULL,
    `iagree` ENUM('NONE', 'YES', 'NO') NOT NULL DEFAULT 'NONE',
    `remarks` VARCHAR(191) NULL,
    `signature_url` VARCHAR(191) NULL,
    `attachments` JSON NULL,
    `rejection_reason` VARCHAR(191) NULL,
    `certificate_id` VARCHAR(191) NULL,
    `certificate_date` DATETIME(3) NULL,
    `certificate_url` VARCHAR(191) NULL,
    `comments_dept` VARCHAR(191) NULL,
    `condition_to_follow` VARCHAR(191) NULL,
    `status` ENUM('NONE', 'ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'NONE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `na_form` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `user_uid` VARCHAR(191) NULL,
    `name` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `mobile` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `scst` ENUM('NONE', 'GENERAL', 'ST', 'SC', 'OTHER') NOT NULL DEFAULT 'NONE',
    `occupation` VARCHAR(191) NULL,
    `govt_employee` VARCHAR(191) NULL,
    `village_id` INTEGER NULL,
    `survey_no` VARCHAR(191) NULL,
    `sub_division` VARCHAR(191) NULL,
    `land_use` VARCHAR(191) NULL,
    `land_situate` VARCHAR(191) NULL,
    `electric` VARCHAR(191) NULL,
    `road_access` VARCHAR(191) NULL,
    `road_adjoin` VARCHAR(191) NULL,
    `na_reason` VARCHAR(191) NULL,
    `addition_land` VARCHAR(191) NULL,
    `past_appln_reject` VARCHAR(191) NULL,
    `agri_evidence_url` VARCHAR(191) NULL,
    `govt_evidence_url` VARCHAR(191) NULL,
    `land_purpose` ENUM('NONE', 'RESIDENTIAL', 'COMMERCIAL', 'INDUSTRIAL', 'RESIDENTIALCUMCOMMERCIAL') NOT NULL DEFAULT 'NONE',
    `land_site_plan_url` VARCHAR(191) NULL,
    `nakel_url_1_14` VARCHAR(191) NULL,
    `nakel_rr_14` VARCHAR(191) NULL,
    `iagree` ENUM('NONE', 'YES', 'NO') NOT NULL DEFAULT 'NONE',
    `remarks` VARCHAR(191) NULL,
    `signature_url` VARCHAR(191) NULL,
    `rejection_reason` VARCHAR(191) NULL,
    `certificate_id` VARCHAR(191) NULL,
    `certificate_date` DATETIME(3) NULL,
    `certificate_url` VARCHAR(191) NULL,
    `comments_dept` VARCHAR(191) NULL,
    `condition_to_follow` VARCHAR(191) NULL,
    `status` ENUM('NONE', 'ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'NONE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `gift_form` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `user_uid` VARCHAR(191) NULL,
    `name` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `mobile` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `occupation` VARCHAR(191) NULL,
    `scst` ENUM('NONE', 'GENERAL', 'ST', 'SC', 'OTHER') NOT NULL DEFAULT 'NONE',
    `govt_employee` VARCHAR(191) NULL,
    `village_id` INTEGER NULL,
    `survey_no` VARCHAR(191) NULL,
    `sub_division` VARCHAR(191) NULL,
    `land_use` VARCHAR(191) NULL,
    `land_situate` VARCHAR(191) NULL,
    `electric` VARCHAR(191) NULL,
    `road_access` VARCHAR(191) NULL,
    `land_acq` VARCHAR(191) NULL,
    `gift_reason` VARCHAR(191) NULL,
    `addition_land` VARCHAR(191) NULL,
    `name_donee` VARCHAR(191) NULL,
    `address_donee` VARCHAR(191) NULL,
    `agri_evidence_url` VARCHAR(191) NULL,
    `govt_evidence_url` VARCHAR(191) NULL,
    `past_appln_reject` VARCHAR(191) NULL,
    `land_site_plan_url` VARCHAR(191) NULL,
    `nakel_url_1_14` VARCHAR(191) NULL,
    `iagree` ENUM('NONE', 'YES', 'NO') NOT NULL DEFAULT 'NONE',
    `remarks` VARCHAR(191) NULL,
    `signature_url` VARCHAR(191) NULL,
    `rejection_reason` VARCHAR(191) NULL,
    `certificate_id` VARCHAR(191) NULL,
    `certificate_date` DATETIME(3) NULL,
    `certificate_url` VARCHAR(191) NULL,
    `comments_dept` VARCHAR(191) NULL,
    `condition_to_follow` VARCHAR(191) NULL,
    `status` ENUM('NONE', 'ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'NONE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sale_form` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `user_uid` VARCHAR(191) NULL,
    `name` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `mobile` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `occupation` VARCHAR(191) NULL,
    `scst` ENUM('NONE', 'GENERAL', 'ST', 'SC', 'OTHER') NOT NULL DEFAULT 'NONE',
    `govt_employee` VARCHAR(191) NULL,
    `village_id` INTEGER NULL,
    `survey_no` VARCHAR(191) NULL,
    `sub_division` VARCHAR(191) NULL,
    `land_use` VARCHAR(191) NULL,
    `land_situate` VARCHAR(191) NULL,
    `electric` VARCHAR(191) NULL,
    `road_access` VARCHAR(191) NULL,
    `land_acq` VARCHAR(191) NULL,
    `sale_reason` VARCHAR(191) NULL,
    `addition_land` VARCHAR(191) NULL,
    `name_purchaser` VARCHAR(191) NULL,
    `address_purchaser` VARCHAR(191) NULL,
    `agri_evidence_url` VARCHAR(191) NULL,
    `govt_evidence_url` VARCHAR(191) NULL,
    `past_appln_reject` VARCHAR(191) NULL,
    `land_site_plan_url` VARCHAR(191) NULL,
    `nakel_url_1_14` VARCHAR(191) NULL,
    `iagree` ENUM('NONE', 'YES', 'NO') NOT NULL DEFAULT 'NONE',
    `remarks` VARCHAR(191) NULL,
    `signature_url` VARCHAR(191) NULL,
    `rejection_reason` VARCHAR(191) NULL,
    `certificate_id` VARCHAR(191) NULL,
    `certificate_date` DATETIME(3) NULL,
    `certificate_url` VARCHAR(191) NULL,
    `comments_dept` VARCHAR(191) NULL,
    `condition_to_follow` VARCHAR(191) NULL,
    `status` ENUM('NONE', 'ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'NONE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `partition_form` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `user_uid` VARCHAR(191) NULL,
    `name` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `mobile` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `village_id` INTEGER NULL,
    `survey_no` VARCHAR(191) NULL,
    `sub_division` VARCHAR(191) NULL,
    `prev_application_date` DATETIME(3) NULL,
    `prev_application_number` VARCHAR(191) NULL,
    `information_needed` VARCHAR(191) NULL,
    `iagree` ENUM('NONE', 'YES', 'NO') NOT NULL DEFAULT 'NONE',
    `remarks` VARCHAR(191) NULL,
    `aadhar_url` VARCHAR(191) NULL,
    `signature_url` VARCHAR(191) NULL,
    `attachments` JSON NULL,
    `rejection_reason` VARCHAR(191) NULL,
    `certificate_id` VARCHAR(191) NULL,
    `certificate_date` DATETIME(3) NULL,
    `certificate_url` VARCHAR(191) NULL,
    `comments_dept` VARCHAR(191) NULL,
    `condition_to_follow` VARCHAR(191) NULL,
    `status` ENUM('NONE', 'ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'NONE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sd_form` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `user_uid` VARCHAR(191) NULL,
    `name` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `mobile` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `village_id` INTEGER NULL,
    `survey_no` VARCHAR(191) NULL,
    `sub_division` VARCHAR(191) NULL,
    `prev_application_date` DATETIME(3) NULL,
    `prev_application_number` VARCHAR(191) NULL,
    `information_needed` VARCHAR(191) NULL,
    `iagree` ENUM('NONE', 'YES', 'NO') NOT NULL DEFAULT 'NONE',
    `remarks` VARCHAR(191) NULL,
    `aadhar_url` VARCHAR(191) NULL,
    `signature_url` VARCHAR(191) NULL,
    `attachments` JSON NULL,
    `rejection_reason` VARCHAR(191) NULL,
    `certificate_id` VARCHAR(191) NULL,
    `certificate_date` DATETIME(3) NULL,
    `certificate_url` VARCHAR(191) NULL,
    `comments_dept` VARCHAR(191) NULL,
    `condition_to_follow` VARCHAR(191) NULL,
    `status` ENUM('NONE', 'ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'NONE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `dealing_hand` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `file_type` ENUM('NONE', 'SALE', 'GIFT', 'PARTITION', 'MORTGAGE', 'NA', 'SUBDIVISON', 'AMALGAMATION', 'LEASE', 'COURT', 'RTI', 'GRANTGOVTLAND', 'ACQUISITION') NOT NULL DEFAULT 'NONE',
    `collector` BOOLEAN NOT NULL DEFAULT false,
    `dycollector` BOOLEAN NOT NULL DEFAULT false,
    `suptd` BOOLEAN NOT NULL DEFAULT false,
    `headclerk` BOOLEAN NOT NULL DEFAULT false,
    `mamlatdar` BOOLEAN NOT NULL DEFAULT false,
    `eocs` BOOLEAN NOT NULL DEFAULT false,
    `dept1` BOOLEAN NOT NULL DEFAULT false,
    `dept2` BOOLEAN NOT NULL DEFAULT false,
    `dept3` BOOLEAN NOT NULL DEFAULT false,
    `dept4` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `payment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `form_type` ENUM('NONE', 'SALE', 'GIFT', 'PARTITION', 'MORTGAGE', 'NA', 'SUBDIVISON', 'AMALGAMATION', 'LEASE', 'COURT', 'RTI', 'GRANTGOVTLAND', 'ACQUISITION') NOT NULL DEFAULT 'NONE',
    `form_id` INTEGER NOT NULL,
    `deptuser_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,
    `type1` INTEGER NULL,
    `amount1` INTEGER NULL,
    `type2` INTEGER NULL,
    `amount2` INTEGER NULL,
    `type3` INTEGER NULL,
    `amount3` INTEGER NULL,
    `daycount` INTEGER NULL,
    `paymentamout` INTEGER NULL,
    `reference` VARCHAR(191) NULL,
    `paymentType` ENUM('NONE', 'CASH', 'CHEQUE', 'NETBANKING', 'CCDC', 'UPI') NOT NULL DEFAULT 'NONE',
    `paymentstatus` ENUM('NONE', 'PENDING', 'PAID') NOT NULL DEFAULT 'NONE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `survey` ADD CONSTRAINT `survey_villageId_fkey` FOREIGN KEY (`villageId`) REFERENCES `village`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `query` ADD CONSTRAINT `query_to_user_id_fkey` FOREIGN KEY (`to_user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `query` ADD CONSTRAINT `query_from_user_id_fkey` FOREIGN KEY (`from_user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `common` ADD CONSTRAINT `common_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `rti_form` ADD CONSTRAINT `rti_form_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `na_form` ADD CONSTRAINT `na_form_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `na_form` ADD CONSTRAINT `na_form_village_id_fkey` FOREIGN KEY (`village_id`) REFERENCES `village`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `gift_form` ADD CONSTRAINT `gift_form_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `gift_form` ADD CONSTRAINT `gift_form_village_id_fkey` FOREIGN KEY (`village_id`) REFERENCES `village`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sale_form` ADD CONSTRAINT `sale_form_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sale_form` ADD CONSTRAINT `sale_form_village_id_fkey` FOREIGN KEY (`village_id`) REFERENCES `village`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `partition_form` ADD CONSTRAINT `partition_form_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `partition_form` ADD CONSTRAINT `partition_form_village_id_fkey` FOREIGN KEY (`village_id`) REFERENCES `village`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sd_form` ADD CONSTRAINT `sd_form_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sd_form` ADD CONSTRAINT `sd_form_village_id_fkey` FOREIGN KEY (`village_id`) REFERENCES `village`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `payment` ADD CONSTRAINT `payment_deptuser_id_fkey` FOREIGN KEY (`deptuser_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `payment` ADD CONSTRAINT `payment_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
