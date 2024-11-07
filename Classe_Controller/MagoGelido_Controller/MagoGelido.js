import { Magos } from '../Magos_controller/Magos.js';

export class MagoGelo extends Magos {
	constructor(nome = "MagoGelido", idade = 56, vida, mana, rank = "A") {
		super(nome, idade, vida, mana, rank);
	}

	espinhosGelo(dano = 30, custoMana = 30) {
		console.log('O feitiço "Espinhos de Gelo" foi lançado'); //causa 30 de dano/consome 20 de mana
		dano = 30;
		custoMana = 30;
	}

	frozenShard(dano = 50, custoMana = 45) {
		console.log('O feitiço "FrozenShard" foi lançado'); //causa 20 de dano e deixa o inimigo parado por 1 round/consome 40 de mana
		dano = 50;
		custoMana = 45;
	}

	armaduraGelo(custoMana = 70) {
		console.log('A Habilidade "Armadura de Gelo" foi ativada'); //recebe 50% do dano original(dura 3 rounds)/consome 70 de mana
		custoMana = 70;
	}
}

var mago = new MagoGelo
console.log(mago.nome)
console.log(mago.idade)
console.log(mago.rank)
