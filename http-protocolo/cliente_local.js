const axios = require('axios');

const baseURL = 'http://localhost:3000'; // Asegúrate de que coincida con el puerto del servidor

// Función para realizar una solicitud GET
async function getData() {
  try {
    const response = await axios.get(`${baseURL}`);
    console.log('Respuesta del servidor (GET):', response.data);
  } catch (error) {
    console.error('Error al realizar la solicitud GET:', error);
  }
}

// Función para realizar una solicitud POST y enviar datos al servidor
async function sendDataToServer(data) {
  try {
    const response = await axios.post(`${baseURL}/create`, data);
    console.log('Respuesta del servidor (POST):', response.data);
  } catch (error) {
    console.error('Error al realizar la solicitud POST:', error);
  }
}

// Función para realizar una solicitud PUT y actualizar datos en el servidor
async function updateData(id, data) {
  try {
    const response = await axios.put(`${baseURL}/update/${id}`, data);
    console.log('Respuesta del servidor (PUT):', response.data);
  } catch (error) {
    console.error('Error al realizar la solicitud PUT:', error);
  }
}

// Función para realizar una solicitud DELETE y eliminar datos en el servidor
async function deleteData(id) {
  try {
    const response = await axios.delete(`${baseURL}/delete/${id}`);
    console.log('Respuesta del servidor (DELETE):', response.data);
  } catch (error) {
    console.error('Error al realizar la solicitud DELETE:', error);
  }
}

// Ejemplo de uso de las funciones

// Realizar una solicitud GET
getData();

// Datos que deseas enviar al servidor en una solicitud POST
const postDataExample = { message: 'Datos de ejemplo para POST' };
sendDataToServer(postDataExample);

// Datos que deseas enviar al servidor en una solicitud PUT
const putDataExample = { message: 'Datos de ejemplo para PUT' };
updateData(1, putDataExample);

// Realizar una solicitud DELETE
deleteData(2);
