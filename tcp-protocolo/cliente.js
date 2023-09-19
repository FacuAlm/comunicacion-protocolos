const net = require("net");

const options = {
  port: 5000,
  host: "192.168.39.216",
};

const client = net.createConnection(options);

client.on("connect", () => {
  console.log("Conexión satisfactoria!");
  client.write("ping");
});

client.on("data", (data) => {
  console.log("Mensaje recibido del servidor: " + data.toString());
  // Aquí puedes agregar lógica adicional para manejar la respuesta del servidor
});

client.on("error", (err) => {
  console.log(err.message);
});


