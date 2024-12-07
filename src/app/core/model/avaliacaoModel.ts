import { Rubrica } from './rubricaModel';
import { Resposta } from './respostaModel';
import { Niveldesempenho } from './niveldesempenhoModel';
export class Avaliacao{
    id: number;
    rubrica: Rubrica;
    comentario: String;
    tipo: String;
    resposta: Resposta;
    nivelDesempenhos : Array<Niveldesempenho>;
}