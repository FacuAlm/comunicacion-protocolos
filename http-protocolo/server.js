const express = require('express');
const app = express();
const port = 3000; // Puedes cambiar el puerto si lo deseas

app.use(express.json()); // Middleware para analizar JSON en las solicitudes

// Ruta de ejemplo para GET
app.get('/', (req, res) => {
  res.send('¡Hola desde el servidor Express (GET)!');
});

// Ruta de ejemplo para POST
app.post('/create', (req, res) => {
  const data = req.body; // Obtener datos del cuerpo de la solicitud
  // Aquí puedes procesar y guardar los datos recibidos
  res.json({ message: 'Datos recibidos con éxito', data });
});

// Ruta de ejemplo para PUT
app.put('/update/:id', (req, res) => {
  const id = req.params.id; // Obtener el parámetro de la URL
  const updatedData = req.body; // Obtener datos del cuerpo de la solicitud
  // Aquí puedes actualizar los datos correspondientes al ID
  res.json({ message: `Datos actualizados para el ID ${id}`, data: updatedData });
});

// Ruta de ejemplo para DELETE
app.delete('/delete/:id', (req, res) => {
  const id = req.params.id; // Obtener el parámetro de la URL
  // Aquí puedes eliminar los datos correspondientes al ID
  res.json({ message: `Datos eliminados para el ID ${id}` });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
