import { Router } from "express";
import ThemeARouter from "../routers/ThemeARouter";
import ThemeBRouter from "../routers/ThemeBRouter";

class MasterRouter {
	private _router = Router();

	private _subRouterA = ThemeARouter;
	private _subRouterB = ThemeBRouter;

	get router() {
		return this._router;
	}

	constructor() {
		this._configure();
	}

	private _configure = () => {
		this._router.use("/themeA", this._subRouterA);
		this._router.use("/themeB", this._subRouterB);
	};
}

export = new MasterRouter().router;
