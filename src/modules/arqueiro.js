import { Personagem } from "./personagem.js"

export class Arqueiro extends Personagem {
    destreza
    static tipo = 'Arqueiro'

   constructor(nome, level, destreza) {
    super(nome, level)
         this.destreza = destreza
     }

     obterInsignia (){
        if(this.level >= 5 && this.destreza >=5) {
            return `Dominador de flechas`
        }
        return super.obterInsignia()
     }

 }