const AireAcondicionado = require('../model/aireAcondicionado.model.js');

const getTodosAiresAcondicionados = async (req, res) => {
    try {
        const aires = await AireAcondicionado.findAll();

        if (aires.length === 0) {
            return res.status(404).json({ message: 'No se encontraron aires acondicionados' });
        }

        res.status(200).json(aires);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener aires acondicionados' });
    }
}

const getAireAcondicionadoPorId = async (req, res) => {
    try {
        const aire = await AireAcondicionado.findByPk(req.params.id);

        if (!aire) {
            return res.status(404).json({ message: 'No se encontró Aire Acondicionado con ese ID' });
        }

        res.status(200).json(aire);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el aire acondicionado' });
    }
}

const crearAireAcondicionado = async (req, res) => {
    try {
        console.log(req.body);
        const nuevoAire = await AireAcondicionado.create(req.body);
        res.status(201).json(nuevoAire);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el aire acondicionado', details: error.message });
    }
}

const eliminarAireAcondicionadoById = async (req, res) => {
    try {
        const aireEliminado = await AireAcondicionado.destroy({
            where: { id_aire_acondicionado: req.params.id }
        });

        if (aireEliminado) {
            res.status(200).json({ message: 'Aire acondicionado eliminado correctamente' });
        } else {
            res.status(404).json({ message: 'No se encontró Aire Acondicionado con ese ID' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el aire acondicionado', details: error.message });
    }
}

const actualizarEstadoAireAcondicionado = async (req, res) => {
    try {
        const { disponible } = req.body; // se espera true o false

        const aire = await AireAcondicionado.findByPk(req.params.id);
        if (!aire) {
            return res.status(404).json({ message: "Aire acondicionado no encontrado" });
        }

        aire.disponible = disponible;
        await aire.save();

        res.status(200).json({ message: "Estado actualizado correctamente", aire });
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar el estado", details: error.message });
    }
}

const actualizarStockAireAcondicionado = async (req, res) => {
    try {
        const { stock } = req.body; // nuevo valor de stock

        const aire = await AireAcondicionado.findByPk(req.params.id);
        if (!aire) {
            return res.status(404).json({ message: "Aire acondicionado no encontrado" });
        }

        aire.stock = stock;
        await aire.save();

        res.status(200).json({ message: "Stock actualizado correctamente", aire });
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar el stock", details: error.message });
    }
}
const actualizarAireAcondicionadoById = async (req, res) => {
    try {
        const aireActualizado = await AireAcondicionado.update(req.body, {
            where: { id_aire_acondicionado: req.params.id }
        });

        if (aireActualizado[0] > 0) {
            res.status(200).json({ message: 'Aire acondicionado actualizado correctamente' });
        } else {
            res.status(404).json({ message: 'No se encontró Aire Acondicionado con ese ID' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el aire acondicionado', details: error.message });
    }
}

module.exports = {
    // Agregar las funciones del controlador aquí
    getTodosAiresAcondicionados,
    getAireAcondicionadoPorId,
    crearAireAcondicionado,
    eliminarAireAcondicionadoById,
    actualizarEstadoAireAcondicionado,
    actualizarStockAireAcondicionado,
    actualizarAireAcondicionadoById
}