import { Sequelize } from "sequelize";

// export const sequelize = new Sequelize(
//   "crowdfundingft",
//   "team5p2",
//   "CrowdTeam5Funding",
//   {
//     host: "db4free.net",
//     dialect: "mysql",
//   }
// );
export const sequelize = new Sequelize("assessment", "hasan", "123", {
  host: "127.0.0.1",
  dialect: "mariadb",
  port: 3001,
});

sequelize
  .authenticate()
  .then(function () {
    console.log("sucess");
  })
  .catch(function (error) {
    console.log("error: " + error);
  });
