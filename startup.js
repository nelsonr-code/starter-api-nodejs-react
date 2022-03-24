import { app } from "./startup";
import server from "~/config/server";

server.start();

// middlewares
// app.use(morgan('dev'));
// app.use(urlencoded({ extended: false }));

