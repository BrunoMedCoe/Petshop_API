//A camada Repository é responsável por interagir com o banco de dados, realizando a consulta e persistência de dados.
import Proprietario from "../models/proprietario.model.js";

async function insertProprietario(proprietario) {               //função para criar um proprietario
    try {
        return await Proprietario.create(proprietario);         //o await é por estar numa função assincrona dentro de uma (promisse).
    } catch (err) {
        throw err;
    }
}

async function updateProprietario(proprietario) {               //atualização de um proprietario.
    try {
        await Proprietario.update(proprietario, {               //update -> atualiza um proprietrio e para isso precisa passa os filtros, tanto de qual categoria quando de qual local(através do where).
            where: {
                proprietarioId: proprietario.proprietarioId
            }
        });
        return await getProprietario(proprietario.proprietarioId)     //OBS: o update não possui retorno pq ele não retorna o objeto q foi aterado e sim quais os registros foram afetados.
    } catch (err) {
        throw err;
    }
}

async function deleteProprietario(id) {                         //exclusão de um proprietario.
    try {
        await Proprietario.destroy({                            //(destroy) -> exclui um proprietario e precisa passa o filtro (where) para realizar a busca de qual será excluido.
            where: {
                proprietario: id
            }
        });
    } catch (err) {
        throw err;
    }
}

async function getProprietarios() {                             //Consulta de todos os proprietarios.
    try {
        return await Proprietario.findAll();                    //findAll() -> realiza a busca de todos.
    } catch (err) {
        throw err;
    }
}

async function getProprietario(id) {                            //consulta de um proprietario específico.
    try {
        return await Proprietario.findByPk(id);                 //para fazer a consulta, realizou o findByPk(id) -> que busca pela Primary key através do (id) do proprietario.
    } catch (err) {
        throw err;
    }
}

export default {
    insertProprietario,
    updateProprietario,
    deleteProprietario,
    getProprietarios,
    getProprietario
}