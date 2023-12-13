import { DataTypes } from "sequelize";
import { sequelize } from "../config.js";

const Articles = sequelize.define("Articles", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.ENUM("Review", "Policy", "Report"),
    allowNull: false,
    defaultValue: "Report",
  },
  body: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      len: [20, Infinity],
    },
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Articles;
