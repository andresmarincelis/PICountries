const { Activities, Country } = require('../db')

const createActivities = async (req, res) => {
    try {
        const { name, dificultad, duracion, temporada, pais } = req.body;

        const newActivity = {
            name: name,
            dificultad: dificultad,
            duracion: duracion,
            temporada: temporada,
        }

        const activity = await Activities.create(newActivity)
        for (let i = 0; i < pais.length; i++) {
            const findCountry = await Country.findByPk(pais[i])


            await findCountry.addActivities(activity.id)
        }
        res.send(activity)
    } catch (error) {
        res.status(400).send(error)
    }
}

const getActivities = async (req, res) => {
    try {
        const activity = await Activities.findAll()
        res.send(activity)
    } catch (error) {
        console.log(error);
    }
}

module.exports = { createActivities, getActivities }