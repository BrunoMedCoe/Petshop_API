import Animal from "../models/animal.model.js";
import Proprietario from "../models/proprietario.model.js";

async function insertAnimal(animal) {               //função para criar um animal
    try {
        return await Animal.create(animal);         //o await é por estar numa função assincrona dentro de uma (promisse).
    } catch (err) {
        throw err;
    }
}

async function updateAnimal(animal) {               //atualização de um animal.
    try {
        await Animal.update(animal, {               //update -> atualiza um proprietrio e para isso precisa passa os filtros, tanto de qual categoria quando de qual local(através do where).
            where: {
                animalId: animal.animalId
            }
        });
        return await getAnimal(animal.animalId)     //OBS: o update não possui retorno pq ele não retorna o objeto q foi aterado e sim quais os registros foram afetados.
    } catch (err) {
        throw err;
    }
}

async function deleteAnimal(id) {                         //exclusão de um animal.
    try {
        await Animal.destroy({                            //(destroy) -> exclui um animal e precisa passa o filtro (where) para realizar a busca de qual será excluido.
            where: {
                animal: id
            }
        });
    } catch (err) {
        throw err;
    }
}

async function getAnimais() {                             //Consulta de todos os animals.
    try {
        return await Animal.findAll({                    //findAll() -> realiza a busca de todos.
            include: [                                     // a função (include) inclui as informações pertencentes ao item de outra tabela que está relacionado, ou seja, que está lincado pela PK. 
                {
                    model: Proprietario
                }
            ]
        });
    } catch (err) {
        throw err;
    }
}

async function getAnimaisProprietarioId(proprietarioId) {       //consultar os animais e seus respectivos proprietarios.
    try {
        return await Animal.findAll(
            {
                where: {                                        //a função (where) é o filtro de qual item que deve ser vinculado na consulta.
                    proprietarioId: proprietarioId
                }
            },
            {
                include: [
                    {
                        model: Proprietario
                    }
                ]
            }
        );
    } catch (err) {
        throw err;
    }
}

async function getAnimal(id) {                            //consulta de um animal específico.
    try {
        return await Animal.findByPk(id);                 //para fazer a consulta, realizou o findByPk(id) -> que busca pela Primary key através do (id) do animal.
    } catch (err) {
        throw err;
    }
}

export default {
    insertAnimal,
    updateAnimal,
    deleteAnimal,
    getAnimais,
    getAnimaisProprietarioId,
    getAnimal
}