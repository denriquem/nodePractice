import { NextFunction, Request, Response, Router } from "express";
import ThemeBController from "../controllers/themeBController";

class ThemeBRouter {
	private _router = Router();
	private _controller = ThemeBController;

	get router() {
		return this._router;
	}

	constructor() {
		this._configure();
	}

	private _configure() {
		this.router.get("/", (req: Request, res: Response, next: NextFunction) => {
			res.status(200).json(this._controller.defaultMethod());
		});
	}
}

export = new ThemeBRouter().router;
