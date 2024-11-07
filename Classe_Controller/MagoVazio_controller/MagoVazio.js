import { Magos } from '../Magos_controller/Magos.js';

export class MagoVazio extends Magos {
	constructor(nome = "Mago Hollow", idade = 34, vida, mana, rank = "S") {
		super(nome, idade, vida, mana, rank);
	}

	chamasNegras(dano = 35, custoMana = 40) {
		console.log('O feitiço "Bola de Fogo" foi lançado'); //causa 35 de dano/consome 40 de mana
		dano = 35;
		custoMana = 40;
	}

	corrosao(dano = 45, custoMana = 40) {
		console.log('O feitiço "lança Chamas" foi lançado'); //o inimigo perde 45 de vida(ignora passivos)/consome 40 de mana
		dano = 45;
		custoMana = 40;
	}

	fumacaIlusoria(custoMana = 90) {
		console.log('O Passivo "Derretimento" foi ativado'); //deixa invuneravel por 2 partida/consome 90 de mana
		custoMana = 90;
	}
}

var mago = new MagoVazio
console.log(mago.nome)
console.log(mago.idade)
console.log(mago.rank)