import { MagoPyromantico } from "../MagoPyromantico_controller/MagoPyromantico";

export class Magos {
	#nome;
	#idade;
	#vida;
	#dano;
	#mana;
	#custoMana;
	#rank;
	constructor(nome, idade, vida = 100, mana = 200, rank, dano, custoMana, tipo_ataque) {
		super(tipo_ataque)

		this.#nome = nome;
		this.#idade = idade;
		this.#vida = vida;
		this.#dano = dano;
		this.#mana = mana;
		this.#custoMana = custoMana;
		this.#rank = rank;

		//criar um ataque no constructor do mago de fogo e dar o valor de seus ataques
	}

	get nome() {
		return this.#nome;
	}

	get idade() {
		return this.#idade;
	}

	set idade(novaIdade) {
		this.#idade = novaIdade;
	}

	get vida() {
		return this.#vida;
	}

	get mana() {
		return this.#mana;
	}

	get rank() {
		return this.#rank;
	}

	FrascoEstus() {
		this.#vida = this.#vida + 50;
		if (this.#vida > 100) {
			this.#vida = 100;
		}

		console.log('Vida recuperada'); //recupera metade do pv   OBS: só pode ser usado 4 vez em cada batalha
	}

	FrascoMana() {
		this.#mana = this.#mana + 60;
		if (this.#mana > 100) {
			this.#mana = 100;
		}
		console.log('Mana Recuperada'); //recupera 60 de pf   OBS: só pode ser usado 9 vez
	}

	LançarMagia(tipo) {
		if (this.#mana < this.#custoMana) {
			throw new Error('Mana Insuficiente');
		}

		if(tipo = "bolafogo"){
			this.#mana = this.#mana - this.#custoMana
			bolafogo()
		}

		if(tipo = "lancaChamas"){
			this.#mana = this.#mana - this.#custoMana
			lancaChamas()
		}

		if(tipo = "derretimento"){
			this.#mana = this.#mana - this.#custoMana
			derretimento()
		}



	}

	RecebeMagia() {
		if (this.#vida <= this.#dano) {
			throw new Error('Game Over...sua vida acabou');
		}

		if (this.#mana <= 0) {
			throw new Error('Game Over...sua mana acabou');
		}
		this.#vida = this.#vida - this.#dano;
	}
}
