//Aqui va a estar el punto de entrada del servidor
// import app from "./app.js";
// import { PORT } from "./config.js";
// import dotenv from "dotenv";

// dotenv.config();

// app.listen(PORT); // Puerto donde va a escuchar el servidor
// console.log("Servidor ejecutándose en el puerto", PORT);

import app from "./app.js";

app.listen(3000); // Puerto donde va a escuchar el servidor
console.log("Servidor ejecutándose en el puerto", 3000);
