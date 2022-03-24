import dotenv from "dotenv";
dotenv.config();

const DEV_CONFIG = {
    PORT: 4000,
    DB: {
        name: "contacts_dev",
        user: "local",
        passwd: "passwd123",
        host: "localhost",
        dialect: "postgres",
    }
}

export default DEV_CONFIG;