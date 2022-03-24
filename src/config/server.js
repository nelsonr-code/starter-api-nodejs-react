import express from "express";
import currentEnv from "~/config/environments";

const { PORT, DB } = currentEnv;

class Server {

    constructor() {
        this._app = null;
        this._server = null;
    }

    static get appPort() {
        return PORT;
    }

    static get db() {
        return DB;
    }

    init() {
        this._app = express();
    }

    app() {
        return this._app;
    }

    server() {
        return this._server;
    }

    setMiddlewares() {
        if (!this.app()) {
            console.log("error");
        }
    }

    start() {
        this.init();
        console.log("Working!");
        this._server = this._app.listen(Server.appPort, () => {
            const { port, address } = this.server().address();
            console.info(
                `[contactApp] running at PORT [${port}] and ADDRESS [${address}]`
            );
        })
    }
}

export default new Server();