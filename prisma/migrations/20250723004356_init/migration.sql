-- CreateTable
CREATE TABLE "PagosBancos" (
    "id" SERIAL NOT NULL,
    "NombreBeneficiario" TEXT NOT NULL,
    "NumeroCuenta" TEXT NOT NULL,
    "MontoTotal" DOUBLE PRECISION NOT NULL,
    "ReferenciaPago" TEXT NOT NULL,
    "tipoCuentaId" INTEGER NOT NULL,
    "bancoId" INTEGER NOT NULL,
    "metodoPagoId" INTEGER NOT NULL,
    "usuarioId" INTEGER NOT NULL,

    CONSTRAINT "PagosBancos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PagosDian" (
    "id" SERIAL NOT NULL,
    "NumeroReferencia" TEXT NOT NULL,
    "MontoTotal" DOUBLE PRECISION NOT NULL,
    "FechaPago" TIMESTAMP(3) NOT NULL,
    "ComprobantePago" TEXT NOT NULL,
    "tipoImpuestoId" INTEGER NOT NULL,
    "metodoPagoId" INTEGER NOT NULL,
    "usuarioId" INTEGER NOT NULL,

    CONSTRAINT "PagosDian_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TipoCuenta" (
    "id" SERIAL NOT NULL,
    "TipoCuenta" TEXT NOT NULL,

    CONSTRAINT "TipoCuenta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TipoImpuesto" (
    "id" SERIAL NOT NULL,
    "TipoImpuesto" TEXT NOT NULL,

    CONSTRAINT "TipoImpuesto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bancos" (
    "id" SERIAL NOT NULL,
    "NombreBanco" TEXT NOT NULL,

    CONSTRAINT "Bancos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MetodoPago" (
    "id" SERIAL NOT NULL,
    "MetodoPago" TEXT NOT NULL,

    CONSTRAINT "MetodoPago_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rol" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Rol_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "clave" TEXT NOT NULL,
    "rolId" INTEGER NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_correo_key" ON "Usuario"("correo");

-- AddForeignKey
ALTER TABLE "PagosBancos" ADD CONSTRAINT "PagosBancos_tipoCuentaId_fkey" FOREIGN KEY ("tipoCuentaId") REFERENCES "TipoCuenta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PagosBancos" ADD CONSTRAINT "PagosBancos_bancoId_fkey" FOREIGN KEY ("bancoId") REFERENCES "Bancos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PagosBancos" ADD CONSTRAINT "PagosBancos_metodoPagoId_fkey" FOREIGN KEY ("metodoPagoId") REFERENCES "MetodoPago"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PagosBancos" ADD CONSTRAINT "PagosBancos_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PagosDian" ADD CONSTRAINT "PagosDian_tipoImpuestoId_fkey" FOREIGN KEY ("tipoImpuestoId") REFERENCES "TipoImpuesto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PagosDian" ADD CONSTRAINT "PagosDian_metodoPagoId_fkey" FOREIGN KEY ("metodoPagoId") REFERENCES "MetodoPago"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PagosDian" ADD CONSTRAINT "PagosDian_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_rolId_fkey" FOREIGN KEY ("rolId") REFERENCES "Rol"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
