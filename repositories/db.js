import Sequelize from "sequelize";

const sequelize = new Sequelize(
    "postgres://hhukwlab:gmk-F8noNq72hw14Yf0wK-K6k6tvckYw@lucky.db.elephantsql.com/hhukwlab",
    {
        dialect: "postgres",
        define: {
            timestamps: false
        }
    }
)

export default sequelize;