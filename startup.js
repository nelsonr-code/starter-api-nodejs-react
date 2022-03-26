import * as Sentry from '@sentry/node';
import * as Tracing from '@sentry/tracing';
import server from "~/config/server";


const startup = async () => {
    try {
        await server.start();
        
    } catch (error) {
        console.error(`An error ocurred: ${error}`);
    }
}

startup();

// middlewares
// app.use(morgan('dev'));
// app.use(urlencoded({ extended: false }));

