import dotenv from "dotenv";
dotenv.config();
import DEV_CONFIG from "./dev";
import PROD_CONFIG from "./prod";

const { NODE_ENV } = process.env;

let currentEnv = DEV_CONFIG;

if (NODE_ENV === "production") {
    currentEnv = PROD_CONFIG;
}

export default currentEnv;