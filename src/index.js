const homePage = require('./homePage')
const enCartelera = require('./enCartelera')
const masVotadas = require('./masVotadas')
const sucursales = require('./sucursales')
const contacto = require('./contacto')
const preguntasFrecuentes = require('./preguntasFrecuentes')

let index = {
    homePage: function(res){
        res.write(homePage.titulo)  
        res.write('\n\n-----------------------------\n\n')
        res.write('Total de películas en cartelera: '+ homePage.cantidad())
        res.write('\n\n-----------------------------\n\n')
        res.write('Listado de Películas: \n')
        homePage.listarPelis().forEach(function(peli){
            res.write(peli+'\n')
        })
        res.write('\n\n-----------------------------\n')
        res.write(homePage.piePagina)
        res.end()
    },
    enCartelera : function(res){
        res.write(enCartelera.titulo)
        res.write('\n\n-----------------------------\n\n')
        res.write('Total de películas en cartelera: '+ enCartelera.cantidad()+'\n\n');
        
        enCartelera.listarPelis().forEach(function(listar){
            res.write('\n\nTitulo: '+ listar.title)
            res.write('\n\n-----------------------------\n\n')
            res.write('Reseña: '+ listar.overview+ '\n\n')
        })   
        res.end()
    },
    masVotadas:function(res){
        res.write(masVotadas.titulo+'\n\n\n')
        res.write('\n\n-----------------------------\n\n')
        res.write('Cantidad de las mayores votadas: '+masVotadas.cantidad()+'\n\n')
        res.write('\n\n-----------------------------\n\n')
        res.write('El promedio es de '+ masVotadas.ranking()/masVotadas.cantidad())
        res.write('\n\n-----------------------------\n\n')
        masVotadas.listarPelis().forEach(function(listar){
            res.write('\n\nPelicula: '+listar.title)
            res.write('\n\nRating: '+listar.vote_average)
            res.write('\n\nReseña: '+listar.overview)
        })
        res.end()
    },
    sucursales:function(res){
        res.write(sucursales.titulo)
        res.write('\n\nCantidad de salas: '+sucursales.cantidad())
        res.write('\n\nListado de salas:\n')
        sucursales.listarSalas().forEach(function(room){
            res.write(`\n\nNombre: ${room.name}`)
            res.write(`\n\nDireccion: ${room.address}`)
            res.write(`\n\nDescripción: ${room.description}`)
            res.write('\n\n-----------------------------\n\n')
        })
        res.end()
    },
    contacto: function(res){
        res.write(`${contacto.Titulo}\n\n${contacto.mostrarContacto}`)
        res.end()
    },
    preguntasFrecuentes:function(res){
        res.write(preguntasFrecuentes.titulo+'\n\n\n')
        preguntasFrecuentes.listarPreguntas().forEach(function(listar){
            res.write(listar.faq_title)
            res.write(`\n\nPregunta: ${listar.faq_answer}`)
            res.write('\n\n-----------------------------\n\n')
        })
        res.end()
    }
}
module.exports = index