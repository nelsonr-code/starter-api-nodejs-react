import server from "~/config/server";

const startup = async () => {
    try {
        await server.start();
        
    } catch (error) {
        console.error(`An error ocurred: ${error}`);
    }
}

startup();
