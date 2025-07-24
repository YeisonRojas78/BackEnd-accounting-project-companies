/*
  Warnings:

  - You are about to drop the column `bancoId` on the `PagosBancos` table. All the data in the column will be lost.
  - You are about to drop the column `metodoPagoId` on the `PagosBancos` table. All the data in the column will be lost.
  - You are about to drop the column `tipoCuentaId` on the `PagosBancos` table. All the data in the column will be lost.
  - You are about to drop the column `metodoPagoId` on the `PagosDian` table. All the data in the column will be lost.
  - You are about to drop the column `tipoImpuestoId` on the `PagosDian` table. All the data in the column will be lost.
  - You are about to drop the `Bancos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MetodoPago` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TipoCuenta` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TipoImpuesto` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `banco` to the `PagosBancos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `metodoPago` to the `PagosBancos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipoCuenta` to the `PagosBancos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `metodoPago` to the `PagosDian` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipoImpuesto` to the `PagosDian` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PagosBancos" DROP CONSTRAINT "PagosBancos_bancoId_fkey";

-- DropForeignKey
ALTER TABLE "PagosBancos" DROP CONSTRAINT "PagosBancos_metodoPagoId_fkey";

-- DropForeignKey
ALTER TABLE "PagosBancos" DROP CONSTRAINT "PagosBancos_tipoCuentaId_fkey";

-- DropForeignKey
ALTER TABLE "PagosDian" DROP CONSTRAINT "PagosDian_metodoPagoId_fkey";

-- DropForeignKey
ALTER TABLE "PagosDian" DROP CONSTRAINT "PagosDian_tipoImpuestoId_fkey";

-- AlterTable
ALTER TABLE "PagosBancos" DROP COLUMN "bancoId",
DROP COLUMN "metodoPagoId",
DROP COLUMN "tipoCuentaId",
ADD COLUMN     "banco" TEXT NOT NULL,
ADD COLUMN     "metodoPago" TEXT NOT NULL,
ADD COLUMN     "tipoCuenta" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "PagosDian" DROP COLUMN "metodoPagoId",
DROP COLUMN "tipoImpuestoId",
ADD COLUMN     "metodoPago" TEXT NOT NULL,
ADD COLUMN     "tipoImpuesto" TEXT NOT NULL;

-- DropTable
DROP TABLE "Bancos";

-- DropTable
DROP TABLE "MetodoPago";

-- DropTable
DROP TABLE "TipoCuenta";

-- DropTable
DROP TABLE "TipoImpuesto";
