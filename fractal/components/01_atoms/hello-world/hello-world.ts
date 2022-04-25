class HelloWorld {

	constructor(public greeting: string, public world: string) {
		this.greeting = greeting;
		this.world = world;
	};

	init = () => {
		console.log(`${this.greeting} ${this.world}!`);
	};

};

export default HelloWorld;