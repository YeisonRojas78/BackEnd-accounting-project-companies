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
  const { nombre, usuario, contraseña, correo, estado, fk_rol } = req.body;

  try {
    const nuevoUsuario = await prisma.usuario.create({
      data: {
        nombre,
        usuario,
        contraseña,
        correo,
        estado,
        fk_rol,
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
    await prisma.usuario.delete({
      where: { id: parseInt(id) },
    });
    res.json({ mensaje: 'Usuario eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar usuario' });
  }
};
