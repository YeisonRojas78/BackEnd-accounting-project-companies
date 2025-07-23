import prisma from '../prismaClient.js';

// Obtener todos los pagos a DIAN
export const getPagosDian = async (req, res) => {
  try {
    const pagos = await prisma.pagosDian.findMany({
      include: {
        tipoImpuesto: true,
        metodoPago: true,
        usuario: true
      }
    });
    res.json(pagos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los pagos a DIAN' });
  }
};

// Crear un nuevo pago DIAN
export const createPagoDian = async (req, res) => {
  const { numeroReferencia, montoTotal, fechaPago, comprobantePago, tipoImpuestoId, metodoPagoId, usuarioId } = req.body;
  try {
    const nuevoPago = await prisma.pagosDian.create({
      data: {
        numeroReferencia,
        montoTotal: parseFloat(montoTotal),
        fechaPago: new Date(fechaPago),
        comprobantePago,
        tipoImpuestoId,
        metodoPagoId,
        usuarioId
      }
    });
    res.json(nuevoPago);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el pago a DIAN' });
  }
};

// Actualizar pago DIAN
export const updatePagoDian = async (req, res) => {
  const { id } = req.params;
  const { numeroReferencia, montoTotal, fechaPago, comprobantePago, tipoImpuestoId, metodoPagoId, usuarioId } = req.body;
  try {
    const pagoActualizado = await prisma.pagosDian.update({
      where: { id: parseInt(id) },
      data: {
        numeroReferencia,
        montoTotal: parseFloat(montoTotal),
        fechaPago: new Date(fechaPago),
        comprobantePago,
        tipoImpuestoId,
        metodoPagoId,
        usuarioId
      }
    });
    res.json(pagoActualizado);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el pago a DIAN' });
  }
};

// Eliminar pago DIAN
export const deletePagoDian = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.pagosDian.delete({
      where: { id: parseInt(id) }
    });
    res.json({ message: 'Pago a DIAN eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el pago a DIAN' });
  }
};

