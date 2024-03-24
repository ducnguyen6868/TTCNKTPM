const express= require("express");
const adminControllers= require('../app/controllers/adminControllers');
const router =  express.Router();
//Ruta para el inicio de sesion
router.get('/',adminControllers.hompage);
module.exports = router;