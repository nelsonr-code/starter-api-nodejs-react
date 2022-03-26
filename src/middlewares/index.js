import logger from "./logger";
import encoding from "./encoding";

export default (app) => {
    // SETTING UP MIDDLEWARES
    logger(app);
    encoding(app);
}