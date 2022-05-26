const about = {
    title: 'Hola mundo',
    description: 'Esto es una prueba',
    history: 'Cualquier información',
    menu: "cosas para elegir de comida"
}

const menu = [ 
    {
        id : 1,
        title: 'Carpaccio fresco',
        description: 'Entrada Carpaccio de salmón con cítricos',
        price: 'U$S 65.50'
    },
    {
        id : 2,
        title: 'Risotto de berenjena',
        description: 'Entrada Carpaccio de salmón con cítricos',
        price: 'U$S 45.50'
    },
    {
        id : 3,
        title: 'Empanadas salteñas',
        description: 'De carne cortada al cuchillo',
        price: 'U$S 15.50'
    },
    {
        id : 4,
        title: 'Humitas',
        description: 'Relleno de choclo envuelto en chala',
        price: 'U$S 25.50'
    }
]

const mainController = {
    index: (req, res) => {
        res.render("index", {about: about, menu: menu})
    },
    detalle: (req, res) => {
        res.render("detalleMenu")
    }
}
module.exports = mainController