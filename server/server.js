require('./config/config.js');
const express = require('express');
const app = express();

const bodyParser = require('body-parser');

  app.use(bodyParser.urlencoded({ extended: false }))
 
  app.use(bodyParser.json()) 

  app.get('/usuario', function (req, res) {
  res.json("Hola Usuario");
})
app.post('/', function (req, res) {
    let body=req.body;
    if (body.nombre=== undefined){
        res.status(400).json({
            ok: false,
            mensaje:'El nombre es necesario'
        });
    }else{
        res.json({
            persona:body
        });
    }
    res.json("Peticion Post");
  })
  app.delete('/usuario/:id', function (req, res) {
    let id =req.params.id;
    res.status(404).json({
        ok: false,
        mensaje:'El id es necesario'
    });

    res.json({
        id : id ,
        mensaje: "Usuario eliminado"
    });
  })
  app.put('/usuario/:id', function (req, res) {
    let id =req.params.id;
    res.json({
        id 
    });
  })


app.listen(process.env.PORT,()=>{
    console.log("Escuchandp puerto:", process.env.PORT);
});