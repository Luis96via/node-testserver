const { response, request } = require('express');





const usuariosGet = (req = request, res = response)=>{

    const {nombre = 'este es valor por defector por si no nos envian nada', profesion, pais}= req.query;


    res.json({

         msg: 'get API controlador',
         nombre,
         profesion,
         pais

            })

                      
                                           }



const usuariosPut = (req, res = response)=>{

    //recibiendo parametro por URL 
    const {id}= req.params;

        res.status(400).json({

     ok: true,
     msg:'put api',
     id
    
                            });
       
               

                      
                                           }
      
const usuariosPost = (req, res = response)=>{
 
    //recibiendo inf desde el body
    const body = req.body;
    const {nombre, edad} = req.body;

   

        res.status(400).json({
            ok: true,
            msg:'post api',
            body,
            nombre,
            edad
                             });
       
               

                      
                                           }


const usuariosDelete = (req, res = response)=>{

   

        res.status(400).json({
            ok: true,
            msg:'delete api'
    
                             });
                              
                                               }
       
               
const usuariosPatch = (req, res = response)=>{

   

        res.status(400).json({
            ok: true,
            msg:'Patch api'
    
                             });
                      
                                               }






module.exports = {

    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch

                  }