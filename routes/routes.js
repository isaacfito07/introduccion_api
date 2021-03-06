// cargue la conexion del grupo MySQL
const pool=require('../data/config');

// Ruta de la app
const router = app => {
    //Mostra mensaje de bienvenida de root
    app.get('/', (request, response) =>{
        response.send({
            message:'Bienvenido al Server de Ubuntu de Isaac Node.JS Express REST API!'
        });
   });
   //Mostrar todos los usuarios
   app.get('/users', (request, response) =>{
        pool.query('SELECT * FROM users', (error, result) =>{
            if (error) throw error;
            
            response.send(result);
        });
   });
   //Mostrar un solo usuario por ID
   app.get('/users/:id', (request, response) => {
       const id = request.params.id;

       pool.query('SELECT * FROM users WHERE id=?', id, (error, result) => {
           if (error) throw error;

           response.send(result);
       });
   });
   // Agregar un nuevo usuario
   app.post ('/users', (request, response) => {
       pool.query('INSERT INTO users SET ?', request.body, (error, result) => {
           if (error) throw error;

           response.status(201).send(`User added with ID: ${result.insertId}`);
       });
   });

   //Actualizar un usuario existente
   app.put('/users/:id', (request, response) =>{
       const {id}= request.params;
       const {nombre,apellido}=request.body[0];
       pool.query(`UPDATE users SET nombre = '${nombre}', apellido = '${apellido}' WHERE (id = ${id});`, (error, result) =>{
            if(error) throw error;

            response.send('User updated Successfully.');
       });
   });

   //Eliminar un usuario
   app.delete('/users/:id', (request, response) =>{
       const id= request.params.id;

       pool.query('DELETE FROM users WHERE id = ?', id, (error, result) => {
           if (error) throw error;
           response.send('User deleted.');
       });
   });
};

// Exportar el router
module.exports = router;