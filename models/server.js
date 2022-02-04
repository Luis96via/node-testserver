const express = require('express')

const cors = require('cors')



class Server{

    constructor(){

             this.app = express();
             this.port = process.env.PORT;
             //config API de usuarios para las rutas
             this.usuariosPath = '/api/usuarios';

             //Middlewares 
             this.middlewares();

            //rutas de mi aplicacion 
            this.routes();
                
                  }

             middlewares(){
               
       //CORS 
       this.app.use(cors() );

       //Lectura y parseo del body(informacion que se envia del front al back)
      this.app.use( express.json() );

       //Directorio Publico 
       this.app.use( express.static('public') );

                          };


                  

                  routes(){
         
            //configuracion para las rutas
            this.app.use( this.usuariosPath, require('../routes/usuarios') );


            //RUTAS QUE AHORA SON LAMADAS EN ARCHIVO RUTA  
         /* 
               this.app.get('/apis', (req,res)=>{ 

                                               res.send('Hello World');
                                              
                                               });
               this.app.get('/api', (req,res)=>{ 

                                               res.json({
                                            ok: true,
                                            msg:'get api'

                                                        });
                                              
                                               });        
                                               
                this.app.put('/api', (req,res)=>{ 

                                               res.status(400).json({
                                            ok: true,
                                            msg:'put api'

                                                        });
                                              
                                               });                                   
                this.app.post('/api', (req,res)=>{ 

                                               res.json({
                                            ok: true,
                                            msg:'post api'

                                                        });
                                              
                                               });
                this.app.delete('/api', (req,res)=>{ 

                                               res.json({
                                            ok: true,
                                            msg:'delete api'

                                                        });
                                              
                                               });

               */                                
                          }
  listen(){ 
     
     this.app.listen( this.port, ()=>{

    console.log('Servidor corriendo en puerto', this.port);

                                     });                   
                                       
         }

}

module.exports = Server;