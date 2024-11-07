import { Magos } from '../Magos_controller/Magos.js';

export class MagoEletrico extends Magos {
	constructor(nome = "Mago Eletrico", idade = 68, vida, mana, rank = "B") {
		super(nome, idade, vida, mana, rank);
	}

	raios(dano = 30, custoMana = 30) {
		console.log('O feitiço "Raios" foi lançado'); //causa 30 de dano/consome 30 de mana
		dano = 30;
		custoMana = 30;
	}

	lightingDash(custoMana = 50) {
		console.log('O passivo "lightingDash" foi ativado'); //desvia de 1 ataque inimigo/consome 50 de mana
		custoMana = 50;
	}

	gaiolaEletrica(dano = 20, custoMana = 100) {
		console.log('O Feitiço "Gaiola Eletrica" foi lançado'); //deixa o inimigo incapaz de atacar por 1 round e da 20 de dano nele/consome 100 de mana
		dano = 20;
		custoMana = 100;
	}
}

var mago = new MagoEletrico
console.log(mago.nome)
console.log(mago.idade)
console.log(mago.rank)