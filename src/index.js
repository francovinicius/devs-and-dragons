import { Personagem } from "./modules/personagem.js"
import { personagemView } from "./components/personagem-view.js"
import { Mago } from "./modules/mago.js"
import { Arqueiro } from "./modules/arqueiro.js"
import { ArqueiroMago } from "./modules/arqueiro-mago.js"

const magoAntonio = new Mago('Antonio', 4, 'fogo', 4, 3)
const magaJulia = new Mago('Julia', 7, 'gelo', 7, 13)
const magoWagner = new Mago('Wagner', 7, 'luz', 6, 4)


const arqueiroWagner = new Arqueiro('Wagner', 7, 10)

const arqueiroMagoVini = new ArqueiroMago('Vinicius', 51, 10, 'ar', 5, 9)

const personagens = [magaJulia, magoAntonio, magoWagner, arqueiroWagner, arqueiroMagoVini ]

new personagemView(personagens).render()


console.log(Personagem.verificarVencedor(arqueiroMagoVini, magoAntonio))