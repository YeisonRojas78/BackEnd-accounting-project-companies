import prisma from '../prismaClient.js';

export const getUsuarios = async (req, res) => {
  try {
    const usuarios = await prisma.usuario.findMany({
      include: { rol: true },
    });
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
};

export const createUsuario = async (req, res) => {
  const { nombre, correo, clave, rolId } = req.body;

  try {
    const nuevoUsuario = await prisma.usuario.create({
      data: {
        nombre,
        correo,
        clave,
        rolId,
      },
    });
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear usuario' });
  }
};

export const updateUsuario = async (req, res) => {
  const { id } = req.params;
  const datos = req.body;

  try {
    const usuarioActualizado = await prisma.usuario.update({
      where: { id: parseInt(id) },
      data: datos,
    });
    res.json(usuarioActualizado);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar usuario' });
  }
};

export const deleteUsuario = async (req, res) => {
  const { id } = req.params;

  try {
    const userId = parseInt(id);

    // Eliminar pagos relacionados primero
    await prisma.pagosBancos.deleteMany({ where: { usuarioId: userId } });
    await prisma.pagosDian.deleteMany({ where: { usuarioId: userId } });

    // Eliminar el usuario
    await prisma.usuario.delete({
      where: { id: userId },
    });

    res.json({ mensaje: 'Usuario eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar usuario' });
  }
};