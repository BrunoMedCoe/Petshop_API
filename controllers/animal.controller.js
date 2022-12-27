import AnimalService from "../services/animal.service.js";

async function createAnimal(req, res, next) {
    try {
        let animal = req.body;
        if (!animal.nome || !animal.tipo || !animal.proprietarioId) {
            throw new Error("Nome e Tipo e Proprietario ID são obrigatórios!")
        }
        res.send(await AnimalService.createAnimal(animal));
        logger.info(`POST /Animal - ${JSON.stringify(animal)}`);
    } catch (err) {
        next(err);
    }
}

async function getAnimais(req, res, next) {
    try {
        res.send(await AnimalService.getAnimais(req.query.proprietarioId));         //função da requisição(req) -> query.proprietarioId é para filtrar a consultada dos animais vinculadas com seus respectivos proprietarios.
        logger.info("GET /animal");
    } catch (err) {
        next(err);
    }
}

async function getAnimal(req, res, next) {
    try {
        res.send(await AnimalService.getAnimal(req.params.id));
        logger.info("GET /animal");
    } catch (err) {
        next (err);
    }
}

async function deleteAnimal(req, res, next) {
    try {
        await AnimalService.deleteAnimal(req, params.id)
        res.end()
     looger.info("DELETE /animal");
    } catch (err) {
        next(err);
    }
}

async function updateAnimal(req, res, next) {
    try {
        let animal = req.body;
        if (!animal.animalId || !animal.nome || !animal.tipo ||!animal.proprietarioId) {
            throw new Error("Animal ID, Nome, Tipo e Proprietario ID são obrigatórios!")
        }
        animal = await AnimalService.updateAnimal(animal);
        res.send(animal);
        logger.info(`PUT /animal - ${JSON.stringify(animal)}`);
    } catch (err) {
        next (err);
    }
}

export default {
    createAnimal,
    getAnimais,
    getAnimal,
    updateAnimal,
    deleteAnimal
}