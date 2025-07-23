import prisma from '../prismaClient.js';

export const obtenerPagosBancos = async (req, res) => {
  try {
    const pagos = await prisma.pagosBancos.findMany({
      include: {
        tipoCuenta: true,
        banco: true,
        metodoPago: true,
        usuario: true,
      }
    });
    res.json(pagos);
  } catch (error) {
    console.error('Error al obtener pagos:', error);
    res.status(500).json({ error: 'Error al obtener pagos de bancos' });
  }
};

export const crearPagoBanco = async (req, res) => {
  const {
    NombreBeneficiario,
    NumeroCuenta,
    MontoTotal,
    ReferenciaPago,
    TipoCuenta_id,
    Bancos_id,
    MetodoPago_id,
    Usuario_id
  } = req.body;

  try {
    const nuevoPago = await prisma.pagosBancos.create({
      data: {
        NombreBeneficiario,
        NumeroCuenta,
        MontoTotal,
        ReferenciaPago,
        tipoCuenta: { connect: { id: TipoCuenta_id } },
        banco: { connect: { id: Bancos_id } },
        metodoPago: { connect: { id: MetodoPago_id } },
        usuario: { connect: { id: Usuario_id } },
      }
    });
    res.status(201).json(nuevoPago);
  } catch (error) {
    console.error('Error al crear el pago:', error);
    res.status(500).json({ error: 'Error al crear el pago de banco' });
  }
};

export const eliminarPagoBanco = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.pagosBancos.delete({ where: { id: parseInt(id) } });
    res.json({ message: 'Pago eliminado correctamente' });
  } catch (error) {
    console.error('Error al eliminar el pago:', error);
    res.status(500).json({ error: 'Error al eliminar el pago de banco' });
  }
};

export const actualizarPagoBanco = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const pagoActualizado = await prisma.pagosBancos.update({
      where: { id: parseInt(id) },
      data
    });
    res.json(pagoActualizado);
  } catch (error) {
    console.error('Error al actualizar el pago:', error);
    res.status(500).json({ error: 'Error al actualizar el pago de banco' });
  }
};
