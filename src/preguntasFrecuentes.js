const fs = require('fs')
let preguntasFrecuentes = {
    db:"./data/faqs.json",
    titulo: "Preguntas Frecuentes",
    leeJSON: function(){
        let preguntas = fs.readFileSync(this.db, 'utf-8')
        let preguntados = JSON.parse(preguntas)
        return preguntados
    },
    cantidad: function(){
        return this.leeJSON().total_faqs
    },
    listarPreguntas: function(){
        return ResPreg = this.leeJSON().faqs
    }
}
module.exports = preguntasFrecuentes