const { Router } = require('express');

//importando objeto desde controlador

const { usuariosGet, 
        usuariosPut, 
        usuariosPost, 
        usuariosDelete, 
        usuariosPatch 
      
      } = require('../controllers/usuarios');

const router = Router();




router.get('/', usuariosGet );   
    
    

     //enviando parametro optional porque le añadimos en sig ?
router.put('/:id?', usuariosPut );              
    
    

router.post('/', usuariosPost);




router.delete('/', usuariosDelete);



router.patch('/', usuariosPatch);    




module.exports = router;