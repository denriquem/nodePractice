class ThemeAController {
	defaultMethod = () => {
		return {
			text: `You have reached ${this.constructor.name} default method`,
		};
	};
}

export = new ThemeAController();
