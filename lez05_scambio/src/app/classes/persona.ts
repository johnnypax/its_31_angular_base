export class Persona {
    nome?: string;
    cognome?: string;
    eta: number = 0;

    constructor(nom?: string, cog?: string, eta: number = 0){
        this.nome = nom;
        this.cognome = cog;
        this.eta = eta;
    }
}