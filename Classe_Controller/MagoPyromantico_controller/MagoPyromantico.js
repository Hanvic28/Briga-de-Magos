import { Magos } from '../Magos_controller/Magos.js';

export class MagoPyromantico extends Magos {
	constructor(nome = 'MagoPyromantico', idade = '81', vida, mana, rank = 'A', ) {
		super(nome, idade, vida, dano, mana, custoMana, rank, tipo_ataques);
		tipo_ataque ={
			bolaFogo,
			lancaChamas,
			derretimento
		}
		
	}

	bolaFogo() {
		console.log('O feitiço "Bola de Fogo" foi lançado'); //causa 30 de dano no inimigo/consome 30 de mana
		const dano = 30;
		const custoMana = 30;
	}

	lancaChamas() {
		console.log('O feitiço "lança Chamas" foi lançado'); //o inimigo perde 35/consome 40 de mana
		const dano = 35;
		const custoMana = 40;
	}

	derretimento() {
		console.log('O Passivo "Derretimento" foi ativado'); //abilidade passiva  que o deixa imune a danos/consome 80 de mana
		const custoMana = 80;
		console.log("ddddd")
	}
}

var mago = new MagoPyromantico();
console.log(mago.nome);
console.log(mago.idade);
console.log(mago.rank);
