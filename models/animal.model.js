import Sequelize from "sequelize";
import db from "../repositories/db.js";
import Proprietario from "./proprietario.model.js";

const Animal = db.define('animais', {
    animalId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tipo: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, { underscored: true });                              //essa propriedade transforma os (_) em camelCase

Animal.belongsTo(Proprietario, { foreignKey: "proprietarioId" });                         //belongsTo() -> refere-se a quem está vinculado, ou seja, pertence a algo que nesse caso, os animais pertencem aos proprietarios.

export default Animal;