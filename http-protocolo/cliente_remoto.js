const axios = require('axios');

const baseURL = 'http://172.16.12.16:3000'; // Reemplaza con la dirección IP y el puerto del servidor

// Función para realizar una solicitud POST y enviar datos al servidor
async function sendDataToServer() {
  const dataToSend = { message: 'Hola soy Thiago' }; // Datos que deseas enviar al servidor
  try {
    const response = await axios.post(`${baseURL}/create`, dataToSend);
    console.log('Respuesta del servidor (POST):', response.data);
  } catch (error) {
    console.error('Error al realizar la solicitud POST:', error);
  }
}

// Llamar a la función para realizar la solicitud POST
sendDataToServer();
