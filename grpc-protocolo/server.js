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

function sayHello(call, callback) {
    const message = `${Date.now()} - facu`;
    callback(null, { message });
}

function main() {
    const server = new grpc.Server();
    server.addService(hello_proto.Greeter.service, { sayHello });
    server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
        console.log('Servidor gRPC escuchando en el puerto 50051');
        server.start();
    });
}

main();
