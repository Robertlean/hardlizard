const fs = require('fs')
let enCartelera = {
    //db: data base
    db:"./data/movies.json",
    titulo: 'En Cartelera',
    leeJSON: function(){
        let moviesJSON = fs.readFileSync(this.db,'utf-8');
        let movies = JSON.parse(moviesJSON)
        return movies
    },
    cantidad:function(){
        return this.leeJSON().total_movies
    },
    listarPelis: function(){
        let movies = this.leeJSON()
        let nuevalista = []
        movies.movies.forEach(function(listar){
            nuevalista.push(listar)        
        })
        return nuevalista
    },

}
module.exports = enCartelera