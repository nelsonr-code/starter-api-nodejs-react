import express from "express";
import currentEnv from "~/config/environments";
import middlewares from "~/middlewares";
import Routes from "~/api/routes";

const { PORT, DB } = currentEnv;

class Server {

    constructor() {
        this._app = null;
        this._server = null;
        this._express = express();
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

        middlewares(this.app());
    }

    start() {
        this.init();
        this.setMiddlewares();
        this.setRoutes('/', Routes);

        return new Promise((resolve, reject) => {
            const http = this._app.listen(Server.appPort, () => {
                const { port } = http.address();
                console.info(
                    `[ContactApp] running at PORT [${port}]`
                );
                resolve();
            })
        })
    }

    setRoutes(baseUrl, router) {
        this.app().use(baseUrl, router);
    }
}

export default new Server();