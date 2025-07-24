import prisma from '../prismaClient.js';

// Obtener todos los pagos a bancos
export const obtenerPagosBancos = async (req, res) => {
  try {
    const pagos = await prisma.pagosBancos.findMany({
      include: {
        usuario: {
          select: { id: true, nombre: true, correo: true }
        }
      }
    });
    res.json(pagos);
  } catch (error) {
    console.error('Error al obtener pagos:', error);
    res.status(500).json({ error: 'Error al obtener pagos de bancos' });
  }
};

// Crear un nuevo pago a banco
export const crearPagoBanco = async (req, res) => {
  console.log("REQ BODY:", req.body); // 👈 Agrega esto
  const {
    NombreBeneficiario,
    NumeroCuenta,
    MontoTotal,
    ReferenciaPago,
    tipoCuenta,
    banco,
    metodoPago,
    usuarioId
  } = req.body;

  try {
    const nuevoPago = await prisma.pagosBancos.create({
      data: {
        NombreBeneficiario,
        NumeroCuenta,
        MontoTotal,
        ReferenciaPago,
        tipoCuenta,
        banco,
        metodoPago,
        usuario: { connect: { id: usuarioId } }
      }
    });
    res.status(201).json(nuevoPago);
  } catch (error) {
    console.error('Error al crear el pago:', error);
    res.status(500).json({ error: 'Error al crear el pago de banco' });
  }
};


// Actualizar un pago
export const actualizarPagoBanco = async (req, res) => {
  const { id } = req.params;
  const {
    NombreBeneficiario,
    NumeroCuenta,
    MontoTotal,
    ReferenciaPago,
    tipoCuenta,
    banco,
    metodoPago
  } = req.body;

  try {
    const pagoActualizado = await prisma.pagosBancos.update({
      where: { id: parseInt(id) },
      data: {
        NombreBeneficiario,
        NumeroCuenta,
        MontoTotal,
        ReferenciaPago,
        tipoCuenta,
        banco,
        metodoPago
      }
    });
    res.json(pagoActualizado);
  } catch (error) {
    console.error('Error al actualizar el pago:', error);
    res.status(500).json({ error: 'Error al actualizar el pago de banco' });
  }
};
