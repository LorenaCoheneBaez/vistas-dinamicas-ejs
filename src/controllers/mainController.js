//CONTROLADOR
const platos= require('../data/platos_db'); //const que voy a recorrer, xq requiero platos_db, en donde parsee el array del json

module.exports={
    index:(req,res)=> {
        return res.render('index',{
            platos, //es un array de obj, hay que recorrerlo
        }) //con { va return}, sin{}no va nada  
    },
   detail: (req,res)=>{
       let plato=platos.find(plato=>plato.id===+req.params.id) //recorro el array para obtener solo 1 resultado
    //    return res.send(plato)
       return res.render('detalleMenu',{
           plato,
    })
   }
      
}