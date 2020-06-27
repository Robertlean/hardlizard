const fs = require('fs')
let sucursales = {
    db:'./data/theaters.json',
    titulo:'Nuestras salas',
    leeJSON:function(){
        let sucursalesJSON = fs.readFileSync(this.db, 'utf-8')
        let sucu = JSON.parse(sucursalesJSON)
        return sucu
    },
    cantidad: function(){
        let devolverCantidad = this.leeJSON().total_theaters
        return devolverCantidad
    },
    listarSalas: function(){
        let sucu = this.leeJSON()
        let sucursal = sucu.theaters
        return sucursal
    }
}
module.exports = sucursales