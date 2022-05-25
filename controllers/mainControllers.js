const mainController = {
    index: (req, res) => {
        res.render("index")
    },
    about: (req, res) => {
        res.render("detalleMenu")
    }
}
module.exports = mainController