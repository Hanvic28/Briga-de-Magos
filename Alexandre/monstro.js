class monstro {
	#vida;
	#forca;
	#tipo_ataque;

	constructor() {
		this.#vida = 100;
		this.#forca = 100;
		this.#tipo_ataque = {
			mordida: 0,
			garras: 0,
			cabecada: 0,
		};
	}

	get vida() {
		return this.#vida;
	}

	get forca() {
		return this.#forca;
	}

	ataqueFrontal(tipo) {
		if (this.forca < 35) {
			throw new Error('Oh sinto muito, voce nao possui energia para um ataque frontal');
		}

		this.#forca = this.#forca - 15;

		if (this.#tipo_ataque.mordida > 0 || tipo == 'mordida') {
			this.#tipo_ataque.mordida = this.#tipo_ataque.mordida - 1;
		} else {
			throw new Error('Hahahahahahah nem dentes voce tem......');
		}
	}

	golpeFrontal() {
		this.#vida = this.#vida - 25;
		this.#forca = this.#forca - 25;

		if (this.#vida <= 0 || this.#forca < 0) {
			throw new Error('Naooooooo. Game over para voce....voce esta fora.... ate a proxima');
		}
	}

	elixirLongaVida() {
		this.#vida = this.#vida + 40;
		if (this.#vida > 100) {
			this.#vida = 100;
		}
	}
}

const Xandao = new monstro();
