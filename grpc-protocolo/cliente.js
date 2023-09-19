const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const packageDefinition = protoLoader.loadSync(
    'helloworld.proto', // Reemplaza con la ruta de tu archivo .proto
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    }
);
const hello_proto = grpc.loadPackageDefinition(packageDefinition).helloworld;

const client = new hello_proto.Greeter('localhost:50051', grpc.credentials.createInsecure());

function main() {
    const user = 'facu';

    client.sayHello({ name: user }, (error, response) => {
        if (!error) {
            console.log('Respuesta del servidor:', response.message);
        } else {
            console.error('Error en la llamada gRPC:', error);
        }
    });
}

main();

main();