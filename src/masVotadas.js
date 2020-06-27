const fs = require('fs')

let masVotadas = {
    db:'./data/movies.json',
    titulo:'Más votadas',
    leeJSON: function(){
        let moviesJSON = fs.readFileSync(this.db, 'utf-8')
        let movies = JSON.parse(moviesJSON)
        return movies
    },
    cantidad: function(){
        let contador = 0;
        let movies = this.leeJSON()
        movies.movies.forEach((ranking) => {
            if (ranking.vote_average >= 7){
                contador++
            }
        });     
        return contador   
    },
    ranking: function(){
        let movies = this.leeJSON()
        let peliculas = []
        movies.movies.forEach(function(movie){
            peliculas.push(movie.vote_average)
            
        })
        let pelisrecortada = peliculas.filter(function(pelis){
            return pelis>=7
        })
        let reducepelis = pelisrecortada.reduce(function(acum, num){
            return acum+num
        })
        return reducepelis
    },
    //mostrar Pelicula, Rating y Reseña

    listarPelis: function(){
        let movies = this.leeJSON()
        let nuevalista = []
        movies.movies.forEach(function(listar){
            if (listar.vote_average >= 7)
                return nuevalista.push(listar)        
        })
        return nuevalista
    }

}
module.exports = masVotadas