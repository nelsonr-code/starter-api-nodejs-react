import express from "express";
import currentEnv from "~/config/environments";
import middlewares from "~/middlewares";
import Routes from "~/api/routes";
// import indexHTML from "client/index.html";

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

        middlewares(this.app());
    }

    start() {
        this.init();
        this.setMiddlewares();
        this.setApiRoutes('/', Routes);
        this.setClientRoutes();

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

    setApiRoutes(baseUrl, router) {
        this.app().use(baseUrl, router);
    }

    setClientRoutes() {
        this.app().use('/', express.static(process.cwd() + '/client-app/'))
        this.app().use('/*', express.static(process.cwd() + '/client-app/'))
    }
}

export default new Server();