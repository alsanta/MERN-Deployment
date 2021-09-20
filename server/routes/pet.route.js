// import the controller
const petManager = require("../controllers/pet.controller")

module.exports = app =>{
    app.get("/api/pets",petManager.getAll);
    app.post("/api/pets",petManager.createNew);
    app.get("/api/pets/:id",petManager.getById);
    app.delete("/api/pets/:id",petManager.deleteById);
    app.put("/api/pets/:id",petManager.updateById);
}