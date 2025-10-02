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

module.exports = {
    // Agregar las funciones del controlador aquí
    getTodosAiresAcondicionados,
    getAireAcondicionadoPorId
}