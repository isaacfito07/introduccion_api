// cargue la conexion del grupo MySQL
const pool=require('../data/config');

// Ruta de la app
const router = app => {
    //Mostra mensaje de bienvenida de root
    app.get('/', (request, response) =>{
        response.send({
            message:'Bienvenido a Node.JS Express REST API!';
        });
   });
   //Mostrar todos los usuarios
   app.get('/users', (request, response) =>{
        pool.query('SELECT * FROM users', (error, result) =>{
            if (error) throw error;
            
            response.send(result);
        });
   });

};