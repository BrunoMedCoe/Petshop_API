 
import express from "express";                                  //no Pakage.json, o "type": "Module" é util para usar as palavras (import) e (export).
import cors from "cors";
import winston from "winston";                                  //serve para a gravação de logs.
import proprietarioRouter from "./routes/proprietario.route.js";
import animalRouter from "./routes/animal.route.js";

const { combine, timestamp, label, printf } = winston.format;           //Início dessa toda configuração, e ela é padronizada, pose der utilizada em outras APIs.
const myformat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level} ${message}`;
});
global.logger = winston.createLogger({
    level: "silly",
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({ filename: "petshop-api.log" })
    ],
    format: combine(

        label({ label: "petshop-api" }),
        timestamp(),
        myformat
    )
})                                                                      //aqui finaliza a formatação do winston para a gravação de logs.

const app = express();                                //instancianciando o express para "subir" o API.
app.use(express.json());                             //essa middlleware serve para que o express converta as requisições e as respostas no formato json
app.use(cors());                                     //a middlleware do (cors) que é uma restrição que serve para evitar que vc consiga acessar seus endpoints vindo de uma pagina web que esteja em outro servidor.
app.use("/proprietario", proprietarioRouter);       //(use) -> configurando uma middlleware que ficará escutando e tudo que vier requisições por (/proprietario), será exportado para (proprietarioRouter).
app.use("/animal", animalRouter);                   // idem.
app.use((err, req, res, next) => {                        //tratamento do erro. Todo next cairá aqui!
    logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
    res.status(400).send({ error: err.message} );
})
app.listen(3000, () => console.log("API Started!"));