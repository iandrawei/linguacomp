import { Rubrica } from "./rubricaModel";
import { Resposta } from "./respostaModel";
import { Niveldesempenho } from "./niveldesempenhoModel";

export class Autoavaliacao{
    id: number;
    rubrica: Rubrica;
    comentario: String;
    resposta: Resposta;
    nivelDesempenhos : Array<Niveldesempenho>;
    
}
