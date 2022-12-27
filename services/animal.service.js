import AnimalRepository from "../repositories/animal.repository.js";
import ProprietarioRepository from "../repositories/proprietario.repository.js";

async function createAnimal(animal) {
    if (await ProprietarioRepository.getProprietario(animal.proprietarioId)) {
        return await AnimalRepository.insertAnimal(animal);
    }
    throw new Error("O Proprietario ID informado não existe!")
}

async function getAnimais(proprietarioId) {                                     //criação da função que irá filtrar a consulta dos animais e de seus respectivos proprietarios.
    if (proprietarioId) {
        return await AnimalRepository.getAnimaisProprietarioId(proprietarioId);
    }
    return await AnimalRepository.getAnimais();
}

async function getAnimal(id) {
    return await AnimalRepository.getAnimal(id);
}

async function deleteAnimal(id) {
    await AnimalRepository.deleteAnimal(id);
}

async function updateAnimal(animal) {
    if (await AnimalRepository.getProprietario(animal.proprietarioId)) {
        return await AnimalRepository.updateAnimal(animal);
    }
    throw new Error("O Proprietario ID não existe!")
}

export default {
    createAnimal,
    getAnimais,
    getAnimal,
    deleteAnimal,
    updateAnimal
}