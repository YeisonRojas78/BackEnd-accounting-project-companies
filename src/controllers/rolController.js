import prisma from '../prismaClient.js';

export const getRoles = async (req, res) => {
  try {
    const roles = await prisma.rol.findMany();
    res.json(roles);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener roles' });
  }
};

export const createRol = async (req, res) => {
  const { nombreRol } = req.body;

  try {
    const nuevoRol = await prisma.rol.create({
      data: { nombreRol },
    });
    res.status(201).json(nuevoRol);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear rol' });
  }
};

export const updateRol = async (req, res) => {
  const { id } = req.params;
  const { nombreRol } = req.body;

  try {
    const rolActualizado = await prisma.rol.update({
      where: { id: parseInt(id) },
      data: { nombreRol },
    });
    res.json(rolActualizado);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar rol' });
  }
};

export const deleteRol = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.rol.delete({
      where: { id: parseInt(id) },
    });
    res.json({ mensaje: 'Rol eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar rol' });
  }
};
