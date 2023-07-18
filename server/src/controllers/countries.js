const { Op } = require('sequelize');
const URL = "http://localhost:5000/countries";
const axios = require('axios');
const { Country, Activities } = require('../db');


const uploadCountries = async (req, res) => {
    try {
        const response = await axios.get(URL)
        const data = response.data;

        for (let i = 0; i < data.length; i++) {
            const newCountry = {
                id: data[i].cca3,
                name: data[i].name.common,
                bandera: data[i].flags.png,
                continente: data[i].continents[0],
                capital: data[i].capital ? data[i].capital[0] : data[i].name.common,
                subregion: data[i].subregion,
                area: data[i].area,
                poblacion: data[i].population,
            }
            await Country.create(newCountry)
        }
        res.send("Agregados!")
    } catch (error) {
        console.log(error);
    }
}

const getCountries = async (req, res) => {
    try {
        const { name } = req.query;
        let allCountries;
        if (!name) {

            allCountries = await Country.findAll({

                include: [
                    {
                        model: Activities,
                        attributes: [
                            "name"
                        ]
                    }
                ]
            });

        } else {

            allCountries = await Country.findAll({

                where: {
                    name: {
                        [Op.iLike]: `%${name}%`
                    }
                },
                include: [
                    {
                        model: Activities,
                        attributes: [
                            "name"
                        ]
                    }
                ]
            });
        }

        const countriesAct = allCountries.map((element) => {
            const arrayActividades = element.Activities.map((actividad) => {
                return actividad.name
            })
            return {
                id: element.id,
                name: element.name,
                bandera: element.bandera,
                continente: element.continente,
                capital: element.capital,
                subregion: element.subregion,
                area: element.area,
                poblacion: element.poblacion,
                actividades: arrayActividades
            }
        })
        return res.send(countriesAct)
    } catch (error) {
        console.log(error);
    }
}

const countriesById = async (req, res) => {
    try {
        const { idPais } = req.params;
        const country = await Country.findOne({
            where: {
                id: {
                    [Op.iLike]: `%${idPais}%`
                }
            }
        });
        res.send(country)
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    countriesById,
    getCountries,
    uploadCountries
}

