const express = require("express");
const model = require("../models/scores");
const ScoreController = {};

// Add a score
ScoreController.addScore = async (req, res) => {
  const data = req.body;
  try {
    const newScore = await model.create(data);
    res.send({ score: newScore });
  } catch (error) {
    res.send(error.message);
  }
};

//Get scores
ScoreController.getScores = async (req, res) => {
  try {
    const docs = await model.find({}).sort({ score: -1 });
    res.send({ docs });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

// // Login
// UserController.login = async(req,res) => {
//     try {
//         // Busco un usuario que coincida con el username que viene en la request
//         console.log(`Buscando usuario existente...`);
//         const user = await new getRepository(User).findOne({where: {userName: req.body.username}, select: ["id", "userName", "password"], relations: ["rol"]})
//         // Chequea que el encuentre un usuario
//         if (user === undefined || user.length <= 0) {
//             // Si no encuentra => Devuelve error al usuario
//             console.log(`ERROR - El usuario no existe`);
//             res.status(200).send("Usuario no existe");
//         } else {
//         // Si lo encuentra, compara la contraseña de la request con la guardada
//         // Primero hashea la contraseña
//         console.log(`OK - Usuario encontrado: ${user.id}`);
//         console.log(`Chequeando password...`);
//         const validPassword = await bcrypt.compare(req.body.password,user.password);
//         // Si devuelve FALSE (no son iguales) => Devuelve error al usuario
//         if (!validPassword) {
//             console.log(`ERROR - La contraseña es incorrecta`);
//             res.status(401).send("La contraseña es incorrecta");
//         }
//         // Si devuelve TRUE (son iguales) => Crea el TOKEN de la sesión y lo devuelve al usuario
//         else {
//         console.log(`OK - Password correcto`);
//         console.log(`Creando TOKEN...`);
//         const token = service.createToken(user.id, user.rol.rolId);
//         console.log(`OK - Token ${token}`)
//         res.status(200).send({token: token});
//         }}
//     }
//         catch(error) {
//             console.log(`ERROR: ${error}`);
//             res.status(200).send(error);
//         }
//     }

// //User Info
// UserController.userInfo = async(req,res) => {
//     try {
//         // Busco un usuario que coincida con el id que viene en la request
//         console.log(`Buscando usuario existente...`);
//         const user = await new getRepository(User).findOne({where: {id: req.params.id}, select: ["id", "userName", "password", "firstName","lastName", "email"], relations: ["rol"]})
//         // Chequea que el encuentre un usuario
//         if (user === undefined) {
//             // Si no encuentra => Devuelve error al usuario
//             console.log(`ERROR - El usuario no existe`);
//             res.status(200).send("Usuario no existe");
//         }
//         else {
//             res.status(200).send(user);
//         }
// }
//     catch (error) {
//         res.status(200).send(error);
//     }
//   }

module.exports = ScoreController;
