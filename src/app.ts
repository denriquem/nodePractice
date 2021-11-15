import dotenv from "dotenv";
import express from "express";
import MasterRouter from "./routers/MasterRouter";

dotenv.config({
	path: ".env",
});

class Server {
	public app = express();
	public router = MasterRouter;
}

// initialize server app
const server = new Server();

// make server app handle any route starting with '/api'
server.app.use("/api", server.router);

// make server listen on some port
((port = process.env.APP_PORT || 5000) => {
	server.app.listen(port, () => console.log(`> Listening on port ${port}`));
})();
