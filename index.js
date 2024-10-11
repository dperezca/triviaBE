const express = require("express");
const app = express();
const port = 3000; // Puedes cambiar el puerto si lo deseas
const initDB = require("./config/db");
const model = require("./models/scores");
const ScoresRouter = require("./routes/ScoresRouter");
const listEndpoints = require("express-list-endpoints");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(
  bodyParser.json({
    limit: "20mb",
  })
);

app.use(cors());

app.use(
  bodyParser.urlencoded({
    limit: "20mb",
    extended: "true",
  })
);

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("¡Hola Mundo!");
});

// Arrancar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

initDB();

// exports.getData = (req, res) => {
//   model.find({}, (err, docs) => {
//     res.send({
//       docs: docs,
//     });
//   });
// };

// Gestión de scores
app.use("/scores", ScoresRouter);
