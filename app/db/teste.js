const { SELECT, SHOWTABLES } = require("sequelize/types/query-types");
const { format } = require("sequelize/types/utils");

function ConexaoDB() {
  const Sequelize = require("sequelize");
  const sequelize = new Sequelize("teste", "root", "123456", {
    host: "localhost",
    dialect: "mariadb",
  });

  sequelize
    .authenticate()
    .then(function () {
      console.log("Conectado com sucesso");
    })
    .catch(function (erro) {
      console.log("Falha ao se conectar" + erro);
    });
}
SHOWTABLES;



module.exports = ConexaoDB;
