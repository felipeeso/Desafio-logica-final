class hero{
	constructor(nomeHero, idadeHero, tipoHero){
		this.nomeHero = nomeHero
		this.idadeHero = idadeHero
		this.tipoHero = tipoHero
     }
	atacar(){
		if (this.tipoHero === "mago"){
		console.log(`O ${this.tipoHero} atacou usando magia`);
		} else if (this.tipoHero === "guerreiro"){
		console.log(`O ${this.tipoHero} atacou usando espada`);
		} else if (this.tipoHero === "monge"){
		console.log(`O ${this.tipoHero} atacou usando artes marciais`);
		} else if (this.tipoHero === "ninja"){
		console.log(`O ${this.tipoHero} atacou usando shuriken`);
		}
	}
}

let heroUm = new hero("Mago Negro", 100, "mago")
let heroDois = new hero("Guerreiro Negro", 108, "guerreiro")
let heroTres = new hero("Monge Budista", 1000, "monge")
let heroQuatro = new hero("Ninja Brabo", 150, "ninja")

heroUm.atacar()
heroDois.atacar()
heroTres.atacar()
heroQuatro.atacar()
