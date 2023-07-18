const { Router } = require("express");
const { uploadCountries, getCountries, countriesById } = require("../controllers/countries");
const { createActivities, getActivities } = require("../controllers/activities");

const router = Router();

router.get('/countries/:idPais', countriesById)

router.get('/uploadCountries', uploadCountries)

router.get('/countries', getCountries)

router.post('/activities', createActivities)

router.get('/activities', getActivities)



module.exports = router;
