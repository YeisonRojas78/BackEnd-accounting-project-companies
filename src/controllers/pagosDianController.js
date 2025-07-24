import prisma from '../prismaClient.js';

// Obtener todos los pagos a DIAN
export const getPagosDian = async (req, res) => {
  try {
    const pagos = await prisma.pagosDian.findMany({
      include: {
        usuario: {
          select: { id: true, nombre: true, correo: true }
        }
      }
    });
    res.json(pagos);
  } catch (error) {
    console.error('Error al obtener los pagos a DIAN:', error);
    res.status(500).json({ error: 'Error al obtener los pagos a DIAN' });
  }
};

// Crear un nuevo pago DIAN
export const createPagoDian = async (req, res) => {
  console.log("REQ.BODY RECIBIDO:", req.body);
  const {
    tipoImpuesto,
    referencia,
    valor,
    fecha,
    metodo,
    comprobante,
    usuarioId
  } = req.body;

  try {
    const nuevoPago = await prisma.pagosDian.create({
      data: {
        tipoImpuesto,
        NumeroReferencia: referencia,
        MontoTotal: parseFloat(valor),
        FechaPago: new Date(fecha),
        metodoPago: metodo,
        ComprobantePago: comprobante,
        usuarioId
      }
    });
    res.status(201).json(nuevoPago);
  } catch (error) {
    console.error('Error al crear el pago a DIAN:', error);
    res.status(500).json({ error: 'Error al crear el pago a DIAN' });
  }
};

// Actualizar pago DIAN
export const updatePagoDian = async (req, res) => {
  const { id } = req.params;
  const {
    tipoImpuesto,
    referencia,
    valor,
    fecha,
    metodo,
    comprobante,
    usuarioId
  } = req.body;

  try {
    const pagoActualizado = await prisma.pagosDian.update({
      where: { id: parseInt(id) },
      data: {
        tipoImpuesto,
        NumeroReferencia: referencia,
        MontoTotal: parseFloat(valor),
        FechaPago: new Date(fecha),
        metodoPago: metodo,
        ComprobantePago: comprobante,
        usuarioId
      }
    });
    res.json(pagoActualizado);
  } catch (error) {
    console.error('Error al actualizar el pago a DIAN:', error);
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
    console.error('Error al eliminar el pago a DIAN:', error);
    res.status(500).json({ error: 'Error al eliminar el pago a DIAN' });
  }
};
